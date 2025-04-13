import React from "react";
import './Loader.css';
import Particles from "react-tsparticles";


const Loader = ({loaderText }) => {

    
  
    return (
        // <div className="loader">Loading...</div>
        <div id="loader-overlay" className='loader-overlay'>
            <div class='loader-container'>
                <div className="loader">
                    {loaderText}</div>
            </div>
        </div>
    );
  };
  
  export default Loader;