export class RepoData {
  constructor() {
    this.repoData = this.fetchData(
      'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
    );
  }
  fetchData(url) {
    return axios.get(url).then(response => {
      return response.data;
    }) 
      ;
  }
}
const repositoriesData = new RepoData()
// fetch contributors data 
export class contributorsData {
  constructor() {
    this.repoData = repositoriesData.repoData

    // this.contributorData = fetchData(this.repoData.then(data => {



  }


  printUrl() {

    // console.log(this.storContributorsUrl().then(dd => dd))
    this.storContributorsUrl().then((ss) => console.log(ss))
  }
  // fetchData() {
  // this.repoData.then(data => { console.log(data) })





  // console.log(this.repoData)
  // this.repoData
  // this.repoData.then(data => {
  //   console.log(data[0].contributors_url)
  //   return axios.get(data[0].contributors_url).then(response => {
  //     return response.data;
  //   });
  // })

  // }
}