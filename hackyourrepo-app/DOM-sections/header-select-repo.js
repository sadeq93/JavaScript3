import { repositoriesData } from '../API-files/getHubRepo.js'
export class Nav {
  constructor() {
    this.header = document.createElement('header');
    this.logo = document.createElement('h1');
    this.select = document.createElement('select');
    this.option = document.createElement('option');
    this.repoData = repositoriesData.fetchData()
    this.options = [];
  }
  async createOptions() {
    const data = await this.repoData;
    data.forEach(() => {
      const repoOption = document.createElement('option');
      this.options.push(repoOption)
    })

  };
  async insertText() {
    this.logo.textContent = 'HYF Repositories';
    this.option.textContent = 'Select Option';
    // 
    const data = await this.repoData;
    this.options.forEach((option, counter) => {
      option.textContent = data[counter].name;
    })
  }
  setAttributes() {
    this.header.setAttribute('id', 'headerContainer');
    this.select.setAttribute('id', 'select');
    // 
    this.options.forEach((option, counter) => {
      option.setAttribute('value', counter);
    })
  }
  append() {
    document.body.appendChild(this.header);
    this.header.appendChild(this.logo);
    this.header.appendChild(this.select);
    this.select.appendChild(this.option);
    // 
    this.options.forEach(option => {
      this.select.appendChild(option);
    })
  }
}
