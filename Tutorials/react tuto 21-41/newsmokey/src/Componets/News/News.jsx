import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export default class News extends Component {

  constructor(){
    super();

    // class compnonets we initialize sate using this.state and to set it we use this.setstate
    this.state = {
      articles : [] , 
      loading  : false ,
      page : 1
    }
  }

  // fetching Api
   async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=828e5d6e1535409a96303d13a8101ba9&page=1&pagesize=20` ;
    let data = await fetch(url)
    let dataparsed = await data.json();
    this.setState({articles : dataparsed.articles , Totalresults : dataparsed.totalResults})
  }

  // handle next click

  handlenextclick = async ()=>{
    // property that if page is not found dont do anything 
    if( this.state.page + 1 > Math.ceil(this.state.Totalresults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=828e5d6e1535409a96303d13a8101ba9&page=${this.state.page + 1}&pagesize=20` ;
    let data = await fetch(url)
    let dataparsed = await data.json();
    this.setState({
      page : this.state.page + 1 , 
      articles : dataparsed.articles
    });
  }
}

  //handle previous click 
  handleprevclick = async ()=>{
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=828e5d6e1535409a96303d13a8101ba9&page=${this.state.page - 1}&pagesize=20` ;
    let data = await fetch(url)
    let dataparsed = await data.json();
    this.setState({
      page : this.state.page - 1 , 
      articles : dataparsed.articles
    });
  }



  render() {
    return (
      
      <div className='container text-center my-3'>
        <h3>NewsMonkey - Top Headlines</h3>

        {/* Looping through an array in JSX to display NewsItems from news articles one by one */}

       
        <div className="row">
           { this.state.articles.map ( (element , index )=>{
            return <div className="col-md-4" /* key={index}*/ key={element.url}>
             <NewsItem 
                title ={ element.title? element.title : ""} 
                description={ element.description? element.description : ""} 
                imageUrl={element.urlToImage ? element.urlToImage : "https://static.dw.com/image/73420894_6.jpg"}  
                newsUrl = {element.url}
             />
          </div>
           })}          
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleprevclick}> &larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div>

       
      </div>
    )
  }
}
