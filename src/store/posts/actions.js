import { fetchData } from "../../utils/api";

export const fetchPosts = () => (dispatch) => {
  dispatch({
    type: "START_FETCH_POSTS",
  });
  fetchData("/posts")
    .then((posts) => {
      const action = loadedPosts(posts);
      dispatch(action);
    })
    .catch(() => {
      dispatch(errorLoading());
    });
};

export const loadedPosts = (posts) => {
  return {
    type: "LOADED_POSTS",
    payload: { postsList: posts },
  };
};

export const errorLoading = () => ({
  type: "ERROR_LOADED_POSTS",
});
