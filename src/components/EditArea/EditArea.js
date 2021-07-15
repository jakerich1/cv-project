import React, { Component } from 'react'
import General from './GeneralInputs/General'
import Experience from './Experience/Experience'
import Education from './Education/Education'
import './style.scss'

class EditArea extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='edit-area'>
              <General stateEvent={this.props.stateEvent} details={this.props.details} />
              <Experience deleteExperience={this.props.deleteExperience} newExperienceEvent={this.props.newExperienceEvent} experienceEvent={this.props.experienceEvent} experience={this.props.experience} />
              <Education handleEducationChange={this.props.handleEducationChange} handleDeleteEducation={this.props.handleDeleteEducation} handleNewEducation={this.props.newEducation} education={this.props.education} />
            </div>
        )
    }
}

export default EditArea