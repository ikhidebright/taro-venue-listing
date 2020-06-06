class NumJS {
    constructor(array, startIndex, word){
        this.array = array
        this.startIndex = startIndex
        this.word = word
    }
    // get word () {
    //     return this.word
    // }
    // get index () {
    //     return this.startIndex
    // }
    /**
     * @param {(arg0: any) => void} x
     */
    set setWord (x) {
        this.word = x
    }
    /**
     * @param {(arg0: number) => void} x
     */
    set setIndex (x) {
        this.startIndex = x
    }
      switch () {
      console.log(this.array)
      let last = this.array.length - 1
      this.setWord(this.array[this.startIndex])
      let checkLastItem = this.array.indexOf(this.word) == last
      if (checkLastItem) {
        this.setIndex(0)
      } else {
        this.setIndex(this.index + 1)
      }
    }
}

function WordSwitch (array, startIndex, speed) {
    let firstWord = array[0]
    let word = new NumJS(array, startIndex, firstWord)
    // console.log(word)
    setInterval(word.switch, speed)
    return word.word
}

export default WordSwitch;