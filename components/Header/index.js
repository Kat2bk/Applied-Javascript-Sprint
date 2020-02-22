// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerArray = [
  {
    date: "Smarch 28, 2019",
    title: "Lambda Times",
    temp: "98°"
  }
];

function Header(data) {
  const mainHeader = document.createElement("div");
  const mainDate = document.createElement("span");
  const mainTitle = document.createElement("h1");
  const mainTemp = document.createElement("span");

  // appending

  mainHeader.append(mainDate);
  mainHeader.append(mainTitle);
  mainHeader.append(mainTemp);

  // add classes

  mainHeader.classList.add("header");
  mainDate.classList.add("span");
  mainDate.classList.add("date");
  mainTitle.classList.add("h1");
  mainTemp.classList.add("span");
  mainTemp.classList.add("temp");

  // set data to objects - text content

  mainDate.textContent = data.date;
}

const displayHeader = document.querySelector(".header-container");