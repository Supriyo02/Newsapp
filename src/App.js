import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

const App =()=> {
  const pageSize=15;
  const apikey = process.env.REACT_APP_NEWS_API
  const c='NewsApp is here for you';
  const [progress,setProgress]=useState(10)

    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
          <Route exact path="/" element={<News key="general" pageSize={ pageSize} setProgress={ setProgress} apikey={ apikey} country='in' category='general'/>}/>
          <Route exact path="/business" element={<News key="business" pageSize={ pageSize} setProgress={ setProgress} apikey={ apikey} country='in' category='business'/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={ pageSize} setProgress={ setProgress} apikey={ apikey} country='in' category='entertainment'/>}/>
          <Route exact path="/health" element={<News key="health" pageSize={ pageSize} setProgress={ setProgress} apikey={ apikey} country='in' category='health'/>}/>
          <Route exact path="/science" element={<News key="science" pageSize={ pageSize} setProgress={ setProgress} apikey={ apikey} country='in' category='science'/>}/>
          <Route exact path="/sports" element={<News key="sports" pageSize={ pageSize} setProgress={ setProgress} apikey={ apikey} country='in' category='sports'/>}/>
          <Route exact path="/technology" element={<News key="technology" pageSize={ pageSize} setProgress={ setProgress} apikey={ apikey} country='in' category='technology'/>}/>
      </Routes>
      </Router>
      </div>
    )
}
export default App;