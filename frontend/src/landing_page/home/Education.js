import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 p-3'>
            <div className='row p-5' style={{fontFamily: "Inter, sans-serif"}}>
                <div className='col p-3'>
                    <img src="media/images/education.svg" alt='education img' style={{ width: "70%" }} />
                </div>
                <div className='col p-3'>
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>
                      Varsity, the largest online stock market education book in the world
                      covering everything from the basics to advanced trading.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                      Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <p className="mt-5">
                      TradingQ&A, the most active trading and investment community in
                      India for all your market related queries.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                      TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Education;