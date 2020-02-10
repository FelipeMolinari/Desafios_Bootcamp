import React from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline
} from "react-icons/md";

import { Container, ProductTable, Total } from "./styles";
export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom1.jpg"
                alt="Produto"
              />
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#cc2981" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#cc2981" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$158,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete color="#cc2981" size={20} />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$158,80</strong>
        </Total>
      </footer>
    </Container>
  );
}
