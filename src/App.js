import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './action'
import './App.css';

const App = (props) => {
  useEffect(() => {
    actions.tryFunction()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        123456
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: console.log(state.tryState)
})
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...actions
  }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
