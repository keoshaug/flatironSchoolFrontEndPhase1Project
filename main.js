addEventListener("click", (event) => {})


const fetchData = () => {

    fetch("https://api.artic.edu/api/v1/artworks")
    .then(response => response.json())
    .then(data => renderImages(data.data))
}


const currentTime = () => {
    const el = document.querySelector("h1")

    let date = new Date()
    let gg = date.getHours()
    let mm = date.getMinutes()
    let ss = date.getSeconds()

    hh =hh < 10 ? `0${hh}` : hh
    mm =mm < 10 ? `0${mm}` : mm
    ss =ss < 10 ? `0${ss}` : ss

    let time = `${hh}:${mm}:${ss}`
    el.innterText = time

}

currentTime()
setInterval(currentTime, 1000)