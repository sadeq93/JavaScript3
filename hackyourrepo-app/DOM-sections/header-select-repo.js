export class Nav {
  constructor(header, logo, select) {
    this.header = header;
    this.logo = logo;
    this.select = select;
  }
  append() {
    document.body.appendChild(this.header);
    this.header.appendChild(this.logo);
    this.header.appendChild(this.select);
  }
  manipulate() {
    this.logo.textContent = ' sadeq';
  }
  style() {
    this.header.classList.add('header');
  }
}
