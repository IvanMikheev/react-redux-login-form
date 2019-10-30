import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link ">Новости</Link></li>
          <li><Link to={'/login'} className="nav-link">Войти</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
