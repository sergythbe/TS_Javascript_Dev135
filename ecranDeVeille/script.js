const horloge = document.getElementById("horloge")

function setHorloge() {
    const time = new Date()
    const hour = String(time.getHours()).padStart(2, "0")
    const minutes = String(time.getMinutes()).padStart(2, "0")
    const secondes = String(time.getSeconds()).padStart(2, "0")
    horloge.textContent = `${hour} : ${minutes} : ${secondes}`
}


setInterval(setHorloge, 1000)