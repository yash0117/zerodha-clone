import React from 'react';

function RightSection({imageURL, productName, productDesription, tryDemo, learnMore,}) {
    return (
        <div className="container mt-5">
            <div className="row">
                
                <div className="col-6 p-5 mt-5">
                    <h1 className='mt-5'>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={learnMore}>Learn More</a>
                    </div>
                    
                    <div className="mt-4">
                        <a href={"https://play.google.com/store/apps/details?id=com.example.app"}>
                        <img src="media/googlePlay.svg" alt="Google Play Store" /></a>
                        <a href={"https://apps.apple.com/app/id123456789"}><img 
                            src="media/appStoreBadge.svg"
                            style={{ marginLeft: "50px"}}
                            alt="Apple App Store" />
                        </a>
                    </div>
                </div>
                <div className="col-6 p-5">
                    <a href={learnMore}>
                        <img src={imageURL} alt={productName} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RightSection;