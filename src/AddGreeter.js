import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component
{

    constructor(props) 
    {
       super(props);
       this.state = { greetingsName: '' } 


       this.handleUpdate = this.handleUpdate.bind(this);

       this.addGreetingG = this.addGreetingG.bind(this);
    }

    handleUpdate(event)
    {
       this.setState({ greetingsName: event.target.value })
    }

    render()
    {
       return (
          <div className="AddGreeter">
             <input type="text" onChange={this.handleUpdate} value={this.state.greetingsName} />
             &nbsp;&nbsp;
             <button onClick={this.addGreetingG}>Add to list</button>
          </div>
       )
    }

    addGreetingG()
    {
        this.props.addGreeting(this.state.greetingsName);
        this.setState({ greetingsName: ''});   //set txt in box to null 
    }
}

export default AddGreeter;
