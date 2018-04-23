import React from 'react';
//import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
//import './App.css';

/*
class App extends Component 
{
  render() 
  {
    /*
    return  (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    
   return (<div className="App"><font color='red'>Hello World!</font></div>)
  }
}

*/


const App = () => 
{
//  return (<div className="App"><font color='red'>Hello World!</font></div>)
  return (
    <div className="App">
      <HelloWorld name="Gert"/>
      <p />
      <HelloWorld name="Laurence"/>
    </div>
  );
};

export default App;
