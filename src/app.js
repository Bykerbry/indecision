
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleMakeChoice = this.handleMakeChoice.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
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
        this.setState(prevState => {
            return {
                options: [...prevState.options, option]
            }
        })
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
                    options={this.state.options}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />    
            </div>
        )
    }
}

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>This is the header</p>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handleMakeChoice}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <ol>
                    {this.props.options.map(option => {
                        return <Option key={option} option={option}/>
                    })}
                </ol>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.option}</li>
            </div>
        )
    }
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
        this.setState(() => {
            return { error }
        })
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
            count: 0
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
                count: 0
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