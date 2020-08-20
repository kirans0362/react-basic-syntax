import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state ={
    para:[
      {username: "para three"},
      {username: "para 2"}
    ]
  }
  userNameChanged=(event)=>{
    this.setState({
      para:[
        {username: event.target.value},
        {username: "para 2"}
      ]
    }
      
    )
  }

  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
    }
    return (
      <div className="App" style={style}>
        <UserInput change={this.userNameChanged}></UserInput>
        <UserOutput username={this.state.para[0].username}></UserOutput>
        <UserOutput username={this.state.para[1].username}></UserOutput>
      </div>
    );
  }
}

export default App;
