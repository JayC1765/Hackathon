const listOfImages = document.querySelectorAll('img');

const url = chrome.runtime.getURL('thumb@2x.jpg');

for (let i = 0; i < listOfImages.length; i += 1) {
  listOfImages[i].setAttribute('src', url);
}
