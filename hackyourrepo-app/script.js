'use strict';
/*
window.onload = () => {
 
  // get all repositories then create options inside select HTML tag 
  axios({
    method: 'GET',
    url: "none"
  }).then(response => {
    // store the repositories.
    const repositories = response.data
      repositories.forEach((element,counter) => {
        const option = document.createElement('option');
        option.value = counter;
        option.textContent = 'element.name'
        select.appendChild(option);
      });
  }).catch(error => console.error(error));
}

*/
const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];
const select = document.getElementById('select');
let option;
const getData = (repositories) => {
  repositories.forEach((repo, counter) => {
    option = document.createElement('option');
    option.value = counter;
    option.textContent = repo.name;
    select.appendChild(option);
  });
};

getData(placeholderRepos);

const ShowData = (e) => {
  const repoName = document.querySelector('.repoName');
  const repoDescription = document.querySelector('.repoDescription');
  const forks = document.querySelector('.forks');
  const repoUpdated = document.querySelector('.repoUpdated');

  repoName.lastElementChild.textContent = placeholderRepos[e.target.value].name;
  repoDescription.lastElementChild.textContent =
    placeholderRepos[e.target.value].description;
  forks.lastElementChild.textContent = placeholderRepos[e.target.value].forks;
  repoUpdated.lastElementChild.textContent =
    placeholderRepos[e.target.value].updated;
  console.log(repoName);
};

select.addEventListener('change', ShowData);
