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

function createHeader(data) {
  const mainHeader = document.createElement("div");
  const headerDate = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const headerTemp = document.createElement("span");

  mainHeader.append(headerDate);
  mainHeader.append(headerTitle);
  mainHeader.append(headerTemp);

  headerDate.classList.add("date");
  mainHeader.classList.add("header");
  headerTemp.classList.add("temp");

  headerDate.textContent = "SMARCH 28, 2019";
  headerTitle.textContent = "Lambda Times";
  headerTemp.textContent = "98°";

  return mainHeader;
}

const displayHeader = document.querySelector(".header-container");

displayHeader.append(createHeader());
