import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Clock from './components/Clock';
import { LifeCycleComponent } from './components/LifeCycleComponent/index';
import Task1 from './homework/Task1';
import Task2 from './homework/Task2';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true,
      name: 'Hide comments'
    }
  }
  render() {
    return (
    <div className="App">
      <h1>Lesson 4</h1>
      <h3>Task 2</h3>
      <Task2/>
      <h3>Task 1</h3>
      <button className='btn' onClick={() => {
        this.setState({isShow: !this.state.isShow}); 
        !this.state.isShow ? (this.state.name = 'Hide comments') : (this.state.name = 'Unhide comments')}}>{this.state.name}</button>
      {this.state.isShow && <Task1/>}
      {/* <button onClick={() => this.setState({isShow: !this.state.isShow})}>Click</button> */}
      {/* {this.state.isShow && <LifeCycleComponent/>} */}
      {/* {this.state.isShow && <Clock/>} */}
      {/* <Counter/> */}
      {/* <LifeCycleComponent/> */}
    </div>
  )
  }
}

export default App;
