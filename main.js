

const displayData = document.querySelector("#display-data")
const searchbar = document.getElementById("searchbar")


addEventListener("submit", (e) => {
  e.preventDefault()
})


addEventListener("scroll", (e) => { 
    
 })


const backToTopButton = document.querySelector(".back-to-top")
backToTopButton.addEventListener("click", function() {
  backToTopButton.style.backgroundColor="red"
}, true)


 const returnToTop = () => {
  document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", returnToTop)




const API = "https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&q=impressionism"
const cardContainer = document.getElementById("card-container")





function fetchData () {
 

fetch(API)
.then(response => response.json())
.then(data => getArtworks(data.objectIDs))

const getArtworks = (dataArray) => {
  dataArray.forEach(objectID => {
    console.log(dataArray)
  })
}
  const img = document.createElement("img")
  const objectID = function getArtwork(artData) {
  artData.forEach((objectID) => {

  fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
            .then(response => response.json())
            .then(data => data(img.src = data.primaryImage))

              if(img.style.height >= img.style.width) {
                img.style.height = '300px'
              } else {
                img.style.width = '300px'
              }
            

            
        })     
   }
}


fetchData()

