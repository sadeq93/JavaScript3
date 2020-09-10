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
    // this.repoData.then(data => console.log(data))
    // this.contUrl.then(data => console.log(data))

  }

  getUrls() {
    return this.repoData.then(data => {
      return data.map(repo => repo.contributors_url);
    })
  }

  insertData(e) {
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
            this.contributorsSection.appendChild(contContainer)
            contContainer.appendChild(contImg)
            contContainer.appendChild(contLink)
            contContainer.appendChild(contContributions)
            // setAttribute
            contContainer.setAttribute('id', 'contContainer')
            contImg.setAttribute('width', '50px')
            contLink.setAttribute('href', contributor.html_url)
            contLink.setAttribute('target', '_blank')
            // manipulating
            contLink.textContent = contributor.login
            contImg.src = (contributor.avatar_url)
            contContributions.textContent = contributor.contributions
            console.log(contributor)
          });

        })

    })

  }

}


