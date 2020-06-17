const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    return this.word.toLowerCase().split('').every((letter, index, array) => {
        return array.indexOf(letter) === index;
    })
}

module.exports = IsogramFinder;
