import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {

  pageSize=9;
  apiKey="b086431354fb4ed9bf2b1b5b405ccc1f";


  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }




  render() {

    return (
      <>
      <Router>
      <div>  <Navbar/>  </div>

      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}

      />
{/*
673adaa8a132419cae7539c704222a2d */}
      <Routes>
          <Route path="/" element={<News setProgress ={this.setProgress} key="general" apiKey={this.apiKey} pageSize={this.pageSize} category="general" country="in"/>}/>

          <Route path="/sports" element={<News setProgress ={this.setProgress} key="sports" apiKey={this.apiKey} pageSize={this.pageSize} category="sports" country="in"/>}/>

          <Route path="/business" element={<News setProgress ={this.setProgress} key="business" apiKey={this.apiKey} pageSize={this.pageSize} category="business" country="in"/>}/>

          <Route path="/entertainment" element={<News setProgress ={this.setProgress} key="entertainment" apiKey={this.apiKey} pageSize={this.pageSize} category="entertainment" country="in"/>}/>

          <Route path="/health" element={<News setProgress ={this.setProgress} key="health" apiKey={this.apiKey} pageSize={this.pageSize} category="health" country="in"/>}/>

          <Route path="/science" element={<News setProgress ={this.setProgress} key="science" apiKey={this.apiKey} pageSize={this.pageSize} category="science" country="in"/>}/>

          <Route path="/technology" element={<News setProgress ={this.setProgress} key="technology" apiKey={this.apiKey} pageSize={this.pageSize} category="technology" country="in"/>}/>


        </Routes>

      </Router>
      </>

    )
  }
}
