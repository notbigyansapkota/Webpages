import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    // DONT USE THIS --> this.state.persons[0].name = 'BigyanDone'

    this.setState({
      persons: [
        {name: newName, age: 18},
        {name: 'Cutiepie', age: 15},
        {name: 'Saitama', age: 2}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 18},
        {name: event.target.value, age: 15},
        {name: 'Saitama', age: 12}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1ps solid blue',
      padding: '8px', 
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler('OhMyJod')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age = {this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Binaya')}
          changed = {this.nameChangedHandler}>My Hobbies: Guitar</Person>
        <Person 
          name={this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
