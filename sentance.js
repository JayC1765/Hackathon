const listOfImages = document.querySelectorAll('img');

for (let i = 0; i < listOfImages.length; i += 1) {
  listOfImages[i].setAttribute('src', './Images/thumb@2x.jpg');
};
