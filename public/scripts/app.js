'use strict';

var app = {
    title: 'Indecision',
    subtitle: 'Some app content...',
    options: []
};

var decision = '';

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

var removeAll = function removeAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    decision = app.options[randomNum];
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options[0] ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'button',
            { disabled: !app.options[0], onClick: onMakeDecision },
            'What to do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        ),
        decision && React.createElement(
            'p',
            null,
            decision
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();

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
