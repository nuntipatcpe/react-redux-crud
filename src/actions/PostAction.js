
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const EDIT_POST = 'Edit_POST'

export function postAction(addPost) {
  return {
    type: ADD_POST,
    payload: addPost
  }
}
export function deletcAction(id) {
  return {
    type: DELETE_POST,
    payload: id
  }
}
export function updateAction(id) {
  return {
    type: UPDATE_POST,
    payload: id
  }
}
export function editAction(item) {
  return {
    type: EDIT_POST,
    payload: item
  }
}
