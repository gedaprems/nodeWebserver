// Lesson 1: Hello Express! 

const express = require('express')

const app = express()

// app.com
// app.com/help
// app.com/about

app.get('', (req,res)=>{
    res.send('Hello express!')
})

app.get('/about', (req,res)=>{
    res.send('About Page!')
})

app.get('/help', (req,res)=>{
    res.send('Help Page!')
})

app.get('/weather', (req,res) =>{
    res.send({
        'name' : 'Premsagar',
        'age' : 25
    })
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000!')
})