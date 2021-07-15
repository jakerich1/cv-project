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
                  {this.props.experience.map((item) => (
                      <div className='experience'>
                          <div className='top'>
                              <div>{item.role} - {item.company}</div>
                              <div>{item.startDate} - {item.endDate}</div>
                          </div>
                          <div>{item.summary}</div>
                      </div>
                  ))}
                  <br />
                  <h3>Education</h3>
                  {this.props.education.map((item) => (
                      <div className='experience'>
                          <div className='top'>
                              <div>{item.qualification} - {item.school}</div>
                              <div>{item.startDate} - {item.endDate}</div>
                          </div>
                          <div>{item.summary}</div>
                      </div>
                  ))}
              </div>
            </div>
        )
    }
}

export default PreviewArea