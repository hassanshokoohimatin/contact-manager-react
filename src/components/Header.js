import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div className="navbar navbar-expand-md navbar-dark bg-danger py-3 mb-3">
            <div className="container">
                <a href="/" className="navbar-brand">{props.branding}</a>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">Home</a>
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
