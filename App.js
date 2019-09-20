import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { onCountChange } from "./store/actions/action";
import { onCountDecrease } from './store/actions/onCountDecrease'
class App extends Component {
  constructor(props) {
    super(props)


  }

  render() {
    // console.log(this.props.onUpdateUser)
    return (

      <div>
        value from reducer is : {this.props.count}
        <br></br>
        <button onClick={this.props.onCountChange}>Increase</button>
        <button onClick={this.props.onCountDecrease}>Decrease</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.mainReducer.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onCountChange: onCountChange,
    onCountDecrease: onCountDecrease
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
