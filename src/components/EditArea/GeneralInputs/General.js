import React, { Component } from 'react'
import InputGroup from '../InputGroup/Input'
import './style.scss'

class General extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='general-area'>
              <h2>General Details</h2>
              <form>
                <div className='row'>
                    <div className='col'>
                        <InputGroup stateEvent={this.props.stateEvent} value={this.props.firstName} name='firstName' title='first name' type='text' />
                    </div>
                    <div className='col'>
                        <InputGroup stateEvent={this.props.stateEvent} value={this.props.secondName} name='secondName' title='second name' type='text' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <InputGroup stateEvent={this.props.stateEvent} value={this.props.email} name='email' title='email' type='email' />
                    </div>
                    <div className='col'>
                        <InputGroup stateEvent={this.props.stateEvent} value={this.props.phone} name='phone' title='phone' type='tel' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <InputGroup isText={false} stateEvent={this.props.stateEvent} value={this.props.currentTitle} name='currentTitle' title='current job title' type='text' />
                    </div>
                    <div className='col'></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <InputGroup isText={false} stateEvent={this.props.stateEvent} value={this.props.linkedIn} name='linkedIn' title='LinkedIn URL' type='url' />
                    </div>
                    <div className='col'></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <InputGroup isText={true} stateEvent={this.props.stateEvent} value={this.props.summary} name='summary' title='summary' type='text' />
                    </div>
                </div>
              </form>
            </div>
        )
    }
}

export default General