import React, { Component, Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import './csstransition.css';
class Transition extends Component{
    constructor(props){
        super(props);
        this.state={
            show: true
        }
        this.handleToggle=this.handleToggle.bind(this);
    }

    render(){
        return (
            <Fragment>
                <CSSTransition 
                    in={this.state.show}
                    timeout={ 1000}
                    classNames='fade'
                    unmountOnExit
                    onEntered={(el) => { el.style.color = 'blue' }}
                    appear={true}
                >
                    <div> world </div>
                </CSSTransition>
            <button onClick={this.handleToggle}>显示/隐藏 </button>
            </Fragment>
        )
    }
    handleToggle(){
        this.setState(()=>({
            show: this.state.show? false: true
        }))
    }
}

export default Transition;