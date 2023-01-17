import React, { Component } from 'react'
export default class NewsItem extends Component {
  render() {
    const {title, description, Imageurl, newsUrl, author, publish, source} = this.props;
    return (
      <div>
      <div className="card">
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger my-2" style={{zIndex : "1", left : '90%'}}>
    {source}
  </span>
  <img src={Imageurl} className="card-img-top" alt="..." style={{height : "200px"}}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <div className="card-footer text-danger">
    By {!author?"unknow" : author} on {!publish? "not mentioned" : publish.slice(0, 10)}
  </div>
    <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-danger btn-sm">ReadMore</a>
  </div>
</div>
      </div>
    )
  }
}
