import React from 'react';

const About = () => {
    return (
        <div className='aboutPageContainer'>
            
            <div className="aboutTitleContainer">
            <div className="aboutTitle">  </div>
            <div className="aboutTitle"> about </div>
            </div>
            
            <div className="aboutMidContainer">
            <div className="aboutLogo"> <img src={'../imgs/gigachadPNG1_Cartoon.png'} className="buy-logo" alt="logo" /> </div>
            <div className="aboutDesc">GigaChad aims to bring humor and entertainment to the world of cryptocurrency. It is not intended as a serious investment, but rather as a fun way for investors and fans of internet memes to get involved in the cryptocurrency space.
                                <br></br> <br></br>    What makes GigaChad Coin unique is its inspiration from the popular "Giga Chad" meme, which has a strong following on the internet. With a total supply of 101,720,170,000 tokens, GigaChad Coin provides a lighthearted way for investors to participate in the cryptocurrency market.
            </div>
            </div>
            
        </div>
    );
};

export default About;