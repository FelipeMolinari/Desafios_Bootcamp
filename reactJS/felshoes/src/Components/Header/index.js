import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FaShoppingBasket } from "react-icons/fa";
import logo from "../../assets/imgs/logo.svg";

import { Container, Cart } from "./styled";
function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="rocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <FaShoppingBasket size={36} />
      </Cart>
    </Container>
  );
}
export default connect(state => ({
  cartSize: state.cart.length
}))(Header);
