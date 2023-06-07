addEventListener("click", (event) => {})


const fetchData = () => {

    fetch("https://api.artic.edu/api/v1/artworks")
    .then(response => response.json())
    .then(data => renderImages(data.data))
}
