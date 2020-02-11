import React from "react";
import { connect } from "react-redux";

// Utilizando BINDACTIONCREATORS
import { bindActionCreators } from "redux";
import * as actionsCart from "../../store/modules/cart/actions";
import { formatPrice } from "../../utils/formatPrice";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline
} from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";

function Cart({ cart, total, removeFromCart, updateCartAmount }) {
  function incrementAmount(product) {
    updateCartAmount(product.id, product.amount + 1);
  }
  function decrementAmount(product) {
    updateCartAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>R$129,90</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => decrementAmount(product)}
                  >
                    <MdRemoveCircleOutline size={20} color="#cc2981" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button
                    type="button"
                    onClick={() => incrementAmount(product)}
                  >
                    <MdAddCircleOutline size={20} color="#cc2981" />
                  </button>
                </div>
              </td>

              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(product.id)}
                >
                  <MdDelete color="#cc2981" size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  )
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionsCart, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
