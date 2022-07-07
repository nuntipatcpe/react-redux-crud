import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  EDIT_POST,
} from "../actions/PostAction";

const initialState = {
  postList: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let updateState;
      const foundItem = state.postList.find(
        (item) => item.id === action.payload.id
      );
      if (!foundItem) {
        updateState = [...state.postList, action.payload];
      } else {
        updateState = state.postList.map((item) => ({
          ...item,
          quantity:
            item.id === foundItem.id ? item.quantity + 1 : item.quantity,
        }));
      }
      return {
        ...state,
        postList: updateState,
      };
    case DELETE_POST:
      return {
        ...state,
        postList: state.postList.filter((post) => post.id !== action.payload),
      };

    case EDIT_POST:
      let editState = state.postList.map((item) =>
        item.id === action.payload ? { ...item, editing: !item.editing } : item
      );
      return {
        ...state,
        postList: editState,
      };
    case UPDATE_POST:
      const updating = state.postList.map((item) => item.id === action.payload);
      let newState;
      if (updating) {
        newState = state.postList.map((item) => ({
          ...item,
          title: action.payload.title,
          message: action.payload.message,
          editing: false,
        }));
      }
      console.log(newState);
      return {
        ...state,
        postList: newState,
      };
    default:
      return state;
  }
};
export default postReducer;
