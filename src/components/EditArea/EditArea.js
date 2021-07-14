import React, { Component } from 'react'
import General from './GeneralInputs/General'
import Experience from './Experience/Experience'
import './style.scss'

class EditArea extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='edit-area'>
              <General stateEvent={this.props.stateEvent} details={this.props.details}/>
              <Experience experience={this.props.experience}/>
            </div>
        )
    }
}

export default EditArea