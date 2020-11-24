import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    
    handleDeleteOptionSingular =  (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option;
                })
            };
        });
    };

    handleDeleteSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            }
        });
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState( () => {
            return {
                selectedOption: option
            }
        });
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid Value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        
        this.setState((prevState) => {
            return {
               options: prevState.options.concat([option])
            };
        });
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState( () => ({ options }));
            }
        } catch (e) {
            //do nothing
        }
    }
    
    componentDidUpdate(prevProps, prevState) {  
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        console.log('componentDidUpdate');    
    }
    
    render() {  
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
                    <div className="widget">    
                        <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options} handleDeleteOptionSingular={this.handleDeleteOptionSingular}/>
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleDeleteSelectedOption={this.handleDeleteSelectedOption} />
            </div>
        );
    }
}

export default IndecisionApp;