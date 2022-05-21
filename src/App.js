// import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import NEWS from "./components/NEWS";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  country = 'in';
  constructor() {
    super();
    setInterval(() => {
      document.title = "DNA";
    }, 2000);
    setInterval(() => {
      document.title = "Daily News Analysis";
    }, 3000);
  }
  state={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      
      <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='#ff0000'
        progress={this.state.progress}
      />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NEWS setProgress={this.setProgress}
                key="general"
                pageSize={this.pageSize}
                country={this.country}
                category="General"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NEWS setProgress={this.setProgress}
                key="business"
                pageSize={this.pageSize}
                country={this.country}
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NEWS setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pageSize}
                country={this.country}
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NEWS setProgress={this.setProgress}
                key="health"
                pageSize={this.pageSize}
                country={this.country}
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NEWS setProgress={this.setProgress}
                key="sports"
                pageSize={this.pageSize}
                country={this.country}
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NEWS setProgress={this.setProgress}
                key="technology"
                pageSize={this.pageSize}
                country={this.country}
                category="Technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
