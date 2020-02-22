/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const displayCarousel = document.querySelector(".carousel-container");

displayCarousel.append();

var slideshow = {
  image1: "./assets/carousel/mountains.jpeg",
  image2: "./assets/carousel/computer.jpeg",
  image3: "./assets/carousel/trees.jpeg",
  image4: "./assets/carousel/turntable.jpeg"
};

function createCarousel(obj) {
  const mainDiv = document.createElement("div");
  const leftButton = document.createElement("div");
  const images = document.createElement("img");
  const rightButton = document.createElement("div");

  mainDiv.append(leftButton);
  mainDiv.append(images);
  mainDiv.append(rightButton);

  mainDiv.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");

  leftButton.textContent = "<";
  rightButton.textContent = ">";

  return mainDiv;
}
