import React from 'react';
import './HeaderComponent.css';

const HeaderComponent = () => {
    return (<div className='header'>
        <div className='company-logo'>
            <img src={require("../../../assets/icons/logo.svg")}/>
            <span>Indecisive</span>
        </div>
    </div>)
}

export default HeaderComponent;