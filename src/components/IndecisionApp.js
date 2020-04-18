import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'


class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'Invalid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState(prevState => ({
                options: [...prevState.options, option]
        }))
    };
    handleMakeChoice = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        console.log(this.state.options[randomNum]);
        this.setState(() => ({
            selectedOption: this.state.options[randomNum]
        }))
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    };
    handleDeleteOption = (option) => {
        this.setState(prevState => ({
            options: prevState.options.filter(opt => opt !== option)
        }))
    };
    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    componentDidMount() {
        try {
            const jsonString = localStorage.getItem('options')
            const options = JSON.parse(jsonString)
            if (options) {
                this.setState(() => ({ options }))
            }    
        } catch (e) {
            console.log(e);
        }
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            localStorage.setItem('options', JSON.stringify(this.state.options))
        }
        console.log('it updated!');
    };
    render() {
        return (
            <div>
                <Header title="Indecision"/>
                <div className="container">
                    <Action 
                    handleMakeChoice={this.handleMakeChoice}
                    hasOptions={!!this.state.options[0]}   
                    />
                    <Options 
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        options={this.state.options}
                    />
                    <AddOption 
                        handleAddOption={this.handleAddOption}
                    />
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleCloseModal= {this.handleCloseModal}
                />
            </div>
        )
    };
};

export default IndecisionApp