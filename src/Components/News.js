import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
  const [article, setArticle]=useState([])
  const [page, setPage]=useState(1)
  const [loading, setLoading]=useState(true)
  const [totalResults, settotalResults]=useState(0)

  const capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  document.title = `TaazaKhabar-${this.capitalizeFirstLetter(  props.category)}`;
  
  const updateNews= async()=> {
      props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${  props.country}&category=${  props.category}&apikey=${  props.apikey}&page=${page}&pagesize=${  props.pageSize}`
      props.setProgress(30);
    setLoading(true)
    const response = await fetch(url);
    const data = await response.json();
      props.setProgress(50);
    console.log(data);
    setArticle(data.articles)
    settotalResults(data.totalResults)
    setLoading(false)
      props.setProgress(100);
  }

  useEffect(()=>{
    //eslint-disable-next-line
    updateNews();
    //document.title = `TaazaKhabar-${capitalizeFirstLetter(props.category)}`;
  }, [])
  /*handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 })
      this.updateNews()
  }
  handleNextClick = async () => {
    if (Math.ceil(this.state.totalResults /   props.pageSize) >= (this.state.page + 1)) {
      this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }
  }
*/

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${  props.country}&category=${  props.category}&apikey=${  props.apikey}&page=${page + 1}&pagesize=${  props.pageSize}`
    const response = await fetch(url);
    const data = await response.json();
    setArticle(article.concat(data.articles))
    settotalResults(data.totalResults)
    setPage(page+1)
  };
    return (
      <>
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Taazakhabar - {`${  props.category==='general'?'First to Deliver News':capitalizeFirstLetter(  props.category)}`}</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {article.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 50) : " "} description={element.description ? element.description.slice(0, 130) : " "} author={element.author ? element.author : "Unknown"} datetime={element.publishedAt} source={element.source.name} imageUrl={element.urlToImage ? element.urlToImage : "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20230319092957.jpg"} newsUrl={element.url} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
}
News.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 15,
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
}
export default News
