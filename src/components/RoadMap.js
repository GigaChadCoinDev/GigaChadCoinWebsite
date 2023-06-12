import React from 'react';

const RoadMap = () => {
    return (
        <div className="roadMapContainer">
            
            <div className="roadmapInnerContainer">
                <div className="midUpperContainer">
                <div className="upperMidLeft">
                <img src={'../imgs/charpng.png'} className="roadmapUpperLeftLogo" alt="logo" />
                </div>
                <div className="upperMidMid" >
                <div className="roadmapTitleContainer">
                    <div className="roadmapTitle">roadmap</div>
                </div>
                    <div className="roadmapUnderTitle" >
                        <div className="roadmapUnderTitleBox">
                            <div className="roadmapUpperText">Phase 1: Meme </div>
                            <div className="roadmapUpperText">Phase 2: Train, Eat Clean, and HODL </div>
                            <div className="roadmapUpperText">Phase 3: GIGACHADs Takeover</div>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="upperMidRight" >
                <img src={'../imgs/wojakchadflipped.png'} className="roadmapUpperRightLogo" alt="logo" />
                </div>
                </div>

                <div className="midMidContainer">

                <div className="roadmapMidText">
                    All jokes aside, here is a rough sketch of $GIGACHADs path ahead. We are commited to continuously bringing new tech and exciting features as the crypto world evolves.
                </div>

                </div>

                <div className="midLowerContainer">
                    <div className="roadmapLowerLeft">
                       <div className="roadmapLowerTitle">
                        Phase  1
                       </div>
                       <ul>
                       <li className="roadmapLowerBoxText">Launch</li>
                       <li className="roadmapLowerBoxText">CoinMarketCap Listing</li>
                       <li className="roadmapLowerBoxText">Launch GigaStake Staking Platform</li>
                       <li className="roadmapLowerBoxText">GIGA CHADs NFT Collection</li>
                       <li className="roadmapLowerBoxText">Continuous Upgrades To All Exisiting Features & Infrastructure</li>
                       </ul>
                    </div>
                    <div className="roadmapLowerMid">
                        <div className="roadmapLowerTitle">
                        Phase  2
                        </div>

                        <ul>
                       <li className="roadmapLowerBoxText">Get $GIGACHAD Trending On Twitter Using The Power Of Memes</li>
                       <li className="roadmapLowerBoxText">Find Meaningful Community Partnerships</li>
                       <li className="roadmapLowerBoxText">1,000+ Holders</li>
                       <li className="roadmapLowerBoxText">GIGA CHADs (Female) NFT Collection</li>
                       <li className="roadmapLowerBoxText">Begin Burning Tokens From The Project Treasury</li>
                       </ul>

                       

                    </div>
                    <div className="roadmapLowerRight">
                        <div className="roadmapLowerTitle">
                        Phase  3
                        </div>

                        <ul>
                       <li className="roadmapLowerBoxText">Begin Planning For Next Phase Of GIGACHAD Development - Based On Community Feedback</li>
                       <li className="roadmapLowerBoxText">GIGACHAD Fitness App For Community Members</li>
                       <li className="roadmapLowerBoxText">Community Events</li>
                       <li className="roadmapLowerBoxText">CEX Listing</li>
                       </ul>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default RoadMap;