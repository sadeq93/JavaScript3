import { RepoData } from '../API-files/getHubRepo.js'
const repositoriesData = new RepoData();
export class Nav {
  constructor() {
    this.header = document.createElement('header');
    this.logo = document.createElement('h1');
    this.select = document.createElement('select');
    this.option = document.createElement('option');
    this.repoData = repositoriesData.repoData

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
  insertText() {
    this.logo.textContent = 'HYF Repositories';
    this.option.textContent = 'Select Option';
  }
  insertData() {
    this.repoData.then(data => {
      data.forEach((repo, counter) => {
        const repoOption = document.createElement('option');
        this.select.appendChild(repoOption);
        repoOption.textContent = repo.name;
        repoOption.setAttribute('value', counter);
      })
    });

  }

}
