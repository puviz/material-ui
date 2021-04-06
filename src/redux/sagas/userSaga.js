import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { getUserService } from "../../services/userService";
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_REQUESTED,
} from "../types";

function* getUsers() {
  try {
    const users = yield call(getUserService);
    yield put({ type: GET_USERS_SUCCESS, users: users });
  } catch (err) {
    yield put({ type: GET_USERS_FAILED, message: err.message });
  }
}

function* watchGetUsers() {
  yield takeEvery(GET_USERS_REQUESTED, getUsers);
}

function* userSaga() {
  yield all([fork(watchGetUsers)]);
}
export default userSaga;
