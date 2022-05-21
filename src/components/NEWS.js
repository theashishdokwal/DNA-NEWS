import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import ReactDOM from "react-dom/client";

export class NEWS extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general"
  };

  Articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.Articles,
      loading: false,
      page: 1
    };
  }
  async UpdateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea2ec901d7024f5e9b68eae0344fd122&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.otalResults
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.UpdateNews();
  }
  handlePrevclick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.UpdateNews();
  };
  handleNextclick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.UpdateNews();
  };
  render() {
    return (
      <div>
        <div className="container my-3">
          <div
            className="top-title"
            style={{ color: "white", marginTop: "60px" }}
          >
            <h2>NEWS - Top {this.props.category} Headlines</h2>{" "}
          </div>
          <div className="row my-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 100) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 200)
                        : ""
                    }
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    ImageUrl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div
            className="container2 d-flex justify-content-between"
            style={{ margin: "-23px 0px" }}
          >
            <button
              disabled={this.state.page <= 1}
              className="btn btn-secondary"
              onClick={this.handlePrevclick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-secondary"
              onClick={this.handleNextclick}
            >
              {" "}
              Next &rarr;{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NEWS;
