import { AppActions } from "@/services/app/app.slice";
import { toast } from "react-toastify";
import { delay, put, takeLatest } from "redux-saga/effects";
import PostRequest from "./request";
import { PostActions } from "./slice";
function* PostSaga() {
  yield takeLatest(PostActions.createPost, createPost);
  yield takeLatest(PostActions.getPostById, getPostById);
  yield takeLatest(PostActions.updatePost, updatePost);
}
export default PostSaga;

function* getPostById({ payload }) {
  try {
    yield delay(100);
    yield put(AppActions.setIsLoading(true));
    const rs = yield PostRequest.getPostById(payload);
    if (rs.success) {
      yield put(PostActions.setPostDetail(rs.post));
    }
    yield put(AppActions.setIsLoading(false));
  } catch (error) {
    yield put(AppActions.setIsLoading(false));
  }
}

function* createPost({ payload }) {
  try {
    yield put(AppActions.setIsLoading(true));
    const rs = yield PostRequest.createPost(payload.data);
    yield put(AppActions.setIsLoading(false));

    if (rs.success) {
      toast.success(rs.message);
      payload.onSuccess && payload.onSuccess(rs.postId);
    } else {
      throw rs.message;
    }
  } catch (error) {
    console.log(error);
    toast.error(error);
    yield put(AppActions.setIsLoading(false));
  }
}

function* updatePost({ payload }) {
  try {
    yield put(AppActions.setIsLoading(true));
    const rs = yield PostRequest.updatePost(payload.postId, payload.data);
    yield put(AppActions.setIsLoading(false));

    if (rs.success) {
      toast.success(rs.message);
    } else {
      throw rs.message;
    }
  } catch (error) {
    console.log(error);
    toast.error(error);
    yield put(AppActions.setIsLoading(false));
  }
}
