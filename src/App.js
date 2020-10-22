import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import './App.css';

const App = (props) => {
  console.log(props, actions)
  useEffect(() => {
    props.actions.tryFunction()
    props.actions.CreateNewActions()

  }, [])
  let handleClick = () => {
    props.actions.tryFunction()

  }
  let handleState = () => {
    props.actions.valueCompareFunction()
  }
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={handleClick}>测试</div>
        <div onClick={handleState}>修改state的方法</div>
        {props.tryState}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tryState: state.tryState
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...actions
  }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
