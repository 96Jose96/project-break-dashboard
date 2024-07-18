const arrUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const arrLowercase = "abcdefghijklmnopqrstuvwxyz"
const arrNumbers = "0123456789"
const arrSymbols = "!@#$%^&*()-_=+"

const allArr = arrUppercase + arrNumbers + arrLowercase + arrSymbols

const input = document.getElementById('input')
const generateBtn = document.getElementById('generatebtn')
let randomPassword = document.getElementById('randompassword')

const random = (arr) => Math.floor(Math.random(arr) * arr.length);

const base = () => {
    let passwordBase = '';
    passwordBase += arrUppercase[random(arrUppercase)]
    passwordBase += arrLowercase[random(arrLowercase)]
    passwordBase += arrNumbers[random(arrNumbers)]
    passwordBase += arrSymbols[random(arrSymbols)]
    
    return passwordBase
}

const generate = () => {
    let passwordBase = base()
    let password = passwordBase
    let passwordLength = parseInt(input.value)
    if (passwordLength < 12) {
        alert('La contraseña debe contener al menos 12 caracteres')
    }else if (passwordLength > 50) {
        alert('La contraseña debe contener un máximo de 50 caracteres')
    }else {
        for (let i = passwordBase.length; i < passwordLength; i++) {
            password += allArr[random(allArr)]
        }
    }
    randomPassword.innerText = password
}

generateBtn.addEventListener('click', () => generate())
    





