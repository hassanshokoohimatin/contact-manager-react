import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="navbar navbar-expand-md navbar-dark bg-danger py-3 mb-3">
            <div className="container">
                <a href="/" className="navbar-brand">{props.branding}</a>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">Add</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Header.defaultProps = {
    branding: "Contact List Manager"
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;
