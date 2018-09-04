import React from 'react'
import PropTypes from 'prop-types'
import { Link, Redirect } from 'react-router-dom'

const NavbarView = (props) => {
  if (props.currentAuth) {
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark'>
          <Link className='navbar-brand' to='/calendar'>MoodJournal</Link>
          <ul className='nav justify-content-center'>
            <li className='nav-item'>
              <Link className='nav-link active' to='/calendar'>Calendar</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/selection'>Mood Selection</Link>
            </li>
            <li className='nav-item'>
              <button className='btn btn-danger' onClick={props.logoff}>Logoff</button>
            </li>
          </ul>
        </nav>
      </div>
    )
  } else {
    return (
      <div>
        <nav className='navbar navbar-dark bg-dark'>
          <Link className='navbar-brand' to='/'>MoodJournal</Link>
        </nav>
        <Redirect to='/' />
      </div>
    )
  }
}

NavbarView.propTypes = {
  currentAuth: PropTypes.bool,
  logoff: PropTypes.func
}

export default NavbarView
