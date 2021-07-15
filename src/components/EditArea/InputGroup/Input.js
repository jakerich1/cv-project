import React, { Component } from 'react'
import './style.scss'

class InputGroup extends Component {
    constructor(props) {
        super(props)
        this.textArea = this.textArea.bind(this)
    }

    textArea(isTextArea){
        if (isTextArea) {
            return <textarea data-arraykey={this.props.arrayKey} onChange={this.props.stateEvent} value={this.props.value} name={this.props.name} type={this.props.type} placeholder={`Enter ${this.props.title} here`}></textarea>
        }
        return <input data-arraykey={this.props.arrayKey} onChange={this.props.stateEvent} value={this.props.value} name={this.props.name} type={this.props.type} placeholder={`Enter ${this.props.title} here`}></input>
    }

    render() {
        return (
            <div className='input-group'>
              <div className='title'>{this.props.title}</div>
              {this.textArea(this.props.isText)}
            </div>
        )
    }
}

export default InputGroup