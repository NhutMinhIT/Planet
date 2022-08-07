import React from 'react';
import './Blur.css';

const Blur = () => {
    return (
        <div>
            <div className="blur" style={{ background: 'rgb(230 219 240)' }}></div>
            <div className="blur"
                style={{
                    background: '#c1f5ff',
                    top: '15rem',
                    width: '20rem',
                    height: '11rem',
                    left: '-7rem'
                }}
            >

            </div>
        </div>
    )
}

export default Blur