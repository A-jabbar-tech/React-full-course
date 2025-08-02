import React, { Component } from 'react'
import Navbar from './Componets/Navbar/Navbar'
import News from './Componets/News/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';




export default class App extends Component {


  pagesize = 7 ;


  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" pagesize={this.pagesize} country="us" category="general" />} />
          <Route path="/Business" element={<News key="business" pagesize={this.pagesize} country="us" category="business" />} />
          <Route path="/Entertainment" element={<News key="entertainment" pagesize={this.pagesize} country="us" category="entertainment" />} />
          <Route path="/Health" element={<News key="health" pagesize={this.pagesize} country="us" category="health" />} />
          <Route path="/Science" element={<News key="science" pagesize={this.pagesize} country="us" category="science" />} />
          <Route path="/Sports" element={<News key="sports" pagesize={this.pagesize} country="us" category="sports" />} />
          <Route path="/Technology" element={<News key="technology" pagesize={this.pagesize} country="us" category="technology" />} />
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}