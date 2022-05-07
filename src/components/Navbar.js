import React from 'react'
import PropTypes from 'prop-types'
import { NavLink} from 'react-router-dom';
import './st.css'
export default function NavBar(props) {
  return (
    <div>
    
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand active"to='/'>{props.title}</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className=" nav-link "  id="ni" aria-current="page" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to='/about'>AboutUs</NavLink>
              </li>
            </ul>
          <div className={`form-check form-switch text-${props.btndisc}`}>
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>{props.modetxt}</b></label>
            </div>
          </div>
        </div>
      </nav>
     
    </div>
  )
}
NavBar.prototype = {
  title: PropTypes.string.isRequired,
  abouttxt: PropTypes.string,
}

NavBar.defaultProps = {
  title: "this is title"
}