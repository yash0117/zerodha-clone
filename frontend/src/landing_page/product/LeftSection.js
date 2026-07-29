import React from 'react';

function LeftSection({imageURL, productName, productDesription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <a href={learnMore}>
                        <img src={imageURL} alt={productName} />
                    </a>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1 className='mt-5'>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={tryDemo}>Try Demo</a>
                        <a href={learnMore} style={{ marginLeft: "50px"}}>Learn More</a>
                    </div>
                    
                    <div className="mt-4">
                        <a href={googlePlay}>
                        <img src="media/googlePlay.svg" alt="Google Play Store" /></a>
                        <a href={appStore}><img 
                            src="media/appStoreBadge.svg"
                            style={{ marginLeft: "50px"}}
                            alt="Apple App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;