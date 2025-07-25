import React, { Component } from 'react'
import Navbar from './Componets/Navbar/Navbar'
import News from './Componets/News/News'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}