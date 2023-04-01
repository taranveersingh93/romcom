// Create variables targetting the relevant DOM elements here 👇
var randButton = document.querySelector('.random-cover-button'); 
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSaveButton = document.querySelector('.view-saved-button');
var makeCoverButton = document.querySelector('.make-new-button');
var newBookButton = document.querySelector('.create-new-book-button');

var savedSection = document.querySelector('.saved-covers-section');
var homeView = document.querySelector('.home-view');
var savedView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');

var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');




var savedCovers = [
  //createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randButton.addEventListener('click', assignRandom);
window.addEventListener('load', assignRandom);
makeCoverButton.addEventListener('click', enableFormView);
viewSaveButton.addEventListener('click', enableSavedView);
homeButton.addEventListener('click', enableHomeView);
newBookButton.addEventListener('click', makeNewBook);
saveCoverButton.addEventListener('click', saveCover);



// Create your event handlers and other functions here 👇


// We've provided two functions to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function showThis(eventTarget) {
  eventTarget.classList.remove("hidden");
}

function hideThis(eventTarget) {
  eventTarget.classList.add("hidden");
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
  var argTitle = titles[getRandomIndex(titles)];
  var argCover = covers[getRandomIndex(covers)];
  var argDesc1 = descriptors[getRandomIndex(descriptors)];
  var argDesc2 = descriptors[getRandomIndex(descriptors)];
  currentCover = createCover(argCover, argTitle, argDesc1, argDesc2);
  displayCurrent();
}



function makeNewBook() {
  event.preventDefault();
  
  var userCover = document.querySelector('#cover').value;
  var userTitle = document.querySelector('#title').value;
  var userDesc1 = document.querySelector('#descriptor1').value;
  var userDesc2 = document.querySelector('#descriptor2').value;
  covers.push(userCover);
  titles.push(userTitle);
  descriptors.push(userDesc1, userDesc2);
  currentCover = createCover(userCover, userTitle, userDesc1, userDesc2);
  enableHomeView();
  displayCurrent();
}

function displaySavedCovers() {
  var miniCoverTags = [];
  for(var i = 0; i < savedCovers.length; i++) {
    miniCoverTags.push(
    ` <section class="mini-cover" id=${savedCovers[i].id}>
        <img class="cover-image" src=${savedCovers[i].coverImg}> 
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline"> A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2};
      </section> 
    `)
  }

  savedSection.innerHTML = miniCoverTags.join("");
}

function enableSavedView() {
  showThis(savedView);
  showThis(homeButton);

  hideThis(homeView);
  hideThis(formView);
  hideThis(randButton);
  hideThis(saveCoverButton);

  displaySavedCovers();
}

function enableFormView() {
  showThis(formView);
  showThis(homeButton)

  hideThis(homeView);
  hideThis(savedView);
  hideThis(randButton);
  hideThis(saveCoverButton);
}

function enableHomeView() {
  showThis(homeView);
  showThis(randButton);
  showThis(saveCoverButton);

  hideThis(savedView);
  hideThis(formView);
  hideThis(homeButton);
}

function duplicateExists(coverObj) {
  var existence = false;
  for(var i = 0; i < savedCovers.length; i++) {
    if(coverObj === savedCovers[i]) {
      existence = true;
    }
  }
  return existence;
};

function saveCover() {
 if(duplicateExists(currentCover) === false) {
  savedCovers.push(currentCover);
 }
}

savedSection.addEventListener('dblclick', function(event) {
  for(var i = 0; i <savedCovers.length; i++) {
    if(event.target.closest("section").id === savedCovers[i].id.toString()) {
      savedCovers.splice(i, 1);
    }
  }
  displaySavedCovers();
  
});


/* iterator 4
import the target element from DOM using querySelector
implement an event listener for dblclick
create function deleteCover





/* iterator 3
    
import DOM element for save cover button
add an event listener and trigger a function.

create a function to duplicateExists
with argument of the currentCover
it will loop through the array of savedCovers
check for currentCover === savedCovers[i]
return true/false

if (duplicateExists=== false) 
push (currentCover) into savedCovers

use innerhtml to include all the elements of 
savedCovers (javascript) in the DOM representation for 
savedCovers section (HTML)

*/

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




