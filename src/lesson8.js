const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

// Define path for Express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req,res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Premsagar Gedam'
    })
})
app.get('/about', (req,res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Premsagar Gedam'
    })
})
app.get('/help', (req,res)=>{
    res.render('help', {
        title: 'Help Page',
        name: 'Premsagar Gedam',
        helpText: 'This is some helpful text.'
    })
})
app.get('/weather', (req,res) =>{
    res.send({
        'forecast' : 'It is snowing',
        'location' : 'Chandrapur'
    })
})

app.get('/help/*', (req,res) =>{
    res.render('404',{
        title: '404',
        errorMessage:"Help article not found!",
        name: "Premsagar Gedam"
    })
})
app.get('/*', (req,res) =>{
    res.render('404',{
        title:"404",
        errorMessage: "Page not found!",
        name: "Premsagar Gedam"
    })
})


// Task: Create a render for 404 page and also setup header and footer for it. 

app.listen(3000,()=>{
    console.log('Server is up on port 3000!')
})