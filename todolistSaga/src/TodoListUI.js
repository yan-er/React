import React,{ Fragment} from 'react';
import { Input,Button,List} from 'antd';

const TodoListUI = (props) => {
  return (
    <Fragment>
                <div style={{marginLeft:'10px',marginTop:'10px'}}>
                <Input 
                placeholder="todo info" 
                style={{width:'300px',marginRight:'10px'}}
                value={props.inputValue}
                onChange={props.handleInputChange}
                />
                <Button 
                type="primary"
                onClick={props.handleBtnClick}
                >提交</Button>
               <List
               style={{width:'400px',marginTop:'10px'}}
                size="small"
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
    />
                </div>
            </Fragment>
  )
}

export default TodoListUI;