import { Container } from '@material-ui/core'
import React from 'react'
import Newscard from '../NewsCard/Newscard'
import './Navcontents.css'
function Navcontents({newsArray, newsResults, loadmore,setLoadmore}) {
  return (
    <div>
     <Container maxWidth = 'md'>

       <div className='contents'>
     {newsArray.map((newsItem) => (
         <Newscard newsItem={newsItem} key= {newsItem.name}/>
     ))}
      {loadmore <= newsResults &&  (
        <>
        <hr />
        <button className='loadmore' onClick={() => setLoadmore(loadmore+20)}>LoadMore</button>
        
        
        </>
      ) }
      </div>
     </Container>
    </div>
  )
}

export default Navcontents
