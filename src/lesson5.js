// lesson 5 : Dynamic pages with template | hbs added. 

const path = require('path')
const express = require('express')

const app = express()
const publicDirPath = path.join(__dirname, '../public')

app.set('view engine','hbs')

// set up public folder for the node app
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
        name: 'Premsagar Gedam'
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