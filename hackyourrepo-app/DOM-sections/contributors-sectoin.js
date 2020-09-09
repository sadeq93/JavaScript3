export class contributors {
  constructor() {
    // this.main = document.createElement('main');
    this.main = document.querySelector('main');
    this.contributorsSection = document.createElement('section');
  }
  append() {
    // document.body.appendChild(this.main);
    this.main.appendChild(this.contributorsSection);
  }
  setAttributes() {
    this.contributorsSection.setAttribute('id', 'contributorsContainer');
  }
}
