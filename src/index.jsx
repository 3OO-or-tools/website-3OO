import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import css from '../css/main.css'

import Profile from './components/Profile'

import FleetSimulator from './components/FleetSimulator'

const Home = () => {
  return (
    <h1>Hello world</h1>
  )
}

const Database = () => {
  return (
    <h1>Database</h1>
  )
}

const App = () => {
  return (
      <Router>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <Link to="/" className="navbar-brand col-md-2 col-lg-1 mr-0 px-3">Home</Link>
          <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="/logout">Sign out</a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <nav id="sidebarMenu" className="col-md-2 col-lg-1 d-md-block bg-light sidebar collapse">
              <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      <span data-feather="home"></span>
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      <span data-feather="file"></span>
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/database">
                      <span data-feather="file"></span>
                      Database
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/fleet-simulator">
                      <span data-feather="file"></span>
                      Fleet simulator
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <main role="main" className="col-md-10 ml-sm-auto col-lg-11 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"> 
            <Switch>
              <Route path="/" exact children={<Home />} />
              <Route path="/profile" children={<Profile />} />
              <Route path="/database" children={<Database />} />
              <Route path="/fleet-simulator" children={<FleetSimulator />} />
            </Switch>
          </div>
        </main>
      </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('main'))
