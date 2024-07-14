let date = new Date()
console.log(date)

const clock = document.getElementById('clock')

const fecha = () => {
    setInterval(
        clock.innerHTML = date, 1000
    )
}

