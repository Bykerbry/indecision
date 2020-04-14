

const app = {
    title: 'Indecision',
    subtitle: 'Some app content...'
}

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        
    </div>
)
const me = {
    name: 'Bryce',
    age: 27,
    location: 'Grand Rapids, MI'
}

const templateTwo = (
    <div>
        <h1>{me.name}</h1>
        <p>Age: {me.age}</p>
        <p>Location: {me.location}</p>
    </div>
)
const appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)