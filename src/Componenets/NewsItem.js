import React from 'react'

const NewsItem=(props)=> {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">
                        {source} </span>
                </div>
                <img src={!imageUrl ? "https://images.hindustantimes.com/tech/img/2023/03/22/1600x900/Andrei-Andritcu-IMG_2483-CR3_1679366511_lg_1679471993510_1679471998880_1679471998880.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknowm" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;
