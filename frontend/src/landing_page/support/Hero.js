import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-3" id="supportWrapper">
                <h3>Support Portal</h3>
                <a href="" >Track Tickets</a>
            </div>
            <div className="row p-5">
                <div className="col-6 p-5" id="support">
                    <h1 className="fs-3">Search for an answer or browser help topics to create a ticket</h1><br/>
                    <input placeholder="Eg. how to do i activate F&O"/><br/>
                    <a href="">Track account opening</a>/
                    <a href="">Track segment activation</a>/
                    <a href="">Intraday margins</a>/
                    <a href="">kite user manual</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-3">Featured</h1>
                    <br/>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <br/> 
                        <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                    
                    
                </div>
            </div>
        </section>
    );
}   

export default Hero;