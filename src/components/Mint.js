import React from 'react';

const Mint = () => {
    return (
        <div className="mintContainer">
            <div className="mintInnerContainer">

            <div className="mintMidLeftContainer">
            <img src={'../imgs/TigFirstGIGACHADForMintPageCenterd_TransparentHair.png'} className="mintPageLogo" alt="logo" />
            </div>
            <div className="mintMidRightContainer">
            <h1 className="howToMintTitle"> How To Mint </h1>
            <div className="mintDesc">GIGA CHADs is a fixed set of 777 ERC721 Tokens, each one backed 1:1 by an original GIGA CHAD.</div>
            <br></br>
            <div className="mintDesc">To mint your GIGA CHAD, please visit our mint site at gigastake.dev/gigaMint</div>
            <br></br>
            <div className="spaceDiv"> 

            </div>


            <div className="mintButtonContainer">
            <a className="mintPageButton" href="https://gigastake.dev/gigamint">Mint<img src={'../imgs/miniChadLogo.png'} className="buttonLogos" /></a>
            </div>
            </div>

            </div>
        </div>
    );
};

export default Mint;