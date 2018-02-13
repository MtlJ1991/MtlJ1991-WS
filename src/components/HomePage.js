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
            <section className='homeMain'>

<section class="topnav" id="myTopnav">


            <a href="#home"><i class="fa fa-home" aria-hidden="true"></i></a>
            <a href="#home">Katas</a>  
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
            </section>

<div id="particles-js" className='siteBackground'>
          <Particles params={pParams} />
</div>

                <section className='title'>
                    <a id="home"></a>
                    <h1>Matt Jones</h1>
                    <p>Javascript developer</p>
                </section>

                <section className='aLittleAbout'>
                    <h5>A little about me</h5>
                </section>

                <section className='WhatWeDo'>
                <i class="fa fa-code fa-2x" aria-hidden="true"></i>
                    <p>Fullstack Javascript devloper, experience with React, NodeJS, Psql, MongoDB, ejs and more!</p>
                </section>

                <section className='WhoWeAre'>
                <i class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></i>
                    <p>Enthusiastic problem solver, part of my training at Northcoders involved solving 45 katas!</p>
                </section>

                <section className='AppDetails'>
                <i class="fa fa-paint-brush fa-2x" aria-hidden="true"></i>
                    <p>Ameatur artist and creative thinker. If I'm not coding I'm painting.</p>
                </section>

                <section className='WhatWeDoTwo'>
                <i class="fa fa-comments-o fa-2x" aria-hidden="true"></i>
                    <p>Confident public speaker, check out my Lightning talk!</p>
                </section>

                <section className='WhoWeAreTwo'>
                <i class="fa fa-tree fa-2x" aria-hidden="true"></i>
                    <p>Nature / Astrophotogrpaher photographer, I hope you enjoy the timelapse.</p>
                </section>

                <section className='AppDetailsTwo'>
                <i class="fa fa-child fa-2x" aria-hidden="true"></i>
                    <p>Agile programmer at heart and in practise. Whether it be scrum or standup. I'm on board.</p>
                </section>

                <section className='AppDetailsTwoo'>
                <i class="fa fa-child fa-2x" aria-hidden="true"></i>
                    <p>Agile programmer at heart and in practise</p>
                    <a id="about">About</a>
                </section>
   
            </section>

        )
    }
}

export default HomePage;