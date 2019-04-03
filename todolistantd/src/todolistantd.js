import React, { Component, Fragment} from 'react';
import 'antd/dist/antd.css';
import { Input ,Button,List, Typography} from 'antd';
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
class  TodoList extends Component{
   
    render(){
        return (
            <Fragment>
                <div style={{marginLeft:'10px',marginTop:'10px'}}>
                <Input placeholder="todo info" style={{width:'300px',marginRight:'10px'}}/>
               < Button type="primary">提交</Button>
               <List
               style={{width:'400px',marginTop:'10px'}}
      size="small"
      bordered
      dataSource={data}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
                </div>
            </Fragment>
        )
    }
}
export default TodoList;