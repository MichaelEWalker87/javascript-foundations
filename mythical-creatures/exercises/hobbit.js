class Hobbit{
  constructor(name, age){
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;

    if (name === 'Frodo') {
      this.hasRing = true
    } else {
      this.hasRing = false
    }
  };

  celebrateBirthday() {
    this.age++;
    if (this.age >= 33 && this.age < 101) {
      this.adult = true
    } else if (this.age >= 101) {
      this.adult = true, this.old = true
    } else {
      this.adult = false, this.old = false;
    }
  };
};

module.exports = Hobbit;
