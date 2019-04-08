import React, { Component, Fragment } from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import store from './store';
import { getdata, showModalAction, handleOkAction, handleCancelAction} from './store/actionCreator';

class ModalTest extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.storeChange=this.storeChange.bind(this);
    this.showModal=this.showModal.bind(this);
    this.handleOk=this.handleOk.bind(this);
    this.handleCancel=this.handleCancel.bind(this);

    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <Fragment>
      <Button type="primary" onClick={this.showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>this.state.content</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
     </Fragment>
    );
  }

  componentDidMount() {
    const action = getdata();
    store.dispatch(action);
}

  showModal(){
    const action = showModalAction(true);
    store.dispatch(action);
  }

  handleOk(){
    const action = handleOkAction(false);
    store.dispatch(action);
  }

  handleCancel(){
    const action = handleCancelAction(false);
    store.dispatch(action);
  }

}

export default ModalTest;
