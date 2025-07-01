import React from 'react';

function Navbar() {
    return ( 
        <nav className="navbar navbar-expand-lg border-bottom sticky-top" style={{backgroundColor:"#FFF"}}>
          <div className="container-fluid">
            <div className='ms-lg-5'>
                <a className="navbar-brand ms-lg-5" href="/">
                <img src="media/images/mylogo.jpg" alt="HStox Logo" width="150" height="40" className="d-inline-block align-text-top" />
            </a>
            </div>
            <div className='me-lg-5'>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item me-4">
                      <a className="nav-link active" aria-current="page" href="/signup">Signup</a>
                    </li>
                    <li className="nav-item me-4">
                      <a className="nav-link active" href="/about">About</a>
                    </li>
                    <li className="nav-item me-4">
                      <a className="nav-link active" href="/products">Products</a>
                    </li>
                    <li className="nav-item me-4">
                      <a className="nav-link active" href="/pricing">Pricing</a>
                    </li>
                    <li className="nav-item me-5">
                      <a className="nav-link active" href="/support">Support</a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </nav>
     );
}

export default Navbar;