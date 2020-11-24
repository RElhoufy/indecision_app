import React from 'react';

//stateless functional component
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link" 
            onClick={(e) => {
                props.handleDeleteOptionSingular(props.optionText);
            }}
        >Remove</button>
    </div>
);


export default Option;
