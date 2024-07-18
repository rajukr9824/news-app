import React from 'react'
const NewsItem =(props)=> {
    let {title, description, imageURL, newsURL, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
        <div style={{display: 'flex', justifyConetent:'flex-end', position:'absolute', right:'0'}}>
        <span class="badge rounded-pill bg-danger">
    {source}</span>
    </div>
  <img src={!imageURL?"https://media.gettyimages.com/id/1311148884/vector/abstract-globe-background.jpg?s=2048x2048&w=gi&k=20&c=sPie4Vi4Emn0mo7dYK33Ac3Mh5TnujvRMq0BEoOYjxk=":imageURL} className="card-img-top" alt="..."/>
  <div className="card-body" style={{backgroundColor:'#CACACA'}}>
    <h5 className="card-title">{title}  </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
}

export default NewsItem
