import React from 'react'

const Header = (props) => {
    return (
        <div>
            <header>
                <h1>{props.branding}</h1>
            </header>
        </div>
    )
}

export default Header;
