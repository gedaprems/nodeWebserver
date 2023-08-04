console.log("Clientside javascript file is loaded!")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')


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

})

