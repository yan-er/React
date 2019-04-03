import React, { Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input ,Button,List} from 'antd';
import store from './store/index';
import {getInputChangeAction, getAddItemAction,getDeleteItemAction } from './store/actionCreator';
class  TodoList extends Component{
   constructor(props){
       super(props);
       this.state = store.getState();
       this.handleInputChange=this.handleInputChange.bind(this);
       this.handleBtnClick=this.handleBtnClick.bind(this);
       this.handleStoreChange=this.handleStoreChange.bind(this);
       store.subscribe(this.handleStoreChange);
   }
    render(){
        return (
            <Fragment>
                <div style={{marginLeft:'10px',marginTop:'10px'}}>
                <Input 
                placeholder="todo info" 
                style={{width:'300px',marginRight:'10px'}}
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                />
                <Button 
                type="primary"
                onClick={this.handleBtnClick}
                >提交</Button>
               <List
               style={{width:'400px',marginTop:'10px'}}
                size="small"
                bordered
                dataSource={this.state.list}
                renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
    />
                </div>
            </Fragment>
        )
    }
    handleInputChange(e){
        const action =getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClick(){
        const action =getAddItemAction();

        store.dispatch(action);

    }
    handleItemDelete(index){
        const action =getDeleteItemAction(index);
        store.dispatch(action);
    }
}
export default TodoList;