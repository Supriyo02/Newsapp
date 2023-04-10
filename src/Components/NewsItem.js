import React from 'react'

const NewsItem =(props)=>{
    let { title, description, imageUrl, newsUrl, author, datetime, source} =  props;
        return (
            <div className='my-3 mx-3'>
                <div className="card">
                    <span className="badge rounded-pill bg-danger" style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
                        {source}
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(datetime).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-dark">Details here</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
