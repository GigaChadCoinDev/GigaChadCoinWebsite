import React from 'react';

const Buy = () => {
    return (
        <div className="buycontainer">


            {/* Middle Container */}
            <div className="buymidcontainer">
            <div className="buymidcontainerUpper">


            {/* Title, Desc, Socials - Left Box */}
            <div className="buydescTitleSocialsDescBox">
             <div className="gigaChadBuyPageTitle">
             $GIGACHAD
            </div>
           
            <div className="buyPageDesc">
                a legendary coin, for a legendary meme. GigaChad Coin will go down in memecoin history among the best. calling all GigaChads to unite.
            </div>


            <div className="socialLinksContainer">
            <a href="https://twitter.com/GigaChadCoin_"><img src={'../imgs/twitterlogo.png'} className="socialLogos" /></a>
            <a href="https://t.me/+zTF0SqE3qBU4MThh"><img src={'../imgs/telegram-seeklogo.com.svg'} className="socialLogos" /></a>
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xd79ca7cef7e71beac420d1a8e28f972092076515"><img src={'../imgs/dextools-seeklogo.com.svg'} className="socialLogos" /></a>
            <a href="https://etherscan.io/token/0xbd7e249f4c292a13b199d0303cad0654b7cb6968"><img src={'../imgs/etherscan-logo-circle.svg'} className="socialLogos" /></a>
            <a href="https://coinmarketcap.com/currencies/gigachad-coin/"><img src={'../imgs/cmmLogo.png'} className="socialLogosCMM" /></a>
            <a href="https://app.uniswap.org/#/swap?outputCurrency=0xBd7E249F4C292a13b199d0303cAd0654B7CB6968"><img src={'../imgs/uniswap.png'} className="socialLogos" /></a>
            </div>
            
            </div>



            {/* Logo on the right */}
            <div className="buylogocontainer">
                <div className="buyContainerInner">
            <img src={'../imgs/gigachadPNG1_Cartoon.png'} className="buy-logo" alt="logo" />
            </div>
            </div>

            {/*End Upper Mid */}
            </div>



            {/* Start Lower Mid */}
            <div className="buyBoxUnderneath">
                <div className="uniButtonContainer">
                <a className="uniswapBuyButton" href="https://app.uniswap.org/#/swap?outputCurrency=0xBd7E249F4C292a13b199d0303cAd0654B7CB6968">uniswap<img src={'../imgs/uniswap.png'} className="buttonLogos" /></a>
                </div>
            </div>

            </div>
        </div>
    );
};

export default Buy;