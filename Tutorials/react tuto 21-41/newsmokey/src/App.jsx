import React from 'react'
import Navbar from './Componets/Navbar/Navbar'
import News from './Componets/News/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
import { useState } from 'react';


function App(){
  const [progress , setProgress] = useState()
  let pagesize = 7 ;
  const ApiKey = "828e5d6e1535409a96303d13a8101ba9";
  const setprogress = (progress)=>{
    setProgress(progress)
  }


    return (
      <div>
        <BrowserRouter>
        {/* loading bar */}
        <LoadingBar
          color="#f11946"
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<News setprogress={setprogress} ApiKey={ApiKey} key="general" pagesize={pagesize} country="us" category="general" />} />
          <Route path="/Business" element={<News setprogress={setprogress} ApiKey={ApiKey} key="business" pagesize={pagesize} country="us" category="business" />} />
          <Route path="/Entertainment" element={<News setprogress={setprogress} ApiKey={ApiKey} key="entertainment" pagesize={pagesize} country="us" category="entertainment" />} />
          <Route path="/Health" element={<News setprogress={setprogress} ApiKey={ApiKey} key="health" pagesize={pagesize} country="us" category="health" />} />
          <Route path="/Science" element={<News setprogress={setprogress} ApiKey={ApiKey} key="science" pagesize={pagesize} country="us" category="science" />} />
          <Route path="/Sports" element={<News setprogress={setprogress} ApiKey={ApiKey} key="sports" pagesize={pagesize} country="us" category="sports" />} />
          <Route path="/Technology" element={<News setprogress={setprogress} ApiKey={ApiKey} key="technology" pagesize={pagesize} country="us" category="technology" />} />
        </Routes>
      </BrowserRouter>
      </div>
    )

}

export default App;