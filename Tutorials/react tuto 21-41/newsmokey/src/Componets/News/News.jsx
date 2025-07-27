import React, { Component } from 'react'
import NewsItem from '../NewsItem/NewsItem'

export default class News extends Component {

  constructor(){
    super();

    // class compnonets we initialize sate using this.state and to set it we use this.setstate
    this.state = {
      articles : [] , 
      loading  : false ,
    }
  }

  // fetching Api
   async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=828e5d6e1535409a96303d13a8101ba9" ;
    let data = await fetch(url)
    let dataparsed = await data.json();
    console.log(dataparsed);
    this.setState({articles : dataparsed.articles})
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


       
      </div>
    )
  }
}
