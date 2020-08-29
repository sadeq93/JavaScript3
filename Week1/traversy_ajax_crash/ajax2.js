//
const getInfo = () => {
  let imgTag = document.createElement('img');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://xkcd.now.sh/?comic=latest');
  xhr.send();
  xhr.onload = () => {
    if (this.status >= 400) {
      console.error('Error');
    } else {
      const data = JSON.parse(xhr.responseText);
      let body = document.querySelector('body');
      let imgUrl = data.img;
      imgTag.setAttribute('src', imgUrl);
      body.appendChild(imgTag);
    }
  };
};

const getFriendAxios = () => {
  let imgTag = document.createElement('img');

  axios
    .get('https://xkcd.now.sh/?comic=latest')
    .then((response) => {
      let body = document.querySelector('body');
      let imgUrl = response.data.img;
      imgTag.setAttribute('src', imgUrl);
      body.appendChild(imgTag);
    })
    .catch((error) => console.error(error));
};
getFriendAxios();
getInfo();
