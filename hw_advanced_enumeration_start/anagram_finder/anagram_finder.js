const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.checkIfIdenticalWord = function (otherWords) {
    return otherWords.every((word) => {
        return this.word === word
    })
} 

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    
    if (this.checkIfIdenticalWord(otherWords)) {
        return otherWords.filter((anagram) => {
            return false;
        })
    }

    return otherWords.filter((anagram) => {
        return this.word.toLowerCase().split('').sort().join() === anagram.toLowerCase().split('').sort().join()
    })
}

module.exports = AnagramFinder;
