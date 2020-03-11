import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Project extends Component {
    state = {  }
    render() {
        return (
        <Fade bottom>
        <div className='project'>
        <a href={this.props.url}>
          <div className='container'>
            <div className='box'>
                <img src={this.props.imageSrc} alt={this.props.title}></img>
              </div>
              <div className='details'>
                <h2><span>{this.props.techStack}</span></h2>
                <p>yih</p>
              </div>
                </a>
                <h1>{this.props.title}</h1>
                <span>{this.props.service}</span>
                <div>
                  <span>{this.props.techStack}</span>
              </div>
          </div>
        </div>
            </Fade>);
    }
}

export default Project;
