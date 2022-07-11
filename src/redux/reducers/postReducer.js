import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  EDIT_POST,
  CANCEL
} from "../actions/PostAction";

const initialState = {
  postList: [],
};

const postReducer = ( state = initialState, action) => {
  switch (action.type) {
    // ADD POST _________________________________________________________________
    case ADD_POST:
      let updateState;
      const foundItem = state.postList.find((item) => item.id === action.payload.id);
      if (!foundItem) {
        updateState = [ action.payload,...state.postList];
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
    // DELETE_POST _________________________________________________________________
    case DELETE_POST:
      return {
        ...state,
        postList: state.postList.filter((post) => post.id !== action.payload),
      };
    // EDIT_POST _________________________________________________________________
    case EDIT_POST:
      let editState = state.postList.map((item) =>
        item.id === action.payload ? { ...item, editing: !item.editing } : item
      );
      return {
        ...state,
        postList: editState,
      };
    // Cancel _________________________________________________________________
    case CANCEL: 
    let cancle = state.postList.map((item)=>({ ...item, editing: false }));
    return {
      ...state,
      postList:cancle
    }
    // UPDATE_POST _________________________________________________________________
    case UPDATE_POST:
      const updating = state.postList.map((item) => {
        if(item.id === action.payload.id){
           return {
            ...item,
            title: action.payload.title,
            message: action.payload.message,
            editing: false,
          }
        }else return item;
      });
      const filter = updating.filter((item)=>
        item.id===action.payload.id
      )
      const filter2 = updating.filter((item)=>
        item.id!==action.payload.id
      )
      let newArray = [...filter,...filter2]
      return {  
        ...state,
        postList: newArray
      };
   // default _________________________________________________________________   
    default:
      return state;
  }
};
export default postReducer;
