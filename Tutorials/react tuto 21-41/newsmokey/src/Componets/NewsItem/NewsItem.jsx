import {React, Component } from "react";

export class NewsItem extends Component {
  
  render() {

    let { title , description  , imageUrl , newsUrl , author , date , source} = this.props;  // destructuring methood to unpack values from props to use directly 

    return (
      <div className="my-3">
        <div className="card h-100">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '85%' , zIndex : '1'}}>
            {source}
          </span>
          <img src={imageUrl} alt="News" className="card-img-top" 
          onError={(e) => {
            e.target.onerror = null; // prevent infinite loop
            e.target.src = "https://static.dw.com/image/73420894_6.jpg"; // fallback image
          }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>

            {/* date and author implementation and converting date from ios to GMTstring  */}
          
            <p className="card-text">
              <small className="text-body-secondary">
              by <strong>{author ? author : "Unknown"}</strong> on {new Date(date).toUTCString()}
              </small>
            </p>
            <a rel="norefrence" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
