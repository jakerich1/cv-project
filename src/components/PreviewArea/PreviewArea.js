import React, { Component } from 'react'
import './style.scss'

class PreviewArea extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='preview-area'>
              <div className='details'>
                  <span className='name'>{`${this.props.details.firstName} ${this.props.details.secondName}`}</span>
                  <span className='title'>{this.props.details.currentTitle}</span>
                  <br/>
                  <span className='phone'>{this.props.details.phone}</span>
                  <span className='email'>{this.props.details.email}</span>
                  <span className='linkedin'>{this.props.details.linkedIn}</span>
              </div>
              <div className='main-content'>
                  <h3>Summary</h3>
                  <div>{this.props.details.summary}</div>
                  <br />
                  <h3>Experience</h3>
                  <br />
                  <h3>Education</h3>
              </div>
            </div>
        )
    }
}

export default PreviewArea