import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import EditArea from './components/EditArea/EditArea'
import PreviewArea from './components/PreviewArea/PreviewArea'
import './style/style.scss'

class App extends Component {
    constructor() {
        super()

        this.handleGeneralChange = this.handleGeneralChange.bind(this)

        this.state = {
            generalDetails: {
                firstName: '',
                secondName: '',
                email: '',
                phone: '',
                currentTitle: '',
                summary: '',
                linkedIn: ''
            },
            experience: [
                {
                    role: '',
                    company: '',
                    city: '',
                    startDate: '',
                    endDate: '',
                    summary: ''
                }   
            ]
        }
    }

    handleGeneralChange(e){
        let toChange = e.target.name
        let details = this.state.generalDetails
        details[toChange] = e.target.value
        this.setState({
            generalDetails: details
        })
    }

    render() {
        return (
            <div id='root-wrap'>
              <Navbar />
              <EditArea stateEvent={this.handleGeneralChange} details={this.state.generalDetails} experience={this.state.experience}/>
              <PreviewArea details={this.state.generalDetails}/>
            </div>
        )
    }
}

export default App