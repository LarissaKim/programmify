// Basic implementation of a mechanical pencil
class MechanicalPencil {
  constructor(graphiteSize, initialQty) {
    this.graphiteSize = graphiteSize; // diameter in mm
    this.graphiteStickCount = initialQty;
    this.graphiteLength = 70; // in mm
    this.totalDispensed = 0; // in mm
  }

  loadGraphite(graphiteSize, numRefills) {
    //  Avoid jams, clogging
    if (graphiteSize !== this.graphiteSize) {
      throw new Error('Incorrect graphite size');
    }

    if (numRefills + this.graphiteStickCount > 3) {
      throw new Error('Maximum three graphiteSticks allowed at a time');
    }

    this.graphiteStickCount += numRefills;
  }

  //  Outputs 1mm of graphite
  //  Throws an error if there is no graphite
  dispenseGraphite() {
    if (this.graphiteStickCount > 0) {
      this.totalDispensed++;

      if (this.totalDispensed % this.graphiteLength === 0) {
        this.graphiteStickCount--;
      }
    } else {
      throw new Error('Please refill with graphite');
    }
  }

  //  Concats input into a single string
  write(...input) {
    return input.join(' ');
  }

  //  Removes one or more characters from a word
  erase(word, startIndex, removeCount) {
    const wordAfterErase = [...word];

    // Leave a space where characters were removed
    wordAfterErase.splice(startIndex, removeCount, ' ');

    return wordAfterErase.join('');
  }
}
