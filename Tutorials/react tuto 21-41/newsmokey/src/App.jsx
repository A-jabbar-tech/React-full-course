import React, { Component } from 'react'
import Navbar from './Componets/Navbar/Navbar'
import News from './Componets/News/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  pagesize = 7 ;

  state = {
    progress : 0
  }

  setprogress = (progress)=>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        {/* creating loading bar */}
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
        />
        <Navbar />
        

        <Routes>
          <Route path="/" element={<News setprogress={this.setprogress} key="general" pagesize={this.pagesize} country="us" category="general" />} />
          <Route path="/Business" element={<News setprogress={this.setprogress} key="business" pagesize={this.pagesize} country="us" category="business" />} />
          <Route path="/Entertainment" element={<News setprogress={this.setprogress} key="entertainment" pagesize={this.pagesize} country="us" category="entertainment" />} />
          <Route path="/Health" element={<News setprogress={this.setprogress} key="health" pagesize={this.pagesize} country="us" category="health" />} />
          <Route path="/Science" element={<News setprogress={this.setprogress} key="science" pagesize={this.pagesize} country="us" category="science" />} />
          <Route path="/Sports" element={<News setprogress={this.setprogress} key="sports" pagesize={this.pagesize} country="us" category="sports" />} />
          <Route path="/Technology" element={<News setprogress={this.setprogress} key="technology" pagesize={this.pagesize} country="us" category="technology" />} />
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}