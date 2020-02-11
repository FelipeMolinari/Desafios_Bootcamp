import React, { Component } from "react";

import api from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { connect } from "react-redux";

import { MdAddShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";
import * as actionsCart from "../../store/modules/cart/actions";

class Home extends Component {
  state = {
    products: []
  };

  onAddProductToCart = id => {
    const { dispatch } = this.props;
    dispatch(actionsCart.addToCartRequest(id));
  };

  async componentDidMount() {
    const response = await api.get("products");
    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price)
    }));
    this.setState({
      products: data
    });
  }

  render() {
    const { amount } = this.props;
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>

            <button
              type="button"
              onClick={() => this.onAddProductToCart(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                <span>{amount[product.id] || 0}</span>
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
});
export default connect(mapStateToProps)(Home);
