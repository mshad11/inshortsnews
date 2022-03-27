import React from 'react'
import './Newscard.css'
function Newscard({newsItem}) {

  const fullDate=new Date(newsItem.publishedAt);
  
  var date = fullDate.toString().split(" ")
  console.log(newsItem)
  const hour = parseInt(date[4].substring(0,2))

  const time = hour >12 ? true : false;
  return (
    <div className='newscard'>
      <img
      className='newsImage'
      alt={newsItem.title}
      src={newsItem.urlToImage?newsItem.urlToImage : 'https://source.unsplash.com/random'}
      />
      <div className='newsText'>
          <span className='title'>{newsItem.title} </span>
          <br/>
          <span className='author'>
              <a href={newsItem.url} target ='_blank'>
              <b>short</b> {""}
              </a>
              <span className='muted'>
                  {""}
                  by {newsItem.author? newsItem.author: 'unknown'} / {" "}
                  {
                    time
                     ? `${hour-12}: ${date[4].substring(3,5)}pm `
                   : `${hour-12}: ${date[4].substring(3,5)}am `
                  }
                  {" "}on {date[2]} {date[1]}, {date[0]}
              </span>
          </span>
    </div>
    <div className='lowerNewsText'>
      <div className='description'>
        {newsItem.description}
      </div>
     <span className='readmore'>read more at {" "}
     <a className='source ' href= {newsItem.url} target= '_blank'/>
       <b> {newsItem.source.name} </b> 
     </span>

    </div>
    </div>
  )
}

export default Newscard
