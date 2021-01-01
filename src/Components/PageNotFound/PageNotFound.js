import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h4>This Page Note Found</h4>
            <Link path="/"><button>Home</button></Link>
        </div>
    );
};

export default PageNotFound;