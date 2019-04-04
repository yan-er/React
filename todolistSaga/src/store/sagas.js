import { takeEvery, put} from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreator';
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('./list.json');
    const action = initListAction(res.data);
    yield put(action);
  }catch(e) {
    console.log('list.json网络请求错误');
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
