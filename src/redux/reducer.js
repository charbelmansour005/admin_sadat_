import { GET_POSTS, ADD_POST, DELETE_ITEM, SAVE_USER } from "./actions";

const initialState = {
  posts: [],
  postItem: [],
  currentUser: "",
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        postItem: [...state.postItem, action.payload],
      };

    case DELETE_ITEM:
      return {
        ...state,
        postItem: state.postItem.filter(
          (data) => data.id !== action.payload.id
        ),
      };

    case SAVE_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}

export default postReducer;
