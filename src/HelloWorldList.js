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

     this.addGreeting = this.addGreeting.bind(this);         //in order to be sure the actual situation is current, bind the function as a property of the component (this)  

     this.removeGreeting = this.removeGreeting.bind(this);
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
                         ( <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting} /> )
                      )
                                                            //pass the function down as property of each HelloWorld component
                    );
    }

    addGreeting(newName) 
    {
        console.log('in HelloWorld addGreeting called from AddGreeter\'s addGreeting ['+this.state.greetings+']');
        this.setState({ greetings: [...this.state.greetings, newName] }); 

        //the atual newName will only actually be present in the list when react has rerendered the components/page .... 
    }

    removeGreeting(name2remove)
    {
        const filteredGreetings = this.state.greetings.filter(name => { return name !== name2remove; });
        this.setState({ greetings: filteredGreetings}); 
    }
}


export default HelloWorldList;
