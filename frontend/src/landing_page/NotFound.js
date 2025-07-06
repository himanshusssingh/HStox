import React from 'react';

function Notfound() {
    return ( 
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go to Homepage</a>
        </div>
    );
}

export default Notfound;