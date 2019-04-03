import React, { Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './csstransition.css';
class TransitionG extends Component{
    constructor(props){
        super(props);
        this.state={
            list: []
        }
        this.handleAddItem=this.handleAddItem.bind(this);
    }

    render(){
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <CSSTransition
                                 timeout={ 1000}
                                classNames='fade'
                               unmountOnExit
                                 onEntered={(el) => { el.style.color = 'blue' }}
                                 appear={true}
                                key={index}
                             >
                                <div>{item}</div>
                            </CSSTransition>
                            )
                        })
                    }
               
                </TransitionGroup>
            <button onClick={this.handleAddItem}>多个显示</button>
            </Fragment>
        )
    }
    handleAddItem(){
        this.setState((prevState)=>{
          return {
              list:[...prevState.list, 'item']
          } 
        })
    }
}

export default TransitionG;