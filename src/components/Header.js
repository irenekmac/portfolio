import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {
        return (
          <div>
        <h1 className='heading-background'>INNOVATE</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            <div>{data.headerTagline[0]}</div><div>{data.headerTagline[1]}</div><div>
            {data.headerTagline[2]}</div>
               <div>
                 <button><a href={`https://drive.google.com/file/d/1ZBgNWPmapF8GC9XimWfvRr2ufr_CVmHX/view?usp=sharing`} target="_blank" rel="noopener noreferrer" >Check out my Resumé!</a></button>
               </div>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;
