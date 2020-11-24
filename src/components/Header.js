import React from 'react';

const Header = (props) => (     //stateless functional component
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
);  


Header.defaultProps = {     //setting up default props
    title: 'Indecision'
};

export default Header;