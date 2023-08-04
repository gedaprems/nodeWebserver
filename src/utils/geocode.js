const request = require('request')
const {maxboxApiToken} = require('../apiToken/apiToken')

const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token='+maxboxApiToken+'&limit=1'
    console.log(url)
    request({url, json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location service!',undefined)
        }
        else if(response.body.features.length === 0){
            callback('Unable to find the location, Try another search.',undefined)
        }else{
            callback(undefined,{
                longitude : response.body.features[0].center[0], 
                latitude : response.body.features[0].center[1],
                location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode