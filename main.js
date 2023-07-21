addEventListener("Seek", (event) => {});
onsearch = (event) => {};



const fetchData = () => {

    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=impressionism")
    .then(response => response.json())
    .then(data => getArtworks(data.objectIDs))


    function getArtworks(artData) {
        artData.forEach((objectID) => {
            const img = document.createElement("img")
            const cardContainer = document.getElementById("card-container")
            img.src = objectID.image
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
            .then(response => response.json())
            .then(data => cardContainer.appendChild(img))
            console.log(img)
        })     
   }
   
}

fetchData()



