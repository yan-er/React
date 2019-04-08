import React,{ Component, Fragment} from 'react';
import './style.css';

class Dialog extends Component{
  constructor(props){
    super(props);
    this.state={
      className:'hide',
      content:'hello'
    }
    this.handleClick=this.handleClick.bind(this);
    this.btnCancel=this.btnCancel.bind(this);
    this.btnOk=this.btnOk.bind(this);
  }

  render(){
    return(
      <Fragment>
        <button
        onClick={this.handleClick}
        >
        打开弹窗</button>
        <div
        id={'dialog'}
        className={this.state.className}
        >

        {this.state.content}
        <button
        onClick={this.btnCancel}
        >取消</button>
        <button
        onClick={this.btnOk}
        >确认</button>

        </div>
      </Fragment>
    )
  }

  handleClick(){
    this.setState({
      className : (this.state.className==='hide'?'show':'hide')
    })
  }

  btnCancel(){
    this.setState({
      className : (this.state.className==='hide'?'show':'hide')
    })
  }
  btnOk(){
    this.setState({
      className : (this.state.className==='hide'?'show':'hide')
    })
  }
}

export default Dialog;