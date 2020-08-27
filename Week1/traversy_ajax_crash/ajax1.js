const button = document.getElementById("button");
// XML Http request
const getFriend = () => {
  const xhr = new XMLHttpRequest()
  xhr.open("GET", 'https://www.randomuser.me/api');
  xhr.send();

    xhr.onload = () => {
        if (this.status >=400) {
          console.log("Error")
        } else {
          let data = JSON.parse(xhr.responseText)
          console.log(data)
        }
    }
  xhr.onerror = () => console.error("Error");
}
//axios Request
const getFriendAxios = () => { 

  axios({
    method: 'GET',
    url: 'https://www.randomuser.me/api'
  }).then(response => console.log(response.data))
    .catch(error => console.error(error) )
}
button.addEventListener("click",getFriend)
button.addEventListener("click",getFriendAxios)