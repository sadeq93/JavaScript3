import { Nav } from './DOM-sections/header-select-repo.js';
import { RepositoryInfo } from './DOM-sections/repository-Info.js';
import { contributors } from './DOM-sections/contributors-section.js';

async function main() {

  const navigationBar = new Nav();
  await navigationBar.createOptions();
  navigationBar.setAttributes();
  navigationBar.insertText();
  navigationBar.append();
  // 
  const repoInfoSection = new RepositoryInfo();
  repoInfoSection.append();
  repoInfoSection.manipulate();
  repoInfoSection.setAttributes();
  navigationBar.select.addEventListener('change', repoInfoSection.insertData.bind(repoInfoSection))
  // 
  const repoContributorsSection = new contributors();
  repoContributorsSection.createSection();
  repoContributorsSection.createMessage();
  // repoContributorsSection.createPagesButtonsContainer();

  navigationBar.select.addEventListener('change', repoContributorsSection.runOnChange.bind(repoContributorsSection));
  // navigationBar.select.addEventListener('change', repoContributorsSection.creatPageOne.bind(repoContributorsSection));

  // 

  // if (repoContributorsSection.buttonsContainer === null) {
  //   console.log(`buttons container`)
  //   repoContributorsSection.buttonsContainer.addEventListener('click', repoContributorsSection.runOnClick.bind(repoContributorsSection));
  // }
}
main()
