
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleMakeChoice = this.handleMakeChoice.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(option) {
        this.setState(prevState => ({
            options: prevState.options.filter(opt => opt !== option)
        }))

    }
    handleMakeChoice() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        console.log(this.state.options[randomNum]);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Invalid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }
        this.setState(prevState => ({
                options: [...prevState.options, option]
        }))
    }
    render() {
        return (
            <div>
                <Header title="My title"/>
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
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>This is the header</p>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handleMakeChoice}>What should I do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ol>
                {props.options.map(option => {
                    return (
                        <Option
                            handleDeleteOption={props.handleDeleteOption}
                            key={option} 
                            option={option}   
                        />
                    )
                })}
            </ol>
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            <li>{props.option} 
                <button onClick={(e) => props.handleDeleteOption(props.option)}>X</button>
            </li>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props) 
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text"/>
                    <button>Add Option</button>    
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))






/*
class App extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            show: false
        }
    }

    handleToggle() {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility</h1>
                <button onClick={this.handleToggle}>{this.state.show ? 'Show Details' : 'Hide Details'}</button>
                {this.state.show && <p>These are the details...</p>}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
*/







/*

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleSubtractOne = this.handleSubtractOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            }
        });
    }

    handleSubtractOne() {
        this.setState((prevState => {
            return {
                count: prevState.count - 1
            }
        }))
    }

    handleReset() {
        this.setState(() => {
            return {
                count: this.props.count
            }
        })
    }
    render () {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubtractOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}
Counter.defaultProps = {
    count: 0
}


ReactDOM.render(<Counter />, document.getElementById('app'))
*/





/*
const app = {
    title: 'Indecision',
    subtitle: 'Some app content...',
    options: []
}

let decision = ''

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
    render()
}

const removeAll = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    decision = app.options[randomNum];
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options[0] ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                { app.options.map(option => <li key={option}>{option}</li>) }            
            </ol>
            <button disabled={!app.options[0]} onClick={onMakeDecision}>What to do?</button>
            <button onClick={removeAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            {decision && <p>{decision}</p>}
        </div>
    )
    
    const appRoot = document.getElementById('app')
    ReactDOM.render(template, appRoot)        
}

render()
*/


/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDesc() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age)
        this.home = home;
    }
    getDesc() {
        return super.getDesc() + ` I'm visiting from ${this.home}`
    }
}

const me = new Person('Bryce', 27)
console.log(me.getDesc());

const b = new Student('Bryce', 28, 'Math')
console.log(b.getDesc());

const t = new Traveler('Fran', 26, 'Grand Rapids')
console.log(t.getDesc());

*/