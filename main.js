

const displayData = document.querySelector("#display-data")
// const searchbar = document.getElementById("searchbar")


// addEventListener("submit", (e) => {
//   e.preventDefault()
// })



addEventListener("scroll", (e) => { 
    
 })


const backToTopButton = document.querySelector(".back-to-top")
backToTopButton.addEventListener("click", function() {
  backToTopButton.style.backgroundColor="red"
}, true)

backToTopButton.addEventListener("dblclick", (e) => { 
  alert("I was double clicked");
    
})


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
  


  function getArtworks(artData) {
      artData.forEach((objectID) => {
        fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
        )
          .then((response) => response.json())
          .then((data) => {
            const img = document.createElement("img");
            const card = document.createElement("div");
            card.classList.add("card");
            img.src = data.primaryImage;
  
            img.style.height = "300px";
  
            img.style.width = "300px";
  
            card.append(img)
            const container = document.getElementById("card-container")
            container.append(card)

            const title = document.createElement("h1")
            title.textContent = data.title
 
            const artist = document.createElement("h3")
            artist.textContent = data.artistAlphaSort            

            img.addEventListener("mouseover", (e) => { 
            card.append(title, artist)
            },) 

            img.addEventListener("mouseout", (e) => { 
              card.removeChild(title)
              card.removeChild(artist)
              },) 
            


      })})     
 }
 
}

fetchData()