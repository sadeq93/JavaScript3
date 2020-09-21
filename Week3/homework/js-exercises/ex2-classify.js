
class Adbulkareem {
  constructor() {
    this.name = 'Adbulkareem';
    this.age = 35;
    this.location = 'Riyadh';
    this.family = {
      married: true,
      numberOfChildren: 3
    };
    this.job = true
    this.jobType = 'construction worker'
    this.favoriteSnacks = ['dates']
    this.smoker = true
    this.smokeTypes = ['water pipe']
    this.property = adel;

  }
  working() {
    return `${this.name}'S work ${this.jobType}`
  }
  smoking() {
    return `${this.name}'S smoke ${this.smokeTypes}`
  }
}
class Adel {
  constructor() {
    this.type = 'horse'
    this.name = 'Adel';
    this.age = 15;
    this.color = 'brown';
    this.food = 'grass';
    this.job = 'transport materials'
  }
  working() {
    return `${this.name}'S work ${this.jobType}`
  }

}

const adel = new Adel();
const adbulkareem = new Adbulkareem();
console.log(adel)
console.log(adbulkareem)