// lesson 3 : serving up the static assest

const path = require('path')
const express = require('express')

const app = express()

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const publicDirPath = path.join(__dirname, '../public')
// set up public folder for the node app

app.use(express.static(publicDirPath))

app.get('/weather', (req,res) =>{
    res.send({
        'forecast' : 'It is snowing',
        'location' : 'Chandrapur'
    })
})
app.listen(3000,()=>{
    console.log('Server is up on port 3000!')
})