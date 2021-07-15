import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import EditArea from './components/EditArea/EditArea'
import PreviewArea from './components/PreviewArea/PreviewArea'
import './style/style.scss'

class App extends Component {
    constructor() {
        super()

        this.handleGeneralChange = this.handleGeneralChange.bind(this)
        this.handleExperienceChange = this.handleExperienceChange.bind(this)
        this.handleNewExperience = this.handleNewExperience.bind(this)
        this.handleDeleteExperience = this.handleDeleteExperience.bind(this)
        this.handleNewEducation = this.handleNewEducation.bind(this)
        this.handleDeleteEducation = this.handleDeleteEducation.bind(this)
        this.handleEducationChange = this.handleEducationChange.bind(this)

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
            experience: [],
            education: []
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

    handleExperienceChange(e){
        const experienceKey = e.target.dataset.arraykey
        let experienceStateArray = this.state.experience
        let toChange = e.target.name
        experienceStateArray[experienceKey][toChange] = e.target.value
        this.setState({
            experience: experienceStateArray
        })
    }

    handleNewExperience(){
        const blankExperience = {
            role: '',
            company: '',
            city: '',
            startDate: '',
            endDate: '',
            summary: ''
        }
        const joined = this.state.experience.concat(blankExperience);
        this.setState({ experience: joined })
    }

    handleDeleteExperience(e){
        let array = [...this.state.experience];
        let index = e.target.dataset.arraykey;
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({experience: array});
        }
    }

    handleNewEducation(){
        const blankEducation = {
            qualification: '',
            school: '',
            startDate: '',
            endDate: '',
            summary: ''
        }
        const joined = this.state.education.concat(blankEducation);
        this.setState({ education: joined })
    }

    handleDeleteEducation(e){
        let array = [...this.state.education];
        let index = e.target.dataset.arraykey;
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({education: array});
        }
    }

    handleEducationChange(e){
        const educationKey = e.target.dataset.arraykey
        let educationStateArray = this.state.education
        let toChange = e.target.name
        educationStateArray[educationKey][toChange] = e.target.value
        this.setState({
            education: educationStateArray
        })
    }

    render() {
        return (
            <div id='root-wrap'>
              <Navbar />
              <EditArea handleEducationChange={this.handleEducationChange} handleDeleteEducation={this.handleDeleteEducation} newEducation={this.handleNewEducation} deleteExperience={this.handleDeleteExperience} newExperienceEvent={this.handleNewExperience} stateEvent={this.handleGeneralChange} experienceEvent={this.handleExperienceChange} details={this.state.generalDetails} experience={this.state.experience} education={this.state.education} />
              <PreviewArea education={this.state.education} experience={this.state.experience} details={this.state.generalDetails}/>
            </div>
        )
    }
}

export default App