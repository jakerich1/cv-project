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
                  <div key={index} className='experience-wrap'>
                    <div className='delete-exp'>
                        <svg data-arraykey={index} onClick={this.props.deleteExperience} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="4" y1="7" x2="20" y2="7" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>   
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <InputGroup arrayKey={index} stateEvent={this.props.experienceEvent} type='text' value={item.role} title='Role' name='role'/>
                        </div>
                        <div className='col'>
                            <InputGroup arrayKey={index} stateEvent={this.props.experienceEvent} type='text' value={item.company} title='Company' name='company'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <InputGroup arrayKey={index} stateEvent={this.props.experienceEvent} type='text' value={item.startDate} title='Start Date' name='startDate'/>
                        </div>
                        <div className='col'>
                            <InputGroup arrayKey={index} stateEvent={this.props.experienceEvent} type='text' value={item.endDate} title='End Date' name='endDate'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <InputGroup arrayKey={index} stateEvent={this.props.experienceEvent} isText={true} type='text' value={item.summary} title='Summary' name='summary'/>
                        </div>
                    </div>
                  </div>
              ))}
              <button onClick={this.props.newExperienceEvent}>Add Experience</button>
            </div>
        )
    }
}

export default Experience