addEventListener("click", (event) => {})
let x = "string"

const fetchData = () => {

    fetch("https://openaccess-api.clevelandart.org/api/artworks/")
    .then(response => response.json())
    .then(data => renderImages(data.data))
}

console.log(x)