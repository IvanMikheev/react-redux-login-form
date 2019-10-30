import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, CardTitle, CardText, CardImg, Button } from 'reactstrap';
import './Article.css'

const Article = props => {
  const {
    urlToImage, title, url, author, description
  } = props;

  return (
    <Card className="article">
      {urlToImage && <CardImg className="article-image" src={urlToImage} alt="article image" />}
      <CardBody>
        <CardTitle className="title text-left"><a href={url}>{title}</a></CardTitle>
        <CardText className="text-left">
          <small className="text-muted ">{author}</small>
        </CardText>
        <CardText className="text-left">{description}</CardText>
        <Button className="btn right"><a href={url}>Learn more...</a></Button>
      </CardBody>
    </Card>
  )
}
 
Article.propTypes = {
  urlToImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string
}

export default Article
