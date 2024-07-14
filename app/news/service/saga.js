import { put, takeLatest } from "redux-saga/effects";
import { NewsActions } from "./reducer";
import NewsRequest from "./request";
import { AppActions } from "@/services/app/app.slice";
function* NewsSaga() {
  yield takeLatest(NewsActions.getNews, getNews);
}

export default NewsSaga;

function* getNews() {
  try {
    yield AppActions.setIsLoading(true);
    const rs = yield NewsRequest.getPublic();
    yield AppActions.setIsLoading(false);

    // xl sau khi gọi api
    console.log(rs);

    if (rs.success) {
      yield put(NewsActions.setNews(rs.posts));
    } else {
      throw rs.message;
    }
  } catch (error) {
    console.error(error);
    yield AppActions.setIsLoading(false);
  }
}
