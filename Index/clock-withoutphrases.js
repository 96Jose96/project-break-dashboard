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
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
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
