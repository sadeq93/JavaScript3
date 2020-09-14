import { RepoData } from '../API-files/getHubRepo.js'
const repositoriesData = new RepoData()
// 
export class contributors {
  constructor() {
    this.main = document.querySelector('main');
    this.contributorsSection = document.createElement('section');
    // 
    this.repoData = repositoriesData.repoData
    this.contributorsUrl = this.getUrls()

  }
  append() {
    this.main.appendChild(this.contributorsSection);
  }
  setAttributes() {
    this.contributorsSection.setAttribute('id', 'contributorsContainer');
  }
  manipulate() {

  }

  getUrls() {
    return this.repoData.then(data => {
      return data.map(repo => repo.contributors_url);
    })
  }

  insertData(e) {
    const contsContainer = document.createElement("div")
    this.contributorsUrl.then(url => {
      axios
        .get(url[e.target.value])
        .then(cont => {
          cont.data.forEach(contributor => {
            const contContainer = document.createElement("div")
            const contImg = document.createElement("img")
            const contLink = document.createElement("a")
            const contContributions = document.createElement("h2")

            // appending
            this.contributorsSection.appendChild(contsContainer)
            contsContainer.appendChild(contContainer)
            contContainer.appendChild(contImg)
            contContainer.appendChild(contLink)
            contContainer.appendChild(contContributions)
            // setAttribute
            contContainer.setAttribute('id', 'contContainer')
            contsContainer.setAttribute('id', 'contsContainer')
            contImg.setAttribute('width', '50px')
            contLink.setAttribute('href', contributor.html_url)
            contLink.setAttribute('target', '_blank')
            // manipulating
            contLink.textContent = contributor.login
            contImg.src = (contributor.avatar_url)
            contContributions.textContent = contributor.contributions
          });

        })

    })

  }


  addAndRemove(e) {

    if (this.contributorsSection.firstChild === null) {
      this.insertData(e)
    } else {
      this.contributorsSection.removeChild(this.contributorsSection.firstChild)
      this.insertData(e)
    }
  }
}


