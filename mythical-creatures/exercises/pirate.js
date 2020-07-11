class Pirate {
  constructor(name, job) {
    this.name = name;
    this.cursed = false;
    this.booty = 0;

    if(job === undefined) {
      this.job = 'scallywag';
    } else {
      this.job = job;
    };
  };

  robShip(){
    this.booty += 100;
    return 'YAARRR!';
  };
};

module.exports = Pirate;
