
import React from "react";

const NewsItem =(props) => {
  
    let { title, description, imageUrl, newsUrl, author, date, source } =
      props;
    return (
      <div>
        <div className="card mx-1 my-1" >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="  badge rounded-pill bg-danger ">
              {source}
            </span>
          </div>

          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body" style={{backgroundColor:props.mode==='dark'?'white':'lightgrey'}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-success">
                {author ? "By " + author : ""}{" "}
                {date ? "On " + new Date(date).toGMTString() : ""}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read More...
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
