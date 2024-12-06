/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.querySelector('#convertBtn')
const inputEl = document.querySelector('#numInput')


const lengthEl = document.querySelector('#lengthBox')
const lengthResult = document.querySelector('#lengthresult')

const volEl = document.querySelector('#volBox ')
const volResult = document.querySelector('#volresult')

const massEl = document.querySelector('#massBox')
const massResult = document.querySelector('#massresult')

convertEl.addEventListener('click', function() {
    lengthConverter()
    volumeConverter()
    massConverter()
    inputEl.value = null;
})

function lengthConverter() {
    let inputNum = inputEl.value
    let mToF = (inputNum * 3.281).toFixed(3)
    let fToM = (inputNum / 3.281).toFixed(3)
    lengthResult.textContent = `${inputNum} meters = ${mToF} feet | ${inputNum} feet = ${fToM} meters`
}

function volumeConverter() {
    let inputNum = inputEl.value
    let lToG = (inputNum * 0.264).toFixed(3)
    let gToL = (inputNum / 0.264).toFixed(3)
    volResult.textContent = `${inputNum} liters = ${lToG} gallons | ${inputNum} gallons = ${gToL} liters`
}

function massConverter() {
    let inputNum = inputEl.value
    let kToP = (inputNum * 2.204).toFixed(3)
    let pToK = (inputNum / 2.204).toFixed(3)
    massResult.textContent = `${inputNum} kilograms = ${kToP} pounds | ${inputNum} pounds = ${pToK} kilograms`
}