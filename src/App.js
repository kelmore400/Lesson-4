import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Clock from './components/Clock';
import { LifeCycleComponent } from './components/LifeCycleComponent/index';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true
    }
  }
  render() {
    return (
    <div className="App">
      <h1>Lesson 4</h1>
      <button onClick={() => this.setState({isShow: !this.state.isShow})}>Click</button>
      {/* {this.state.isShow && <LifeCycleComponent/>} */}
      {this.state.isShow && <Clock/>}
      <Counter/>
      <LifeCycleComponent/>
    </div>
  )
  }
}

export default App;
