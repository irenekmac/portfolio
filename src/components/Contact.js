import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { green } from '@material-ui/core/colors';

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
                I'm incredibly excited
                <div ClassName='new-line'>
                </div>
                  <span className='amazing-color'>to code for you</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <div className='socials'>
                  <ul>
                    {data.social.map((link,index)=>(
                      <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}
                  </ul>

                  <ul>
                    <Icon> <GitHubIcon /> </Icon>
                    <Icon> <LinkedInIcon /> </Icon>
                    <Icon> <TwitterIcon /> </Icon>
                  </ul>

                </div>
        </div>
        </Fade>

            <span className='footer'>Made With ❤ by <a href="https://github.com/irenekmac">Irene Mac</a></span>
        </div>);
    }
}

export default Contact;
