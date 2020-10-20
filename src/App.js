import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import './App.css';

const App = (props) => {
  useEffect(() => {
    actions.tryFunction()

  }, [])
  let handleClick = () => {
    console.log('test');

    actions.tryFunction()
  }
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={handleClick}>测试</div>
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
