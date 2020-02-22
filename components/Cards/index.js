// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const displayCards = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    Object.values(response.data.articles).forEach(function(item) {
      item.forEach(function(key) {
        displayCards.append(createCard(key));
      });
    });
  })
  .catch(error => {
    console.log("Unable to receieve data", error);
  });

function createCard(obj) {
  const mainCard = document.createElement("div");
  const authorTitle = document.createElement("div");
  const authorBox = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorName = document.createElement("span");

  mainCard.append(authorTitle);
  mainCard.append(authorBox);
  authorBox.append(imgContainer);
  authorImg.append(imgContainer);
  authorBox.append(authorName);

  mainCard.classList.add("card");
  authorTitle.classList.add("headline");
  authorBox.classList.add("author");
  imgContainer.classList.add("img-container");
  authorImg.classList.add("img");
  authorName.classList.add("span");

  authorTitle.textContent = obj.headline;
  authorImg.setAttribute("src", obj.authorPhoto);
  authorName.textContent = obj.authorName;

  return mainCard;
}
