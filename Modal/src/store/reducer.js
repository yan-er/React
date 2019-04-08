import { SHOW_MODAL_ACTION, HANDLE_OK_ACTION, HANDLE_CANCEL_ACTION,INIT_LIST_ACTION} from './actionTypes';

const defaultState={
  visible:true,
  content:'hello'
}

export default (state= defaultState, action) => {
  if(action.type === SHOW_MODAL_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.visible = action.visible;
    return newState;
  }

  if(action.type === HANDLE_OK_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.visible = action.visible;
    return newState;
  }

  if(action.type === HANDLE_CANCEL_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.visible = action.visible;
    return newState;
  }


  if(action.type === INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state));
    newState.content = action.data;
    return newState;
  }
  return state;
}
