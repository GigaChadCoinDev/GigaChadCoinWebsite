import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navContainer">

            <div className="navbarLeftSide">
            <Link to="/home" ><img src={'../imgs/gigachadPNG1_Cartoon.png'} className="App-logo" alt="logo" /></Link>
            </div>

            <div className="navLinkContainer">
            <Link className="navLinks" to="/home" ><p>Home</p></Link>
            <Link className="navLinks" to="/mint" ><p>Mint GIGA CHADs NFT</p></Link>
            <Link className="navLinks" to="/about" ><p>About</p></Link>
            <Link className="navLinks" to="/roadmap" ><p>RoadMap</p></Link>
            </div>

            <div className="navBuyButtonContainer">
            <a className="uniswapNavButton" href="https://app.uniswap.org/#/swap?outputCurrency=0xBd7E249F4C292a13b199d0303cAd0654B7CB6968">buy now</a>
            </div>
        </nav>
    );
}

export default Navbar;