export class Nav {
  constructor() {
    this.header = document.createElement('header');
    this.logo = document.createElement('h1');
    this.select = document.createElement('select');
    this.option = document.createElement('option');
    this.repoData = this.fetchData(
      'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
    );
  }
  append() {
    document.body.appendChild(this.header);
    this.header.appendChild(this.logo);
    this.header.appendChild(this.select);
    this.select.appendChild(this.option);
  }
  setAttributes() {
    this.header.setAttribute('id', 'headerContainer');
    this.select.setAttribute('id', 'select');
    this.select.setAttribute('id', 'select');
  }
  manipulate() {
    this.logo.textContent = 'HYF Repositories';
    this.option.textContent = 'Select Option';
  }
  async fetchData(url) {
    return await axios.get(url).then(response => {
      return response.data;
    });

  }
}
