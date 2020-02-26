import React, { Component } from 'react';
import Home from './Components/Home/Home';
import './App.css';

class App extends Component {
  public tempArray = ["Santhosh", "Mukesh", "Asha"]
  public tempObjArray = [{
    name: 'santhosh',
    role: 'sde 2',
    isManager: true
  }, {
    name: 'Mukesh',
    role: 'sde 3',
    isManager: true
  }, {
    name: 'Asha',
    role: 'sde 1',
    isManager: false
  }]

  render() {
    return (
      <div className="App">
        Test
        <Home title="Typescript" age={28} tempArray={this.tempArray} tempObjArray={this.tempObjArray} />
      </div>
    );
  }
}

export default App;
