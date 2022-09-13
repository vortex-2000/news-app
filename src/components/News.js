import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export class News extends Component {


    static defaultProps={
        country:'in',
        pageSize:9,
        category: 'general',
    }

    static propTypes={
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    }

    capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1,
            totalResults:0
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)}- News Monkey`
    }

    async updateNews(){
        this.props.setProgress(10);
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        this.setState({page:this.state.page+1});
        let data=await fetch(url);
        this.props.setProgress(30);
        let parsedData= await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        });
        this.props.setProgress(100);
    }

    async componentDidMount(){

        this.updateNews();
    }

    // 673adaa8a132419cae7539c704222a2d
    // b086431354fb4ed9bf2b1b5b405ccc1f

    fetchMoreData = async() => {
        this.setState({page:this.state.page+1});
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data=await fetch(url);
        let parsedData= await data.json();
        console.log(parsedData);
        this.setState({
            articles:this.state.articles.concat(parsedData.articles),
            totalResults:parsedData.totalResults,
            loading:false
        });
      };






  render() {


    return (
        <>
        <h1 className="my-4" style={{display: 'flex',  justifyContent:'center', alignItems:'center' , height: '20vh' }}>News Monkey</h1>


        <div  className='container mb-3 ' >

        <h2 className="my-4">Top Headlines on {this.capitalizeFirstLetter(this.props.category)} </h2>


            <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResults}
            loader={<Spinner/>}
            >


            {/* {this.state.loading && <Spinner/>} */}

            <div  className='container mb-3 ' >

                <div className='row my-4'>

                    { this.state.articles.map((element)=>{
                        return(
                        <div className='col-md-4' key={element.url}>
                            <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                        </div>)
                    })}

                </div>

            </div>
            </InfiniteScroll>

            {/* <div className="d-flex justify-content-around">

                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
                <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}  className="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>
            </div> */}





        </div>
      </>

    )
  }
}

export default News