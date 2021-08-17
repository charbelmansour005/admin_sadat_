export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const DELETE_ITEM = "DELETE_ITEM";
export const SAVE_USER = "SAVE_USER";

export const getPosts = () => {
  try {
    return async (dispatch) => {
      const url = "https://jsonplaceholder.typicode.com/posts";
      fetch(url)
        .then((res) => res.json())
        .then((resJson) => {
          dispatch({
            type: GET_POSTS,
            payload: resJson,
          });
        });
    };
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (item) => {
  try {
    return async (dispatch) => {
      dispatch({
        type: ADD_POST,
        payload: item,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (item) => {
  try {
    return async (dispatch) => {
      dispatch({
        type: DELETE_ITEM,
        payload: item,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getUserId = (id) => {
  try {
    return async (dispatch) => {
      dispatch({
        type: SAVE_USER,
        payload: id,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
