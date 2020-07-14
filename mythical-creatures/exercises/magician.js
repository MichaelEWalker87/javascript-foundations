var spell = 0
class Magician {
  constructor(magicianStuff) {
    this.name = magicianStuff.name;
    this.topHat = magicianStuff.topHat;
    this.confident = false;

    if (magicianStuff.topHat === undefined){
      this.topHat = magicianStuff.topHat = true
    } else {
        magicianStuff.topHat = magicianStuff.topHat
    }
  }

  incantation(message){
    return `${message.toUpperCase()}!`;
  }

  cast(){
    spell++
    if (spell >= 3){
      this.confident = true;
    }
    if ( this.topHat === true){
      return 'PULL RABBIT FROM TOP HAT';
    } else {
      return 'PULL DOVE FROM SLEEVE';
    }
  }

  performShowStopper(){
    if (this.confident === false) {
      return 'Oh no! Practice more before attempting this trick!'
    } else {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }
}


module.exports = Magician;
