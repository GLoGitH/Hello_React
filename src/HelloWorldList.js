import React, { Component } from 'react';
import './HelloWorldList.css';
//import logo from './logo.svg';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component 
{
    constructor(props)
    {
     super(props);
     this.state = { greetings: ['Gert', 'Jolien', 'Marie'] };

     this.addGreeting = this.addGreeting.bind(this);  
    }

    render() 
    {
      return (
          <div className="HelloWorldList">
            <AddGreeter addGreeting={this.addGreeting} />
            {/* 
            <img src={logo} className="App-logo" alt="React logo" /> 
            <h1 className="App-title">Welcome to React</h1>
            <p className="App-intro">
              <font color='red'>Hello world !</font>
            </p>
            */}
            { this.renderGreetings() }
            { console.log('rendering HelloWorldList ['+this.state.greetings+']') }
          </div>
      );
    }

    renderGreetings()
    {
        return (this.state.greetings
                  .map(name => 
                         ( <HelloWorld key={name} name={name} /> )
                      )
               );
    }

    addGreeting(newName) 
    {
        console.log('in HelloWorld addGreeting called from AddGreeter\'s addGreeting ['+this.state.greetings+']');
        this.setState({ greetings: [...this.state.greetings, newName] });
    }
}


export default HelloWorldList;
