import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

const Navigation = ({ isAdmin, isLoggedIn }) => {
  return (
    <nav className="navbar navbar-fixed-top navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/"><img src="/images/AutoAttenLogo.png" alt="Automated Attendance Logo"/></Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            {isLoggedIn && !isAdmin && <li><Link to="/Student"><span className="glyphicon glyphicon-th-list" aria-hidden/> Attendance</Link></li>}
            {isLoggedIn && isAdmin && <li><Link to="/Admin"><span className="glyphicon glyphicon-th-list" aria-hidden/> Attendance</Link></li>}
            {isLoggedIn && isAdmin && <li><Link to="/Camera"><span className="glyphicon glyphicon-camera" aria-hidden/> Camera</Link></li>}
            {isLoggedIn && isAdmin && <li><Link to="/Enrollment"><span className="glyphicon glyphicon-list-alt" aria-hidden/> Enrollment</Link></li>}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/About"><span className=" glyphicon glyphicon-globe" aria-hidden/> About</Link></li>
            <li><Link to="/Contact"><span className="glyphicon glyphicon-earphone" aria-hidden/> Contact</Link></li>
            {!isLoggedIn && <li><a href="/login"><span className="glyphicon glyphicon-user" aria-hidden/> Login</a></li>}
            {isLoggedIn && <li><a href="/logout"><span className="glyphicon glyphicon-user" aria-hidden/> Logout</a></li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};


function mapStateToProps({ userStatus }) {
  return {
    isAdmin: userStatus.isAdmin,
    isLoggedIn: userStatus.isLoggedIn
  };
}

export default connect(mapStateToProps)(Navigation);