const request = require('request')
const {weatherStackApiToken} = require('../apiToken/apiToken')

const forecast = (longitude, latitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key='+weatherStackApiToken+'&query='+latitude+','+longitude
    request({url, json: true}, (error,response)=>{
        if(error){
            callback("Unable to connect to location service!", undefined)
        }
        else if(response.body.error){
            callback("Unable to find the location!", undefined)
        }else{
            const temp = response.body.current.temperature;
            const feelslike = response.body.current.feelslike
            const weatherCondition = response.body.current.weather_descriptions[0]

            callback(undefined, weatherCondition+". It is currently "+temp+" out. It feelslike "+feelslike+" degree out.")
        }
    })
}

module.exports = forecast