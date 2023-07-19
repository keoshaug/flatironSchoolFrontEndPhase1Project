addEventListener("Seek", (event) => {});
onsearch = (event) => {};



const fetchData = () => {

    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=impressionism")
    .then(response => response.json())
    .then(data => getArtworks(data.objectIDs))

    function getArtworks(artData) {
        artData.forEach((objectID) => {
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
            .then(response => response.json())
            .then(data => console.log(data))
        })
        
   }
   
}

fetchData()



