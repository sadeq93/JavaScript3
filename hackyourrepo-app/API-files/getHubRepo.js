export class RepoData {
  constructor() {
    this.repoData = this.fetchData(
      'https://api.github.com/orgs/HackYourFuture/repos?per_page=100',
    );
  }
  fetchData(url) {
    return axios.get(url).then(response => {
      return response.data;
    });
  }
}
const repositoriesData = new RepoData()
// fetch contributors data 
export class contributorsData {
  constructor() {
    this.repoData = repositoriesData.repoData
  }
  printUrl() {
    this.storContributorsUrl().then((ss) => console.log(ss))
  }
}