'use strict';
import { Nav } from './DOM-sections/header-select-repo.js';
const navigationBar = new Nav();
navigationBar.append();
navigationBar.setAttributes();
navigationBar.manipulate();
navigationBar.repoData.then(value => console.log(value));

//
import { RepositoryInfo } from './DOM-sections/repository-Info.js';
const RepoInfoSection = new RepositoryInfo();
RepoInfoSection.append();
RepoInfoSection.manipulate();
RepoInfoSection.setAttributes();
//
import { contributors } from './DOM-sections/contributors-sectoin.js';
const RepoContributorsSection = new contributors();
RepoContributorsSection.append();
// RepoContributorsSection.manipulate();
RepoContributorsSection.setAttributes();
