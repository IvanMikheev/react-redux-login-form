import React, { Component } from 'react'
import Article from './Article/Article';
import { Spinner } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7565ce7c71ae483ebdf6368b0a341d3e';
    fetch(url)
      .then(res => res.json())
      .then(item => this.setState({ isLoading: false, articles: item.articles }));
  }

  render() {
    const { articles, isLoading } = this.state;
    const { isAuthorized } = this.props;

    if (!isAuthorized) {
      return <Redirect to='/login' />;
    }

    if (isLoading) {
      return <Spinner style={{ marginTop: 100 }} color="dark" />;
    }

    return (
      <div>
        {articles.map((article, index) =>
          (index < 5) && <Article key={index}
            title={article.title}
            description={article.description}
            url={article.url}
            author={article.author}
            urlToImage={article.urlToImage}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    isAuthorized: Boolean(state.username)
  }
);

export default connect(mapStateToProps)(News)
