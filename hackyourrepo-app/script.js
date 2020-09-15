'use strict';
import { Nav } from './DOM-sections/header-select-repo.js';
const navigationBar = new Nav();
navigationBar.append();
navigationBar.setAttributes();
navigationBar.manipulate();
navigationBar.insertData();

//
import { RepositoryInfo } from './DOM-sections/repository-Info.js';
const repoInfoSection = new RepositoryInfo();
repoInfoSection.append();
repoInfoSection.manipulate();
repoInfoSection.setAttributes();
navigationBar.select.addEventListener('change', repoInfoSection.insertData.bind(repoInfoSection))

//
import { contributors } from './DOM-sections/contributors-sectoin.js';
const RepoContributorsSection = new contributors();
RepoContributorsSection.append();
RepoContributorsSection.manipulate();
RepoContributorsSection.setAttributes();
RepoContributorsSection.getUrls();
navigationBar.select.addEventListener('change', RepoContributorsSection.addAndRemove.bind(RepoContributorsSection));



import { RepoData } from './API-files/getHubRepo.js'
const repositoriesData = new RepoData()
window.addEventListener('load', repositoriesData.fetchData) 