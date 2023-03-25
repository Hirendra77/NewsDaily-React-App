import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
// import Loading from './Loading.js'
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    // const [loading, setLoading] = useState([false])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalresults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30)
        let parseData = await data.json()
        // console.log(parseData)
        props.setProgress(70)
        setArticles(parseData.articles);
        setTotalresults(parseData.totalResults)
        // setLoading(false)

        props.setProgress(100)
    }
    useEffect(() => {
        updateNews();
           document.title = `${capitalizeFirstLetter(props.category)}-NewsDaily`;
          //eslint-disable-next-line
    }, []);



    const handleNextClick = async () => {
        setPage(page + 1)
        updateNews()
    }

    const handlePreviousClick = async () => {
        setPage(page - 1)
        updateNews()
    }
    // const fetchMoreData = async () => {
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}
    //     &apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    //     setPage(page + 1)
       
    //     let data = await fetch(url);
    //     let parseData = await data.json()
    //     // console.log(parseData)
    //     setArticles(articles.concat(parseData.articles))
    //     setTotalresults(parseData.totalResults)
    // };


    return (
        <>
            <h1 className="text-center" style={{ margin: '30px 0px', marginTop:'90px'}}>NewsDaily - Top  {capitalizeFirstLetter(props.category)} Headlines </h1>
            {/* <Loading /> */}
            {/* <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<h4>Loading...</h4>}
            > */}
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                < NewsItem title={element.title ? element.title.slice(0, 40) : ""}
                                    description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            {/* </InfiniteScroll> */}
            <div className="container d-flex justify-content-between ">
                    <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
                    <button type="button" disabled={(page + 1 > Math.ceil(totalResults / props.pageSize))} className="btn btn-dark" onClick={handleNextClick}> Next &rarr;</button>
                    </div>
        </>
    )

}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News