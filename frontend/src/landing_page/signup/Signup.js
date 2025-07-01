import React from 'react';

function Signup() {
    return ( 
        <div className='container'>
            <div className='text-center p-5 m-5' style={{fontFamily: "Inter, sans-serif" }}>
                <h2>Open a free demat & trading account online</h2>
                <p>Start investing brokerage free and join a community of 1.5+ crore investors and traders</p>
            </div>
            <div className='row ps-5 '>
                <div className='col ps-5 ms-5'>
                    <img src='media/images/signup.png'></img>
                </div>
                <div className='col pe-5 m-5' style={{fontFamily: "Inter, sans-serif"}}>
                    <h3>Signup Now</h3>
                    <p>Or track your existing application</p>
                    <br></br>
                    <div class="input-group input-group-lg">
                      <span class="input-group-text" id="inputGroup-sizing-lg">+91</span>
                      <input type="text" class="signup" placeholder='Enter your mobile no.' style={{borderColor: "#c9c3c3"}}/>
                    </div>
                    <br></br>
                    <button type="button" class="btn btn-primary">Get OTP</button>
                    <br/><br/>
                    <p>By proceeding, you agree to the HStox terms & privacy policy</p>
                </div>
            </div>
        </div>
     );
}

export default Signup;