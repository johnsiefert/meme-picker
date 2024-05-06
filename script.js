import { catsData } from "./data.js"

const emotionRadios = document.querySelector('#emotion-radios');

function getEmotionsArray(cats) {
  let catEmotionArray = [];
  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      catEmotionArray.push(emotion);
    }
  }
  return catEmotionArray;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);
  let radioItems = '';

  for (let emotion of emotions) {
    radioItems += `<p> ${emotion} </p>`;
  }
  emotionRadios.innerHTML = radioItems;
}
renderEmotionsRadios(catsData);
