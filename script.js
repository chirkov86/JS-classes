class TownObject {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
  getBuildYear() {
    return this.buildYear;
  }
  getAge() {
    return new Date().getFullYear() - this.buildYear;
  }
  getName() {
    return this.name;
  }
  static getAvgAge(...townObjects) {
    return townObjects
      .map(item => item.getAge())
      .reduce((prev, curr) => prev + curr) / townObjects.length;
  }
};

class Park extends TownObject {
  constructor(name, buildYear, numberOfTrees, area) {
    super(name, buildYear);
    this.numberOfTrees = numberOfTrees;
    this.area = area;
  }
  getDensity() {
    return this.numberOfTrees / this.area;
  }
  printDensity() {
    console.log(`${this.getName()} has density of ${this.getDensity()} trees per square km`)
  }
  getNumberOfTrees() {
    return this.numberOfTrees;
  }
}

class Street extends TownObject {
  constructor(name, buildYear, length, size = 'normal') {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
  getLength() {
    return this.length;
  }
  getSize() {
    return this.size;
  }
  static getTotalLength(...streets) {
    return streets
      .map(item => item.getLength())
      .reduce((prev, curr) => prev + curr);
  }
  static getAvgLength(...streets) {
    return Street.getTotalLength(...streets) / streets.length;
  }
}

// Objects
const park1 = new Park('Hyde Park', 1990, 2634, 10.5);
const park2 = new Park('Central Park', 2001, 1663, 7.5);
const park3 = new Park('Linkin Park', 2008, 789, 3.5);
const parks = [park1, park2, park3];

const street1 = new Street('Ocean str', 1994, 5.5, 'small');
const street2 = new Street('Evergreen str', 2003, 6);
const street3 = new Street('Park ave', 2014, 8, 'large');
const street4 = new Street('Boulevard of broken dreams', 2010, 7.7, 'normal');
const streets = [street1, street2, street3, street4];

console.log('-----Parks Report-----')
// Print overall info about parks
console.log(`Our ${parks.length} town parks have average age of ${TownObject.getAvgAge(...parks)} years`);

// Print tree density of each park
parks.forEach(item => item.printDensity());

// What parks have number of trees more than 1000
parks.forEach(item => {
  if (item.getNumberOfTrees() > 1000) {
    console.log(`${item.getName()} has more than 1000 trees`)
  }
});

console.log('-----Streets Report-----');
// Print overall info about streets
console.log(`Our ${streets.length} streets have total length of ${Street.getTotalLength(...streets)} km with average length of ${Street.getAvgLength(...streets)} km`);

// Print each street info
streets.forEach(item => {
  console.log(`${item.getName()} street build in ${item.getBuildYear()} has ${item.getSize()} size`)
})
