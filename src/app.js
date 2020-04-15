
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