const initialState = {
  posts: { posts: [], isLoading: false, hasError: false },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCH_POSTS": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "LOADED_POSTS": {
      return {
        ...state,
        posts: action.payload.postsList,
        isLoading: false,
      };
    }
    case "ERROR_LOADED_POSTS": {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
