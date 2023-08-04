// lesson 2 : Serving up html and json

const express = require('express')

const app = express()

// app.com
// app.com/help
// app.com/about

// Goals 
// 1. set up about page to render a title with HTML
// 2. Setup a weather route to send back JSON 
//    - object with forecast and location strings
// 3. Test your work by visiting both in the browser 

app.get('', (req,res)=>{
    res.send('<h1>Hello express!</h1>')
})

app.get('/about', (req,res)=>{
    res.send('<h1>About Page!</h1>')
})

app.get('/help', (req,res)=>{
    res.send('<h1>Help Page!</h1>')
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