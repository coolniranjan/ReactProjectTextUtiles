import React from 'react'
import PropTypes from 'prop-types'
export default function NavBar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.hm}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.abouttxt}</a>
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