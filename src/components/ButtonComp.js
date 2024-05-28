import React from 'react';
import './ButtonComp.css';

const ButtonComp = ({ label, onClick, disabled }) => {
    return (
        <button className="button-comp" onClick={onClick} disabled={disabled}>
           <div id = "hello"> <h6> {label} </h6></div>
        </button>
    );
};

export default ButtonComp;
