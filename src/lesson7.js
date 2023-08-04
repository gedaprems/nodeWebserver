// lesson 6 : added partial path and also registered partial location to the hbs.registerPartials() 

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
app.listen(3000,()=>{
    console.log('Server is up on port 3000!')
})