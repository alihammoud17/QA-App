import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderComponent = () => {
    return (
        <div className="container">
            <div className="col-5 col-lg-1 col-centered">
                <Loader type="Circles" color="#3f51b5" height={120} width={120}/>
            </div>
        </div>
    )
}

export default LoaderComponent
