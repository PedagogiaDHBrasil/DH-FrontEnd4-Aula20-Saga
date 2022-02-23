import axios from "axios";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { saveOrder } from "../actions";

function* makeOrderSaga() {
  const order = yield select((state) => state.orderReducer.products);

  try {
    const request = yield call(axios.post, "https://api.com", order);

    yield put(saveOrder());
  } catch (error) {
    console.log(error);
  }
}

export default function* sagas() {
  yield takeLatest("SAVE_ORDER", makeOrderSaga);
}
