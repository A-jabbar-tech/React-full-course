import { useState, useEffect } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const captalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${captalize(props.category)} - NewsMonkey`;
  const updatenews = async () => {
    props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true);
    props.setprogress(30);
    let data = await fetch(url);
    props.setprogress(50);
    let dataparsed = await data.json();
    props.setprogress(80);
    setArticles(dataparsed.articles);
    setTotalResults(dataparsed.totalResults);
    setLoading(false);
    props.setprogress(100);
  };
  // fetching Api
  useEffect(() => {
    updatenews();
  }, []);
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let dataparsed = await data.json();
    setArticles(articles.concat(dataparsed.articles));
    setTotalResults(dataparsed.totalResults);
  };
  return (
    <>
      <h3 className="text-center" style={{ margin: "35px 0px" , marginTop : '90px'}}>
        NewsMonkey - Top{" "}
        <span className="text-danger">{captalize(props.category)}</span>{" "}
        Headlines
      </h3>
      {/* adding infinite scroll bar  */}
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        {/* Looping through an array in JSX to display NewsItems from news articles one by one */}
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
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

// proptypes
News.defaultProps = {
  pagesize: 5,
  country: "us",
  category: "general",
};
News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
