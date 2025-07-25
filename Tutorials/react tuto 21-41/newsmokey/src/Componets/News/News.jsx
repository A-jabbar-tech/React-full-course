import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container text-center my-3'>
        <h3>NewsMonkey - Top Headlines</h3>

        <div className="row">

          <div className="col-md-4">
             <NewsItem title ="mytitle" description="my desc"/>
          </div>

          <div className="col-md-4">
             <NewsItem title ="mytitle" description="my desc"/>
          </div>

          <div className="col-md-4">
             <NewsItem title ="mytitle" description="my desc"/>
          </div>

        </div>


       
      </div>
    )
  }
}
