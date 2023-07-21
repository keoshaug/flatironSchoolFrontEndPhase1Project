const input = document.getElementById("button");
input.addEventListener('click', function() {
  alert('I was clicked!');
});
console.log(input)


const cardContainer = document.getElementById("card-container")


const fetchData = () => {

    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=impressionism")
    .then(response => response.json())
    .then(data => getArtworks(data.objectIDs))


    function getArtworks(artData) {
        artData.forEach((objectID) => {
            const img = document.createElement("img")
            img.src = objectID.primaryImage
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
            .then(response => response.json())
            

            cardContainer.appendChild(img)
            console.log(img)
        })     
   }
   
}

fetchData()