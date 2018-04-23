//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';
import './HelloWorld.css';
//import './App.css';


/*
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
*/

class HelloWorld extends Component 
{
   constructor(props) 
   {
        super(props);
        this.state = { greeting: 'Hello' };

        this.goDutch = this.goDutch.bind(this);

        this.removeGreetingHW = this.removeGreetingHW.bind(this);
    }

   goDutch()
   {
       this.setState({ greeting: 'Hallookes'});
   }

  render() 
  {
    return  (
        <div className="HelloWorld">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p className="App-intro">
            <font color='red'>{this.state.greeting} <i>{this.props.name}</i> !</font>
          </p>
          <button onClick={this.goDutch}>Vervlaams!</button>
          <br />
          <button onClick={this.removeGreetingHW}>Remove this one</button>
        </div>
      );
    }

    removeGreetingHW()
    {
        this.props.removeGreeting(this.props.name)
    }
}

export default HelloWorld;
