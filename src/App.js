
import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import axios from 'axios'
import API_KEY from './keys';
import Navcontents from './components/NavContents/Navcontents';
function App() {
  const [category,setCategory] = useState('general')
const[newsResults, setNewsResults] = useState()
const[newsArray, setNewsArray] = useState([])
const[loadmore,setLoadmore] = useState(10)


  const newsApi = async () =>{
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=${category}&pageSize=${loadmore} `)
      console.log(news)
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
    }
    catch(error) {
    console.log(error)}
  }

  useEffect(() => {
    newsApi()
  },[category])

  return (
    <div className="app">
     <Nav setCategory = {setCategory}/>
    <Navcontents newsArray= {newsArray} newsResults={newsResults}  loadmore={loadmore} setLoadmore={setLoadmore} />
    </div>
  );
}

export default App;
