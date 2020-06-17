const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split(''); //this is an array
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter) => {
    return this.phrase.toLowerCase().split('').includes(letter);
  })
}

module.exports = PangramFinder;
