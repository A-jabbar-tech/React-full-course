import React, { Component } from 'react'
import Navbar from './Componets/Navbar/Navbar'
import News from './Componets/News/News'


// props we use :
// category= {business , entertainment , general , health , science , sports , technology}







export default class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar/>
        <News pagesize={5} country='us' category='general'/>
      </div>
    )
  }
}