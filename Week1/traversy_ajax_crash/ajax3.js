'use strict';

const xhrButton = document.getElementById('XHR-button');
const axiosButton = document.getElementById('Axios-button');
const display = document.getElementById('display');
const getDogImgXhr = () => {
  const xhr = new XMLHttpRequest();
  let img = document.createElement('img');
  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');
  xhr.send();
  xhr.onload = () => {
    if (this.status >= 400) {
      console.error('Error');
    } else {
      let data = JSON.parse(xhr.responseText);
      let li = document.createElement('li');
      img.src = data.message;
      img.setAttribute('width', '300px');
      li.appendChild(img);
      display.appendChild(li);
    }
  };
};
const getDogImgAxios = () => {
  let img = document.createElement('img');
  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      let li = document.createElement('li');
      img.src = response.data.message;
      img.setAttribute('width', '300px');
      li.appendChild(img);
      display.appendChild(li);
    })
    .catch((error) => console.error(error));
};

xhrButton.addEventListener('click', getDogImgXhr);
axiosButton.addEventListener('click', getDogImgAxios);
