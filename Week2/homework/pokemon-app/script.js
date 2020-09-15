class Pokemon {
  constructor() {
    this.select = document.getElementById('select');
    this.result = document.getElementById('result');
    this.data = this.fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');
  };
  fetchData(url) {
    return axios
      .get(url)
      .then(response => {
        return response
      });
  }
  createOptions() {
    this.data.then(response => {
      response.data.results.forEach((poki, counter) => {
        const option = document.createElement('option');
        option.textContent = poki.name;
        option.setAttribute('value', counter);
        this.select.appendChild(option);
      });
    });
  }

  insertImages(e) {
    this.data.then(res => {
      axios
        .get(res.data.results[e.target.value].url)
        .then(resForImg => {
          const imgUrl = resForImg.data.sprites.other["official-artwork"].front_default;
          const img = document.createElement('img')
          img.src = imgUrl
          img.setAttribute('width', '150px')
          this.result.appendChild(img)
        })
    })
  }
  removeAndAdd(e) {
    if (this.result.firstChild === null) {
      this.insertImages(e)
    } else {
      this.result.removeChild(this.result.firstChild)
      this.insertImages(e)
    }
  }
}
const pokemon1 = new Pokemon()
window.addEventListener('load', pokemon1.fetchData)
pokemon1.createOptions()
pokemon1.select.addEventListener('change', pokemon1.removeAndAdd.bind(pokemon1))
