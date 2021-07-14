import React, { Component } from 'react'
import InputGroup from '../InputGroup/Input'
import './style.scss'

class Experience extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='experience-area'>
              <h2>Experience</h2>
              {this.props.experience.map((item, index) => (
                  <div className='experience-wrap'>
                    <div className='row'>
                        <div className='col'>
                            <InputGroup type='text' value={item.role} title='Role' name='role'/>
                        </div>
                        <div className='col'>
                            <InputGroup type='text' value={item.company} title='Company' name='company'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <InputGroup type='text' value={item.startDate} title='Start Date' name='startDate'/>
                        </div>
                        <div className='col'>
                            <InputGroup type='text' value={item.endDate} title='End Date' name='endDate'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <InputGroup isText={true} type='text' value={item.summary} title='Summary' name='summary'/>
                        </div>
                    </div>
                  </div>
              ))}
            </div>
        )
    }
}

export default Experience