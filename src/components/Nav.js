import React from 'react';
import { NavLink } from "react-router-dom";
import './../index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faHouse, faPerson} from '@fortawesome/free-solid-svg-icons'


const Nav =()=>{
    return(
        <nav className="navbar navbar-expand-lg  navbar-dark sticky-top nav_bg bg-white">
            <div className="container">
                <NavLink className="navbar-brand text-dark" to='/'></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end  " id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/' className="nav-link text-secondary iconHouse">
                        <FontAwesomeIcon icon={faHouse} />
                        </NavLink>
                    
                    </li>
                    <li className="nav-item">
                        <NavLink to='characters' className="nav-link text-secondary">
                            <FontAwesomeIcon icon={faPerson}/>
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav