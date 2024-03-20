// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // Our array holding the character values in each index
  const polybiusArray = [
    ['a', 'f', 'l', 'q', 'v'],
    ['b', 'g', 'm', 'r', 'w'],
    ['c', 'h', 'n', 's', 'x'],
    ['d', 'i/j', 'o', 't', 'y'],
    ['e', 'k', 'p', 'u', 'z']
  ]

  // Helper function that finds the character corresponding to a given polybius number
  function getCharacterAt(number){
    const x = number.charAt(0) - 1;
    const y = number.charAt(1) - 1;
    return polybiusArray[x][y];
  }
  
  // Helper function that finds the polybius number for a particular character
  function getNumberFor(character){
    // i and j have the same number
    if (character === 'i' || character === 'j') return '42';
    // Find the character in the polybius array that matches our desired character
    for (let i = 0; i < polybiusArray.length; i++){
      for (let j = 0; j < polybiusArray[i].length; j++){
        if (polybiusArray[i][j] === character) return `${i+1}${j+1}`;
      }
    }
    // If it's not in our polybius array, we don't change it, so we just return it
    return character;
  }

  function polybius(input, encode = true) {
    // Our encoding sequence
    if (encode){
      // Divide the sentence into a character array
      const chars = input.toLowerCase().split('');
      // Get the number corresponding to each character in the array
      let result = chars.map((character) => getNumberFor(character));
      // Join the array of numbers back into a string and return it
      return result.join('');
    }
    // Our decoding sequence
    else {
      // Grab all the words that compose the input
      const words = input.split(' ');
      // Check to see if any word's length is odd
      const isOdd = words.some((word) => word.length % 2 === 1);
      // If any word's length is an odd number, we return false
      if (isOdd) return false;
      // Otherwise, we decode each word
      let result = words.map((word) => {
        // Accumulates our decoded word
        decryptedWord = "";
        // Go through each number pair for the word
        for (let i = 0; i < word.length; i+=2){
          // Grab the current two-digit number
          const number = word.slice(i, i+2);
          // Add the character for that number to our word
          decryptedWord += getCharacterAt(number);
        }
        // Adds the decrypted word to our list of words for the sentence
        return decryptedWord;
      });
      // Return a sentence formed from joining the words together with spaces
      return result.join(' ');
    } 
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
