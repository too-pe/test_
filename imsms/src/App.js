import React , { Component } from 'react'
import Home from './pages/Home/Home.js'
import User from './pages/User/User.js'
class App extends Component{ 
  render(){
  return (
    <div>
      <Home></Home>
      <User></User>
    </div>
    
  );
          }
}

export default App;
