/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const resetBtn = document.getElementById("reset-btn")

 convertBtn.addEventListener("click", function(){
     let num = inputEl.value
     renderValues(num)
 })
 
 function renderValues(num){
     let meter = (num / 3.281).toFixed(2)
     let feet = (num * 3.281).toFixed(2)
     let liters = (num / 0.264).toFixed(2)
     let gallons = (num * 0.264).toFixed(2)
     let kg = (num / 2.204).toFixed(2)
     let pound = (num * 2.204).toFixed(2)
     
     lengthEl.innerHTML = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
     volumeEl.innerHTML = `${num} liters = ${gallons} gallons | ${num} galoons = ${liters} liters`
     massEl.innerHTML = `${num} kilograms = ${pound} pounds | ${num} pounds = ${kg} kilograms`
 }
 
 
resetBtn.addEventListener("click", function(){
    inputEl.value = ""
    lengthEl.innerHTML = volumeEl.innerHTML = massEl.innerHTML = "Enter a value in the input box"
})