import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {

    let {title,description,imgUrl,newsUrl,author,date}=this.props;
    return (
        <div className="card" >
            <img src={!imgUrl?"https://images.moneycontrol.com/static-mcnews/2022/07/389630071-652x435.jpg":imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl}  className="btn btn-dark">Read More</a>
            <p className="card-text my-2"><small className="text-muted">By {!author?"anonymous":author} on {new Date(date).toGMTString()} </small></p>
            </div>
      </div>
    )
  }
}

export default Newsitem