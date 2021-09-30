import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: '6',
        category: 'general',

    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.string,
        category : PropTypes.string,
        
        
    }
    capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    constructor(props) {
        super(props);
        this.state= {
            articles: [],
            page: 1,
            loading: false
        }
        // document.title = this.props.category
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - TodayNews`;
      
    }
    async Update() {
        
       const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9521fc12f7ea4a288d9dd4bcf1b90222&page=${this.state.page} &pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
       
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        
        
    }

    async componentDidMount(){
      
        const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9521fc12f7ea4a288d9dd4bcf1b90222&page=1 &pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
       
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
     
    }
    
    handlePrevClick = async () => {
        // console.log("previuse")
        // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9521fc12f7ea4a288d9dd4bcf1b90222&page=${this.state.page -1}&pageSize=${this.props.pageSize}`
        // this.setState({loading: true})
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // this.setState({
        //     page: this.state.page -1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({ page: this.state.page - 1 })
        this.Update();
    
    }
    handleNextClick =  async () => {
        // console.log("Next")
        // if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))) {
            
       
        //     let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9521fc12f7ea4a288d9dd4bcf1b90222&page=${this.state.page +1}&pageSize=${this.props.pageSize}`
        //     this.setState({loading: true});
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     this.setState({
        //         page: this.state.page +1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })    
        // }
        this.setState({page: this.state.page +1})
        this.Update();
    }
    render() {
       
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: `35px 0px` }}>TodayNews - {this.capitalizeFirstLetter(this.props.category)} Top heading</h1>
                <hr style={{ width: "100%" }} />
                {this.state.loading && <Spinner/>}            
                
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>

                            <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 60) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
           
                   </div>
                })}
                      
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; previous</button>
                    <button disabled={ this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next  &rarr;</button>
                </div>
               
            </div>
        )
    }
}

export default News
