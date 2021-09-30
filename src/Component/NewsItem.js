import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source} = this.props
        return (
            <div className="my-4 mx-5">
                
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex :'1',left: '90%'}}>
                       {source} </span>
             <img src={!imageUrl?"https://static.foxnews.com/foxnews.com/content/uploads/2021/09/honor-flight.jpg":imageUrl} className="card-img-top" alt="..."/>
             <div className="card-body">
                    <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl}  target="_blank"  without rel="noreferrer" className="btn btn-sm btn-dark">read more</a>
              </div>
         </div>   
    </div>
        )
    }
}

export default NewsItem
