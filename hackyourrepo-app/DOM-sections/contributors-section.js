import { repositoriesData } from '../API-files/getHubRepo.js'
// 
export class contributors {
  constructor() {
    this.main = document.querySelector('main');
    this.contributorsSection;
    this.contributorsMessage;
    this.contributorsContainer;
    this.buttonsContainer;
    this.contributorBox;
    this.contributorUrl = [];
    this.slice = {};
    // 
    this.repoData = repositoriesData.fetchData()
  }
  createSection() {
    this.contributorsSection = document.createElement('section');
    this.main.appendChild(this.contributorsSection);
    this.contributorsSection.setAttribute('id', 'contributorsSection');
  }
  createMessage() {
    this.contributorsMessage = document.createElement('h1');
    this.contributorsMessage.setAttribute('id', 'contributorsMessage');
    this.contributorsSection.appendChild(this.contributorsMessage);
    this.contributorsMessage.textContent = 'CONTRIBUTORS';
  }
  // ------------------------------ Buttons------------------------------\\
  //calculateNumOfButtons
  calculateNumOfButtons(numOfContributors) {
    if (numOfContributors <= 5) {
      return 0;
    } else {
      const numberOfContributors = Math.floor((numOfContributors / 5)) + 1;
      return numberOfContributors
    }
  }
  //createButton
  createButton(numOfButtons) {
    this.buttonsContainer = document.createElement('div')
    this.buttonsContainer.setAttribute('id', 'buttonsContainer')
    this.contributorsSection.appendChild(this.buttonsContainer)
    if (numOfButtons >= 1) {
      for (let i = 0; i < numOfButtons; i++) {
        const button = document.createElement('button');
        button.value = i;
        button.textContent = i + 1;
        button.setAttribute('class', 'button')
        this.buttonsContainer.appendChild(button)
      }
    }
    this.buttonsContainer.addEventListener('click', this.runOnClick.bind(this));
  }
  async createPagesButtonsContainer(e) { //e.Select
    const data = await this.repoData;
    const contributorsData = await axios.get(data[e.target.value].contributors_url);
    const numOfContributors = contributorsData.data.length
    const numOfButtons = this.calculateNumOfButtons(numOfContributors)
    this.createButton(numOfButtons)
  }
  // ------------------------------ Contributors------------------------------\\
  async getDataOnChange_AND_createFirstPage(e) {
    const data = await this.repoData;
    const value = parseFloat(e.target.value)
    const contributorsData = await axios.get(data[value].contributors_url);
    this.contributorUrl = contributorsData.data.map(url => url)
    // 

    this.createContributorBoxes(0, 5, this.contributorUrl)
  }

  sliceDataArray(e) {
    const startTrim = e.target.value * 5
    const endTrim = startTrim + 5
    this.slice = {
      start: startTrim,
      end: endTrim
    }
  }
  async createContributorsContainer() {
    this.contributorsContainer = document.createElement("div");
    this.contributorsContainer.setAttribute('id', 'contsContainer')
    this.contributorsSection.appendChild(this.contributorsContainer)

  }

  async createContributorBoxes(start, end, response) {
    const slice = response.slice(start, end)
    slice.forEach(contributor => {
      const contBox = document.createElement("div")
      const contImg = document.createElement("img")
      const contLink = document.createElement("a")
      const contContributions = document.createElement("h2")
      // appending
      this.contributorsContainer.appendChild(contBox)
      contBox.appendChild(contImg)
      contBox.appendChild(contLink)
      contBox.appendChild(contContributions)
      // setAttribute
      contBox.setAttribute('id', 'contBox')
      contBox.setAttribute('class', 'contBox')
      contImg.setAttribute('width', '50px')
      contLink.setAttribute('href', contributor.html_url)
      contLink.setAttribute('target', '_blank')
      // manipulating
      contLink.textContent = contributor.login
      contImg.src = (contributor.avatar_url)
      contContributions.textContent = contributor.contributions
    })

  }

  // ------------------------------ RUN------------------------------\\
  async runOnChange(e) {

    if (this.contributorsSection.firstElementChild === this.contributorsMessage) {
      this.contributorsSection.removeChild(this.contributorsMessage)
    }
    if (this.contributorsSection.lastElementChild === this.buttonsContainer) {
      this.contributorsSection.removeChild(this.buttonsContainer)
    }

    if (this.contributorsSection.firstElementChild === this.contributorsContainer) {
      this.contributorsSection.removeChild(this.contributorsContainer)
    }

    const data = await this.repoData;
    const contributorsData = await axios.get(data[e.target.value].contributors_url);
    const numOfContributors = contributorsData.data.length
    // 
    if (numOfContributors > 5) {
      this.createPagesButtonsContainer(e)
    }
    // 
    this.getDataOnChange_AND_createFirstPage(e);
    this.createContributorsContainer(e)
  }
  async runOnClick(e) {
    this.contributorsContainer.textContent = ''
    this.sliceDataArray(e)
    this.createContributorBoxes(this.slice.start, this.slice.end, this.contributorUrl)
  }
}
