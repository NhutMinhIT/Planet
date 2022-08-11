import React from 'react'
import Wave from '../../img/wave.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="f-content">
                <span style={{ fontWeight: 'bold' }}>nhutminh.it19@gmail.com</span>
            </div>
            <img src={Wave} alt=""
                style={{ width: '100%' }}
            />


        </div >
    )
}

export default Footer