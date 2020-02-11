import { call, put, select, all, takeLatest } from "redux-saga/effects";
import api from "../../../services/api";
import { formatPrice } from "../../../utils/formatPrice";
import { addToCartSuccess, updateCartAmount } from "./actions";
import { toast } from "react-toastify";
function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);
  const stock = yield call(api.get, `/stock/${id}`);
  const productExist = yield select(state => state.cart.find(p => p.id === id));

  const stockAmount = stock.data.amount;
  const amount = productExist ? productExist.amount + 1 : 0;

  if (amount > stockAmount) {
    toast.error("Quantidade solicitada fora de estoque");
    return;
  }
  if (productExist) {
    yield put(updateCartAmount(id, amount));
  } else {
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    };
    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest("@cart/Add_Request", addToCart)]);
