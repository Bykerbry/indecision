'use strict';

var app = {
    title: 'Indecision',
    subtitle: 'Some app content...'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);
var me = {
    name: 'Bryce',
    age: 27,
    location: 'Grand Rapids, MI'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        me.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        me.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        me.location
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
