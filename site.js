document.addEventListener('DOMContentLoaded', () =>{
localStorage.setItem("It's a secret to everybody.", "peepee poopoo")
})

const welcomeMessage = document.getElementById('welcomeMessage')
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

document.addEventListener('DOMContentLoaded', () =>{
    if(isMorning == true)
    {
        welcomeMessage.textContent = 'Good Morning, Welcome to my site!'
    }else if(isAfternoon == true)
    {
        welcomeMessage.textContent = 'Good Afternoon, Welcome to my site!'
    }else if(isEvening == true)
    {
        welcomeMessage.textContent = 'Good Evening weary traveler, Welcome to my site!'
    }
})




