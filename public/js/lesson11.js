console.log("Clientside javascript file is loaded!")
// https://puzzle.mead.io/puzzle

// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

// Goal : Fetch weather! 
//
// 1. Setup a call to fetch weather for Boston
// 2. Get the parse JSON response
//    - If error property, print error
//    - If no error property, print the location and forcast
// 3. Refresh the browser and test your work 


// fetch('http://localhost:3000/weather?address=!!').then((response) =>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecastData)
//         }
        
//     })
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

// weatherForm.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const location = search.value
//     // console.log("Testing!")
//     console.log(location)
// })

// const message1 = document.querySelector('#message-1')

// message1.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value

    const url = 'http://localhost:3000/weather?address='+location

    fetch(url).then((response) =>{
        response.json().then((data)=>{
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data.location)
                console.log(data.forecastData)
            }
            
        })
    })
    // console.log(location)
})

// Goal : Use the input value to get the weather 

// 1. Migrate fetch call into the submit callback
// 2. Use the search text as the address query string value
// 3. Submit the form with the valid and invalid value to test