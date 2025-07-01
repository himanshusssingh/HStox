import React from 'react';

function Pricing() {
    return ( 
        <div className='contianer  mt-5 p-3'>
            <div className='row p-5' style={{fontFamily: "Inter, sans-serif"}}>
                <div className='col-4 p-3'>
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>
                      We pioneered the concept of discount broking and price transparency
                      in India. Flat fees and no hidden charges.
                    </p>
                    <a href="" style={{ textDecoration: "none" }}>
                      See Pricing{" "}
                      <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
                <div className='col-2 p-3'></div>
                <div className='col-6 p-5 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h2 className='mb-3'>₹0</h2>
                            <p>free equity delivery and <br/> direct mutual funds.</p>
                        </div>
                        <div className='col p-3 border'>
                            <h2 className='mb-3'>₹0</h2>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;