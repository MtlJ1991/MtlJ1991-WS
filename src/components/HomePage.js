import React from 'react';
import Particles from 'react-particles-js';
import pParams from '../particles/particles';


class HomePage extends React.Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        return (
            <div className='homeMain'>

<div class="topnav" id="myTopnav">


            <a href="#home"><i class="fa fa-home" aria-hidden="true"></i></a>
            <a href="#home">Katas</a>  
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
            </div>

<div id="particles-js" className='siteBackground'>
          <Particles params={pParams} />
</div>

                <div className='title'>
                    <a id="home"></a>
                    <h1>Matt Jones</h1>
                    <p>Javascript developer</p>
                </div>

                <div className='aLittleAbout'>
                    <h3>A little about me</h3>
                </div>

                <div className='WhatWeDo'>
                <i class="fa fa-code fa-2x" aria-hidden="true"></i>
                    <p>Fullstack Javascript devloper</p>
                </div>

                <div className='WhoWeAre'>
                <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
                    <p>Enthusiastic problem solver</p>
                </div>

                <div className='AppDetails'>
                <i class="fa fa-paint-brush fa-2x" aria-hidden="true"></i>
                    <p>Ameatur artist and creative thinker</p>
                </div>

                <div className='WhatWeDoTwo'>
                <i class="fa fa-comments-o fa-2x" aria-hidden="true"></i>
                    <p>Confident public speaker</p>
                </div>

                <div className='WhoWeAreTwo'>
                <i class="fa fa-tree fa-2x" aria-hidden="true"></i>
                    <p>Passionate nature photographer</p>
                </div>

                <div className='AppDetailsTwo'>
                <i class="fa fa-child fa-2x" aria-hidden="true"></i>
                    <p>Agile programmer at heart and in practise</p>
                </div>

                <div className='AppDetailsTwoo'>
                <i class="fa fa-child fa-2x" aria-hidden="true"></i>
                    <p>Agile programmer at heart and in practise</p>
                    <a id="about">About</a>
                </div>
   
            </div>

        )
    }
}

export default HomePage;