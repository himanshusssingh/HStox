import React from 'react';
const isLogin = localStorage.getItem("isLogin") === "true";

function Hero() {
    return ( 
        <div className="container p-5 mb-5 mt-3" >
            <div className="row text-center" style={{fontFamily: "Inter, sans-serif", color: "#424242"}}>
                <div>
                    <img src='media/images/homeHero.png' alt='homeHero img' style={{width: "70%"}}/>
                </div>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online plateform to invest in stoks, derivatives, mutual funds and more</p>
                {!isLogin && (
                    <button className='btn btn-primary p-2 fs-5' style={{width:"15%", margin:"auto"}}>Sign up for free</button>
                )}
            </div>
        </div>
        

     );
}

export default Hero;