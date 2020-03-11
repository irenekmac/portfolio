import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() {
        return (
        <Fade bottom>
        <div className='project'>
          <a href={this.props.url}>
          </a>
            <div className='container'>
              <div className='box'>
                <div className='imgBox'>
                  <img src={this.props.imageSrc} alt={this.props.title}></img>
                </div>
                <div className='details'>
                  <h2>nvm</h2>
                  <p>yih</p>
                </div>
              </div>
            </div>
        </div>
          <h1>{this.props.title}</h1>
          <span>{this.props.service}</span>
          <div>
            <span>{this.props.techStack}</span>
          </div>
            </Fade>);
    }
}

export default Project;
