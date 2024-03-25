
let Days = document.getElementsByClassName('day')[0]
let Hours = document.getElementsByClassName('hours')[0]
let Mitutes = document.getElementsByClassName('minutes')[0]
let Seconds = document.getElementsByClassName('seconds')[0]


setInterval(()=>{
let date = new Date()
Days.innerHTML = date.getDay() + "\nD"
let hours = date.getHours()
Hours.innerHTML = hours + "\nH";
let minutes = date.getMinutes()
Mitutes.innerHTML = minutes + "\nM"
let seconds = date.getSeconds()
Seconds.innerHTML = seconds +"\nS"
})
