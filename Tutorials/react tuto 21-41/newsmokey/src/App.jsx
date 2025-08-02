import React, { Component } from 'react'
import Navbar from './Componets/Navbar/Navbar'
import News from './Componets/News/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  pagesize = 7 ;

  ApiKey = "828e5d6e1535409a96303d13a8101ba9";
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
          <Route path="/" element={<News setprogress={this.setprogress} ApiKey={this.ApiKey} key="general" pagesize={this.pagesize} country="us" category="general" />} />
          <Route path="/Business" element={<News setprogress={this.setprogress} ApiKey={this.ApiKey} key="business" pagesize={this.pagesize} country="us" category="business" />} />
          <Route path="/Entertainment" element={<News setprogress={this.setprogress} ApiKey={this.ApiKey} key="entertainment" pagesize={this.pagesize} country="us" category="entertainment" />} />
          <Route path="/Health" element={<News setprogress={this.setprogress} ApiKey={this.ApiKey} key="health" pagesize={this.pagesize} country="us" category="health" />} />
          <Route path="/Science" element={<News setprogress={this.setprogress} ApiKey={this.ApiKey} key="science" pagesize={this.pagesize} country="us" category="science" />} />
          <Route path="/Sports" element={<News setprogress={this.setprogress} ApiKey={this.ApiKey} key="sports" pagesize={this.pagesize} country="us" category="sports" />} />
          <Route path="/Technology" element={<News setprogress={this.setprogress} ApiKey={this.ApiKey} key="technology" pagesize={this.pagesize} country="us" category="technology" />} />
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}