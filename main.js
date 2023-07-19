addEventListener("click", (event) => {})
let x = "string"

const fetchData = () => {

    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=impressionism")
    .then(response => response.json())
    .then(data => console.log(data.objectIDs))
}

fetchData()


