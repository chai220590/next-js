import { AppActions } from "@/services/app/app.slice";
import _ from "lodash";
import { toast } from "react-toastify";
import { delay, put, select, takeLatest } from "redux-saga/effects";
import PostRequest from "./request";
import { PostActions, PostSelectors } from "./slice";
function* PostSaga() {
  yield takeLatest(PostActions.createPost, createPost);
  yield takeLatest(PostActions.getPostById, getPostById);
  yield takeLatest(PostActions.updatePost, updatePost);
  yield takeLatest(PostActions.getList, getList);
  yield takeLatest(PostActions.setPostBodyListRequest, getList);
  yield takeLatest(PostActions.deletePost, deletePost);
}
export default PostSaga;

function* deletePost({ payload }) {
  try {
    yield put(AppActions.setIsLoading(true));
    yield delay(100);
    const rs = yield PostRequest.deletePost(payload.postId);
    yield put(AppActions.setIsLoading(false));
    if (rs?.success) {
      toast.success(rs.message);
      payload.onSuccess && payload.onSuccess();
    }
  } catch (error) {
    yield put(AppActions.setIsLoading(false));
  }
}
function* getList({ payload }) {
  try {
    yield put(AppActions.setIsLoading(true));
    yield delay(300);
    const postBodyListRequest = yield select(PostSelectors.postBodyListRequest);
    const rs = yield PostRequest.getList(postBodyListRequest);
    yield put(AppActions.setIsLoading(false));
    if (rs?.success) {
      yield put(PostActions.setPostList(rs?.posts?.data));
      const pagination = _.cloneDeep(rs?.posts);
      delete pagination.data;
      yield put(PostActions.setPostPagination(pagination));
    }
  } catch (error) {
    yield put(AppActions.setIsLoading(false));
  }
}

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
      payload.onSuccess && payload.onSuccess();
    } else {
      throw rs.message;
    }
  } catch (error) {
    console.log(error);
    toast.error(error);
    yield put(AppActions.setIsLoading(false));
  }
}
