import React from 'react';
import { icons } from 'react-icons';
import './Aboutus.css';
import * as AiIcons from 'react-icons/ai';
function AboutUs() {
    return (
        <div className='aboutus'>
            <div className='header'>
               <div className="a"> <h1><AiIcons.AiOutlineTeam />   About </h1>
               <div className="b">
               <h1>What we do:</h1>
                   <p>We create experiences that transform people's lives, and make their journey enjouyable</p>
               </div>
               <div className="c">
               <h1>Who are we:</h1>
                    <p>We are a small team of the MIOLA master, and this project is done to combine the spring boot and React utilities together to create a full stak application.</p>
               </div>
               </div>
               </div>
            </div>
    );
}
export default AboutUs;

