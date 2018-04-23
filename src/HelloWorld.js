import React from 'react';
//import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import './HelloWorld.css';
//import './App.css';



const HelloWorld = props => 
{
//  return (<div className="App"><font color='red'>Hello World!</font></div>)
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      <p className="App-intro">
        <font color='red'>Hello <i>{props.name}</i> !</font>
      </p>
    </div>
  );
};

export default HelloWorld;