
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
//import axios from 'axios';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list :[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleBtnClick=this.handleBtnClick.bind(this);
        this.handleItemDelete=this.handleItemDelete.bind(this);
    }
    
    
    render(){
        return (
            <Fragment>

                <div>
                    <label htmlFor='insertArea' >输入内容</label>
                    <input 
                        id="insertArea"
                        className='input'
                        value={ this.state.inputValue }
                        onChange = {this.handleInputChange}
                        />
                        <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                       this.getTodoItem()
                    }
                </ul>
                 
            </Fragment>       
 )
    }
    //组件即将被挂载到页面的时刻，自动被执行
    componentWillMount(){
        console.log('componentWillMount');
    }
    //组件被挂载到页面之后，自动被执行
    componentDidMount(){
        // axios.get('/git/React/todolist') //ajax请求
        // .then(() =>{  alert( 'succ')})
        // .catch(() => { alert('error')});
        console.log('componentDidMount');

    }
    //组件被更新之前，他会自动执行
    // shouldComponentUpdate(){
    //     console.log('shouldComponentUpdate');
    //     return true;
    // }
    //组件被更新之前执行，但是在shouldComponentUpdate之后执行，如果返回true，则执行
    //返回false不执行。
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    //组件更新完成之后，他会自动执行
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    //一个组件要从父组件接收参数
   // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行。
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行。
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    //当这个组件即将被从页面中剔除的时候，会被执行
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    
    getTodoItem(){
        return this.state.list.map(( item, index)=> {
            return (
                <div key={item}>
                    <TodoItem 
                    content={item}
                    index={index}
                    deleteItem={this.handleItemDelete}
                    />
    
                </div>
            )
    
        })
    }
    handleInputChange(e){
        const value=e.target.value;
        this.setState(() => ({
             inputValue:value
        }))
    }
    handleBtnClick(){
        this.setState((prevState) =>({
            list: [...prevState.list,prevState.inputValue],
            inputValue:''
        }))
    }
    
    handleItemDelete(index){
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        })
    }
    
} 


    export default TodoList;
