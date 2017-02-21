import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {

  constructor(props){
      super(props);
      this.state = {
          name: props.name
      }
      this.handelClick = this.handelClick.bind(this);
  }

  handelClick(){
      alert("Hello World = "+this.props.name);
  }

  _log(methodName, args) {
    console.log(methodName, args);
  }

  componentWillUpdate() {
    
    this._log('componentWillUpdate', arguments);
  }
  componentDidUpdate() {
    this._log('componentDidUpdate', arguments);
  }
  componentWillMount() {
    this._log('componentWillMount', arguments);
  }
  componentDidMount() {
    this._log('componentDidMount', arguments);
  }
  componentWillUnmount() {
    this._log('componentWillUnmount', arguments);
  }




  render() {
    return (
        <div>
            <div>Hello World: {this.props.name}</div>
            <div>Your age: {this.props.age}</div>
            <div>Your email: {this.props.email}</div>
            <button onClick={this.handelClick} >Click Here</button>
        </div>
    );
  }
}

Hello.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired
};
Hello.defaultProps = {
  email: 'abc@gmail.com'
};
export default Hello;
