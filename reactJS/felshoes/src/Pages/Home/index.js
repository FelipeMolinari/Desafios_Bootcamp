import React, { Component } from "react";

import api from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { connect } from "react-redux";

import { MdAddShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";

class Home extends Component {
  state = {
    products: []
  };

  onAddProductToCart = product => {
    const { dispatch } = this.props;
    dispatch({
      type: "ADD_TO_CART",
      product
    });
  };

  async componentDidMount() {
    const response = await api.get("products");
    const data = response.data.map(product => ({
      ...product,
      formatedPrice: formatPrice(product.price)
    }));
    this.setState({
      products: data
    });
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.formatedPrice}</span>

            <button
              type="button"
              onClick={() => this.onAddProductToCart(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                <span>3</span>
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
export default connect()(Home);
