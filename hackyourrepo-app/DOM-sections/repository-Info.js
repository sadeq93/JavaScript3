export class RepositoryInfo {
  constructor() {
    this.main = document.createElement('main');
    this.RepositoryInfoSection = document.createElement('section');
    //
    this.repoName = document.createElement('div');
    this.repoDescription = document.createElement('div');
    this.forks = document.createElement('div');
    this.repoUpdated = document.createElement('div');
    //
    this.repository = document.createElement('h4');
    this.description = document.createElement('h4');
    this.fork = document.createElement('h4');
    this.updated = document.createElement('h4');
    //
    this.repositoryResult = document.createElement('h6');
    this.descriptionResult = document.createElement('h6');
    this.forksResult = document.createElement('h6');
    this.updatedResult = document.createElement('h6');
  }
  append() {
    document.body.appendChild(this.main);
    this.main.appendChild(this.RepositoryInfoSection);
    //
    this.RepositoryInfoSection.appendChild(this.repoName);
    this.RepositoryInfoSection.appendChild(this.repoDescription);
    this.RepositoryInfoSection.appendChild(this.forks);
    this.RepositoryInfoSection.appendChild(this.repoUpdated);
    //

    this.repoName.appendChild(this.repository);
    this.repoName.appendChild(this.repositoryResult);
    this.repoDescription.appendChild(this.description);
    this.repoDescription.appendChild(this.descriptionResult);
    this.forks.appendChild(this.fork);
    this.forks.appendChild(this.forksResult);
    this.repoUpdated.appendChild(this.updated);
    this.repoUpdated.appendChild(this.updatedResult);
  }
  manipulate() {
    this.repository.textContent = 'Repository :';
    this.description.textContent = 'Description :';
    this.fork.textContent = 'Forks :';
    this.updated.textContent = 'Updated :';
  }
  // injectData() {
  //   this.repositoryResult.textContent =
  //   this.descriptionResult.textContent =
  //   this.forksResult.textContent =
  //   this.updatedResult.textContent =
  // }
  setAttributes() {
    this.RepositoryInfoSection.setAttribute('id', 'repoContainer');
    //
    this.repoName.classList.add('repoName', 'dataBox');
    this.repoDescription.classList.add('repoDescription', 'dataBox');
    this.forks.classList.add('forks', 'dataBox');
    this.repoUpdated.classList.add('repoUpdated', 'dataBox');
    //
  }
}

// dataStor = fetchData();
// response.data.forEach((repo, counter) => {
//   const repoOption = document.createElement('option');
//   this.select.appendChild(repoOption);
//   repoOption.textContent = repo.name;
//   repoOption.setAttribute('value', counter);

// const repoData = response.data;
// return (repoData = this.reposData);
// console.log(repoData);
//

// document.querySelector(
//   '#repoContainer',
// ).children[0].children[1].textContent = response.data[0].name;

// document.querySelector(
//   '#repoContainer',
// ).children[1].children[1].textContent = '2';

// document.querySelector(
//   '#repoContainer',
// ).children[2].children[1].textContent = '3';

// document.querySelector(
//   '#repoContainer',
// ).children[3].children[1].textContent = '4';

// .catch(() => console.error(new Error('API has problem')));
