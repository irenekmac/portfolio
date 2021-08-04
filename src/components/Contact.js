import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import SocialFollow from './SocialFollow'

class Contact extends Component {
    state = {  }
    render() {
        return (
          <div className='contact-container'>
        <h1>
                <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Here's to new
                <div ClassName='new-line'>
                </div>
                  <span className='amazing-color'>opportunities!</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <div className='socials'>


                  <ul>
                    <SocialFollow />

                  </ul>

                </div>
        </div>
        </Fade>

            <span className='footer'>Made With ❤ by <a href="https://github.com/irenekmac">Irene Mac</a></span>
        </div>);
    }
}

export default Contact;
