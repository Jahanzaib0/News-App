import React, { Component } from 'react'
import NewsItem from './NewsItem'
import img from '../images/unknown.png'
import Loader from './Loader';
import PropTypes from 'prop-types'



export default class News extends Component {
  static defaultProps = {
    country : "sa",
    pageSize : 6,
    category : "general"
  }
  static propTypes = {
   country : PropTypes.string,
   pageSize : PropTypes.number,
   category : PropTypes.string
  }
  Capitalized = (string) => {
     return string.charAt(0).toUpperCase() + string.slice(1);
  }
   constructor(props) {
    super(props);
    this.state = {
        articales : [],
        loading : false,
        page : 1
    }
    document.title = "MyNews-App"
   }
   NewsUpdateFunc = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d5653c3018cd4b7eb10d5feda36994e8&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading : true})
    let newsData = await fetch(url);
    let parsedData = await newsData.json();
    this.setState({
        articales : parsedData.articles,
        totalarticales : parsedData.totalResults,
        loading : false
   })
  }
   componentDidMount() {
   this.NewsUpdateFunc();
   }
   handlePreviousPage = () => {
   
    this.setState({page : this.state.page - 1});
    this.NewsUpdateFunc();

   }
   handleNextPage = () => {
    
    this.setState({page : this.state.page + 1});
    this.NewsUpdateFunc();
   }
  render() {
    
    return (
        <>
     <div className="container my-3">
        <h2 className='text-danger text-center'> Top {this.Capitalized(this.props.category)}  HeadLines</h2>
        {this.state.loading && <Loader/>}
       {!this.state.loading&& <div className="row my-3 ">
            {this.state.articales.map((curElm)=>{return(
                <div className="col-md-4 my-1" key={curElm.url}>
                <NewsItem title={curElm.title?curElm.title.slice(0, 35) + "..." : ""} description={curElm.description?curElm.description.slice(0, 88)+ "...": ""} Imageurl={curElm.urlToImage?curElm.urlToImage: img} newsUrl={curElm.url}
                author={curElm.author} publish={curElm.publishedAt} source={curElm.source.name}/>
                </div>
            ) })}
            
      </div>}
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} className='btn btn-danger btn-lg'onClick={this.handlePreviousPage}> &#60; </button>
        <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalarticales / this.props.pageSize))} className='btn btn-danger btn-lg'onClick={this.handleNextPage}> &#62; </button>
      </div>
      </div>
      </>
    )
  }
}
