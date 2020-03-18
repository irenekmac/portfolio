import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() {
        return (
          <div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
              <p>{data.abouttext[0]}</p>
              <p>{data.abouttext[1]}</p>

            <h1><Fade bottom cascade>Tech Stack.</Fade></h1>
              <p>{data.currentTechStack}</p>

            <h1><Fade bottom cascade>Learning.</Fade></h1>
              <p>{data.futureTechStack}</p>

            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}


        </div>  );
    }
}

export default About;