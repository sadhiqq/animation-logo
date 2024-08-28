import React from 'react'
import "./Logo.css";
import {ReactComponent as Logo} from "../../SVG/Logo.svg";

const LogoRotate = () => {

  return (
    <div className='main'>
        <div className='box'>
            <Logo className='logo'/>
        </div>
        <span className='text'>Own Your Future</span>
    </div>
  )
}

export default LogoRotate;
