import React, { Component } from 'react'
import './NewsItem.css';
import Card from 'react-bootstrap/Card'
export class NewsItem extends Component {
  render() {
      let {title, description, ImageUrl, newsurl, author, source, date} = this.props;
    return (
      <div>
        <a href={newsurl} target='_blank' rel="noreferrer">
  <Card className="Card bg-dark text-white mb-3">
 <div className="Source"><h5 className='position-absolute top-0 end-0'><span className="badge rounded bg-danger p-1" style={{zIndex:"1"}}>
    {source}</span></h5></div>
   <div className="img"><Card.Img src={ImageUrl} width = {200} height = {300}/></div>
  <Card.ImgOverlay>

   <Card.Title className='tlt p-3'>{title}...</Card.Title>
    <Card.Text className='despo'>
      {description}...
    </Card.Text>
     <div className="time">
    <p className="card-text"><small>By:-{!author?"Unknown": author} on{date}</small></p>
    </div>
       
  </Card.ImgOverlay>
</Card>
        </a>
      </div>
    );
  }
}

export default NewsItem