const input = document.getElementById("button");
input.addEventListener("click", function() {
  alert("This was clicked");
});

input.addEventListener("submit", (e) => {
  e.preventDefault()
})

const API = "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=impressionism"
const cardContainer = document.getElementById("card-container")


const fetchData = () => {

    fetch(API)
    .then(response => response.json())
    .then(data => getArtworks(data.objectIDs))


    function getArtworks(artData) {
        artData.forEach((objectID) => {
            const img = document.createElement("img")

              if(img.style.height >= img.style.width) {
                img.style.height = '200px'
              } else {
                img.style.width = '200px'
              }
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
            .then(response => response.json())
            .then(data => (img.src = data.primaryImage))

            cardContainer.appendChild(img)
            console.log(img)
            
        })     
   }
   
}

fetchData()