const hour = () => {
    const clock = document.getElementById('clock')
    let now = new Date()
    let hours = now.getHours()
    if (hours < 10) {
        hours = `0${hours}`
    }
    let minutes = now.getMinutes()
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    let seconds = now.getSeconds()
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    phrase(hours)
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
}

const phrase = (element) => {
    const phrases = document.getElementById('phrases')
    if (element >= 0 && element < 7) {
        phrases.innerHTML = 'Es hora de descansar. Apaga y sigue mañana'
    }else if (element >= 7 && element < 12) {
        phrases.innerHTML = 'Buenos días, desayuna fuerte y a darle al código'
    }else if (element >= 12 && element < 14) {
        phrases.innerHTML = 'Echa un rato más pero no olvides comer'
    }else if (element >= 14 && element < 16) {
        phrases.innerHTML = 'Espero que hayas comido'
    }else if (element >= 16 && element < 18) {
        phrases.innerHTML = 'Buenas tardes, el último empujón'
    }else if (element >= 18 && element < 22) {
        phrases.innerHTML = 'Esto ya son horas extras, ... piensa en parar pronto'
    }else {
        phrases.innerHTML = 'Buenas noches, es hora de pensar en parar y descansar'
    }
}




const date = () => {
    const date = document.getElementById('date')
    let now = new Date()
    const week = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    let day = now.getDay()
    let actualDay = week[day] 
    let dayNumber = now.getDate()
    if (dayNumber < 10) {
    day = `0${day}`
    }
    let month = now.getMonth() + 1
    if (month < 10) {
    month = `0${month}`
    }
    let year = now.getFullYear()

    date.innerHTML = `${actualDay} ${dayNumber}/${month}/${year}`
}

setInterval(hour, 1000)
date()











