import React, { Component } from 'react'
import Categories from './Components/Categories'
import Nav from './Components/Nav'
import News from './Components/News'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

export default class App extends Component {
  pageSize = 9
  render() {
    return (
      <div>
          <Router>
          <Nav/>
          <Categories/>
          <Routes>
            <Route path='/' element={<News key='general' pageSize = {this.pageSize} country="sa" category="general" />}> </Route>
            <Route exact path='/business' element={<News key='business' pageSize = {this.pageSize} country="sa" category="business" />}> </Route>
            <Route exact path='/entertainment' element={<News key='entertainment' pageSize = {this.pageSize} country="sa" category="entertainment" />}> </Route>
            <Route exact path='/health' element={<News key='health' pageSize = {this.pageSize} country="sa" category="health" />}> </Route>
            <Route exact path='/technology'element={<News key='technology' pageSize = {this.pageSize} country="sa" category="technology" />}> </Route>
            <Route exact path='/sports' element={<News key='sports' pageSize = {this.pageSize} country="sa" category="sports" />}> </Route>
            <Route exact path='/science' element={<News key='science' pageSize = {this.pageSize} country="sa" category="science" />}> </Route>
          </Routes>
          </Router>
      </div>
    )
  }
}

