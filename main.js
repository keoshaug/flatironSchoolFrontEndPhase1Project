const input = document.getElementById("button");
input.addEventListener("click", function() {
  alert("Cultivate curiosity");
});


addEventListener("search", (e) => {
  e.preventDefault()
  alert(`The term searched for was ${input.value}`)
})


 addEventListener("scroll", () => {

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
                img.style.height = '300px'
              } else {
                img.style.width = '300px'
              }
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
            .then(response => response.json())
            .then(data => (img.src = data.primaryImage))

            const card = document.createElement("card")
            card.classList.add("card")

            
            const department = document.createElement("department")
            department.textContent = objectID.department
    
            const title = document.createElement("title")
            title.textContent = objectID.title

            const artistDisplayName = document.createElement("artistDisplayName")
            artistDisplayName.textContent = objectID.artistDisplayName

            const objectDate = document.createElement("objectDate")
            objectDate.textContent = objectID.objectDate

            console.log(objectID)

            card.append(img, department, title, artistDisplayName, objectDate)

            cardContainer.appendChild(img)
            
        })     
   }
   
}

fetchData()



