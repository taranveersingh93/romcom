// Create variables targetting the relevant DOM elements here 👇
var randButton = document.querySelector('.random-cover-button'); 
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSaveButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new-button');
var newBookButton = document.querySelector('.create-new-book-button');

var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');


var savedCovers = [
  createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randButton.addEventListener('click', assignRandom);
window.addEventListener('load', assignRandom);
makeCoverButton.addEventListener('click', enableFormView);
viewSaveButton.addEventListener('click', enableSavedView);
homeButton.addEventListener('click', enableHomeView);
newBookButton.addEventListener('click', makeNewBook);
// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(imgSrc, title, descriptor1, descriptor2) {
  var cover = {
    id: Date.now(),
    coverImg: imgSrc,
    title: title,
    tagline1: descriptor1,
    tagline2: descriptor2
  }
  return cover
}

function displayCurrent() {
  coverTitle.innerText = currentCover.title;
  coverImage.src = currentCover.coverImg;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function assignRandom() {
  var argTitle = [titles[getRandomIndex(titles)]];
  var argCover = [covers[getRandomIndex(covers)]];
  var argDesc1 = [descriptors[getRandomIndex(descriptors)]];
  var argDesc2 =[descriptors[getRandomIndex(descriptors)]];
  currentCover = createCover(argCover, argTitle, argDesc1, argDesc2);
  displayCurrent();

}



function makeNewBook() {
  event.preventDefault();
  var userCover = document.querySelector('#cover').value;
  var userTitle = document.querySelector('#title').value;
  var userDesc1 = document.querySelector('#descriptor1').value;
  var userDesc2 = document.querySelector('#descriptor2').value;
  currentCover = createCover(userCover, userTitle, userDesc1, userDesc2);
  

  covers.push(userCover);
  titles.push(userTitle);
  descriptors.push(userDesc1, userDesc2);
  console.log(covers);
  enableHomeView();
  displayCurrent();
}

function enableFormView() {
  formView.classList.remove("hidden");
  homeView.classList.add("hidden");
  savedView.classList.add("hidden")
  randButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

function enableSavedView() {
  savedView.classList.remove("hidden");
  homeView.classList.add("hidden");
  formView.classList.add("hidden");
  randButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

function enableHomeView() {
  homeView.classList.remove("hidden");
  savedView.classList.add("hidden");
  formView.classList.add("hidden");
  homeButton.classList.add("hidden");
  randButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
}


/* iterator 2
import makeMyBook button as a variable using document.querySelector
assign an eventListener to makeMyBook button to respond when clicked
//  how to store form input using javascript??
create new function
create variables to store user input. 
Then, use the created object values and push them to the respective arrays
invoke createCover function
invoke enableHomeView function


/* iterator 1
import all buttons' DOM elements as variables. 
import all views' DOM elements as variables. 

create enabledSavedView()
it should add "hidden" class to homeView
it should remove "hidden" from savedView
should add hidden to randButton and saveCoverButton
it should remove "hidden" class from homeButton

create enableFormView() function
it should remove "hidden" class from formView
it should add "hidden" class to homeView
it should add "hidden" class to randButton and saveCoverButton
it should remove "hidden" class from homeButton
*/
  
//iterator 0
//Create two event listeners. load and click(on button) - 
//both should invoke the same function
// of displayRandom().

//Using getRandomIndex fetch random index from all three arrays. 
//twice from descriptors. 

//Using the above random indexes, find the elements from respective arrays and 
//use them as variables and manipulate the DOM...




