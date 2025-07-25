import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container text-center'>
        <h3>This is News Components</h3>
        <NewsItem/>
      </div>
    )
  }
}
