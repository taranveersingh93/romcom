// Variables 👇
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

var userCover = document.querySelector('#cover');
var userTitle = document.querySelector('#title');
var userDesc1 = document.querySelector('#descriptor1');
var userDesc2 = document.querySelector('#descriptor2');

var savedCovers = [
  //createCover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Event Listeners 👇
randButton.addEventListener('click', assignRandomCover);
window.addEventListener('load', assignRandomCover);
makeCoverButton.addEventListener('click', enableFormView);
viewSaveButton.addEventListener('click', enableSavedView);
homeButton.addEventListener('click', enableHomeView);
newBookButton.addEventListener('click', makeNewBook);
saveCoverButton.addEventListener('click', saveCover);

// Functions 👇
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

function displayCurrentCover() {
  coverTitle.innerText = currentCover.title;
  coverImage.src = currentCover.coverImg;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
}

function assignRandomCover() {
  var argTitle = titles[getRandomIndex(titles)];
  var argCover = covers[getRandomIndex(covers)];
  var argDesc1 = descriptors[getRandomIndex(descriptors)];
  var argDesc2 = descriptors[getRandomIndex(descriptors)];
  currentCover = createCover(argCover, argTitle, argDesc1, argDesc2);
  displayCurrentCover();
}

function storeFormData() {
  if(!covers.includes(userCover.value)) {
    covers.push(userCover.value);
  }
  if(!titles.includes(userTitle.value)) {
    titles.push(userTitle.value);
  }
  if(!descriptors.includes(userDesc1.value)) {
    descriptors.push(userDesc1.value);
  }
  if(!descriptors.includes(userDesc2.value)) {
    descriptors.push(userDesc2.value);
  } 
}

function makeNewBook() {
  event.preventDefault();
  storeFormData();
  currentCover = createCover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);
  enableHomeView();
  displayCurrentCover();
}

function displaySavedCovers() {
  var miniCoverTags = [];
  for(var i = 0; i < savedCovers.length; i++) {
    miniCoverTags.push(
    ` <section class="mini-cover" id=${savedCovers[i].id}>
        <img class="cover-image" src=${savedCovers[i].coverImg}> 
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline"> A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2};
      </section>`
    )
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
 if(!duplicateExists(currentCover)) {
  savedCovers.push(currentCover);
 }
}

savedSection.addEventListener('dblclick', function(event) {
  for(var i = 0; i < savedCovers.length; i++) {
    if(event.target.closest("section").id === savedCovers[i].id.toString()) {
      savedCovers.splice(i, 1);
    }
  }
  displaySavedCovers();
});
