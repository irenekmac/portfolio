import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() {
        return (  <div className='contact-container'>
        <h1>
                <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                I'm incredibly excited
                <div ClassName='new-line'>
                </div>
                  <span className='amazing-color'>to code for you</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}
                </ul>
        </div>
        </Fade>

            <span className='footer'>Made With ❤ by <a href="https://github.com/irenekmac">Irene Mac</a></span>
        </div>);
    }
}

export default Contact;
