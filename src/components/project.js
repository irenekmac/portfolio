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
              <div className='box'>
                <div className='imgBox'>
                  <img src={this.props.imageSrc} alt={this.props.title}></img>
                </div>
                <div className='details'>
                  <div className='content'>
                    <h2>Tech Stack</h2>
                    <p>{this.props.techStack}</p>
                    <h3>Live Site</h3>
                    <p>{this.props.url}</p>
                    <h3>Code</h3>
                    <p>{this.props.code}</p>

                  </div>
                </div>
              </div>
        </div>
          <h1>{this.props.title}</h1>
          <span>{this.props.service}</span>
            </Fade>);
    }
}

export default Project;
