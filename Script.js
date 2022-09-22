let Input = document.getElementById('number-el');
const Btn = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length-el')
const volumeEl =document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

Btn.addEventListener('click', function(){
    const Val = Input.value
    lengthEl.innerHTML = `<p>${Val} meters = ${(Val*3.281).toFixed(3)} feets | ${Val} feet = ${(Val/3.281).toFixed(3)} Meters</p>` 
    volumeEl.innerHTML = `<p>${Val} liters = ${(Val*0.264).toFixed(3)} gallons | ${Val} gallon = ${(Val/0.264).toFixed(3)} liters</p>`
    massEl.innerHTML = `<p>${Val} kilos = ${(Val*2.204).toFixed(3)} pounds | ${Val} pound = ${(Val/2.204).toFixed(3)} kilos</p>`
})