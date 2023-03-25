import React, {useState} from 'react'
import Navbar from './Componenets/Navbar'
import News from './Componenets/News'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// e7777bb2a9be4be8a3b258641f81f434
const App= ()=> {
  const pageSize= 10;
   const apikey  = process.env.REACT_APP_NEWS_API
 
  const [progress, setProgress] = useState(0);
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      
      />
          <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />}/>
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />}/>
            <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />}/>
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />}/>
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />}/>
            <Route exact path="/sports" element ={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />}/>
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />}/>
          </Routes>
        </Router>
      </div>
    )
  }
export default App;



