import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from 'antd';
import * as actions from './action'
import EditForm from './editForm/container/EditForm'
import './App.css';

const App = (props) => {
  // console.log(props, actions)
  useEffect(() => {
    // props.tryFunction()
    // props.valueCompareFunction()
    // props.CreateNewAction()
    props.postQuery()
    // props.getList()

  }, [])
  let handleClick = () => {
    props.actions.tryFunction()

  }
  let handleState = () => {
    props.valueCompareFunction()
  }
  // console.log('list', props.list)
  return (
    <div className="App">
      <Button type="danger">Danger</Button>
      <EditForm />
      {/* <header>
        <div onClick={handleClick}>测试</div>
        <div onClick={handleState}>修改state的方法</div>
        <div>valueCompare{props.valueCompare.a}</div>
        {props.tryState}
      </header> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  tryState: state.tryState,
  news: state.news,
  valueCompare: state.valueCompare,
  list: state.list
})
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...actions
  }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
