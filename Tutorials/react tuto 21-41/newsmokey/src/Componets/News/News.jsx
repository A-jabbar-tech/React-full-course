import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  // proptypes
  static defaultProps = {
    pagesize: 5,
    country: "us",
    category: "general",
  };

  static propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };
  captalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  constructor(props) {
    super(props);
    // class compnonets we initialize sate using this.state and to set it we use this.setstate
    this.state = {
      articles: [],
      loading: false,
      page: 1, 
      totalResults : 0
    };

    document.title = `${this.captalize(this.props.category)} - NewsMonkey`
  }

  // refactoring      we use this as function in all fetching api , nexthandle , previous handele and remove other code to look clean and readable
  async updatenews() {
    this.props.setprogress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
     this.props.setprogress(30)
    let data = await fetch(url);
     this.props.setprogress(50)
    let dataparsed = await data.json();
     this.props.setprogress(80)
    this.setState({
      articles: dataparsed.articles,
      Totalresults: dataparsed.totalResults,
      loading: false,
    });
    this.props.setprogress(100)
  }

  // fetching Api
  async componentDidMount() {
    this.updatenews();
  }

fetchMoreData = async() => {
    this.setState({page : this.state.page + 1});
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    
    let data = await fetch(url);
    let dataparsed = await data.json();

    this.setState({
      articles: this.state.articles.concat(dataparsed.articles),
      Totalresults: dataparsed.totalResults,
    });
  };

  render() {
    return (
      <>
        <h3 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top <span className="text-danger">{this.captalize(this.props.category)}</span> Headlines
        </h3>
        

        {/* adding infinite scroll bar  */}
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={ <Spinner />}
        >



        {/* Looping through an array in JSX to display NewsItems from news articles one by one */}
        <div className="container">
          <div className="row">
            {
              this.state.articles.map((element, index) => {
                return (
                  <div className="col-md-4" /* key={index}*/ key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://static.dw.com/image/73420894_6.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        </InfiniteScroll>

      </>
    );
  }
}
