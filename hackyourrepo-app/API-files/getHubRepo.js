class DataFetcher {
  constructor(url) {
    this.url = url


  }
  async fetchData() {
    try {
      const response = await axios.get(this.url);
      return response.data;
    } catch{
      throw new Error('API Error !')
    }
  }
  async fetchNestedURL() {
    try {
      const urlContributors = await this.fetchData();
      return await urlContributors.map(repo => repo.contributors_url)
    } catch{
      throw new Error('API Error !')
    }
  }
}
export const repositoriesData = new DataFetcher('https://api.github.com/orgs/HackYourFuture/repos?per_page=100')
