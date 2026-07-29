import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-8'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-3'>Open a Zerodha account</h1>
                <p>Modern platform and apps, <i class="fa-solid fa-indian-rupee-sign"></i>0 investments, and flat <i class="fa-solid fa-indian-rupee-sign"></i>20 intraday and F&O trades.</p>
                <br></br><br></br>
                <button className='p-3 btn btn-primary fs mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up Now</button>
            </div>
        </div>
     );
}

export default OpenAccount;