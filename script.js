import { catsData } from './data.js';

const emotionRadios = document.querySelector('#emotion-radios');
const imageBtn = document.querySelector('#get-image-btn');
const gifsOnly = document.querySelector('#gifs-only-option');

function emotionRadiosButtons(e) {
  const radios = document.getElementsByClassName('radio');

  for (let radio of radios) {
    radio.classList.remove('highlight');
  }
  document.getElementById(e.target.id).parentElement.classList.add('highlight');
}

//returns an array of cat objects that matches the user criteria
function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const isGif = gifsOnly.checked;

    const matchingCats = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingCats;
  }
}

//returns a single cat object selected from the array provided by getMatchingCatsArray
function getSingleCatObject() {
const catsArray = getMatchingCatsArray()


}

//the cat object provided by getSingleCatObject to create HTML string which will render it to DOM
function renderCat() {
    getSingleCatObject()
}

function getEmotionsArray(cats) {
  let catEmotionArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      if (!catEmotionArray.includes(emotion)) {
        catEmotionArray.push(emotion);
      }
    }
  }
  return catEmotionArray;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let radioItems = '';

  for (let emotion of emotions) {
    radioItems += `
<div class="radio">

<label for="${emotion}"> ${emotion} </label>

<input
type = "radio"
id = "${emotion}"
value = "${emotion}"
name = "emotions"
/>
</div>`;
  }
  emotionRadios.innerHTML = radioItems;
}
renderEmotionsRadios(catsData);

emotionRadios.addEventListener('change', emotionRadiosButtons);
imageBtn.addEventListener('click', renderCat);
