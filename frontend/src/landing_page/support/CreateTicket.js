import React from 'react';

function CreateTicket() {  
    return ( 
        <div className="container">
            <div className='row p-5 mt-5 mb-5'>
                <h1 className="fs-2"> To create a ticket, select a relevent topic</h1>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <h4 className="fs-3 text-center">
                        <i className="fas fa-plus-circle fa-lg" aria-hidden="true"></i> Account Openings</h4>
                        <a href="">Online Account Opening</a>
                        <a href="">Offline Account Opening</a>
                        <a href="">Company, Partnership and HUF Account</a>
                        <a href="">Openings</a>
                        <a href="">NRI Account Opening</a>
                        <a href="">Charges at Zerodha</a>
                        <a href="">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
                        <a href="">Getting Started</a>
                </div>
            </div>
        </div>
      );
}

export default CreateTicket;