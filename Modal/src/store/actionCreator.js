import { GET_DATA, SHOW_MODAL_ACTION, HANDLE_OK_ACTION, HANDLE_CANCEL_ACTION,INIT_LIST_ACTION} from './actionTypes';

export const getdata=(data) => ({
  type:GET_DATA,
  data
});

export const showModalAction=(visible) => ({
  type:SHOW_MODAL_ACTION,
  visible
});

export const handleOkAction=(visible) => ({
  type:HANDLE_OK_ACTION,
  visible
});

export const handleCancelAction=(visible) =>({
  type:HANDLE_CANCEL_ACTION,
  visible
});
export const initListAction = (data) => ({
  type:INIT_LIST_ACTION,
  data
});