import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact__inner">
                <div className="contact__wrapper">
                    <div className="contact__wrapper-list">
                        <div className="contact__wrapper-item">
                            <div className="contact__wrapper-img mail"></div>
                            <div className="contact__wrapper-info">metreveli2014@gmail.com</div>
                        </div>
                        <div className="contact__wrapper-item">
                            <div className="contact__wrapper-img location"></div>
                            <div className="contact__wrapper-info">Rustavi, Georgia</div>
                        </div>
                        <div className="contact__wrapper-item">
                            <div className="contact__wrapper-img github"></div>
                            <div className="contact__wrapper-info">github.com/Metrevelii</div>
                        </div>
                    </div>
                    <div className="contact__wrapper-list">
                        <div className="contact__wrapper-item">
                            <div className="contact__wrapper-img phone"></div>
                            <div className="contact__wrapper-info">+(995) 555 45 26 45</div>
                        </div>
                        <div className="contact__wrapper-item">
                            <div className="contact__wrapper-img linkedin"></div>
                            <div className="contact__wrapper-info">linkedin.com/in/zauri-metreveli-a45703164</div>
                        </div>
                        <div className="contact__wrapper-item">
                            <div className="contact__wrapper-img instagram"></div>
                            <div className="contact__wrapper-info">instagram.com/metrevelii33</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;