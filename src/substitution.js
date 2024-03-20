// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // The English alphabet for referential purposes
  const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // If the alphabet doesn't exist or isn't exactly 26 characters long, we don't have enough to encode/decode with
    if (!alphabet || alphabet.length !== 26) return false;
    // Every character in the alphabet should be unique
    for (let i = 0; i < alphabet.length; i++){
      for (let j = 0; j < alphabet.length; j++){
        if (i !== j && alphabet.charAt(i) === alphabet.charAt(j)) return false;
      }
    }

    // Initialize our result as an array
    let result = [];
    // Put the input into lowercase
    const message = input.toLowerCase();
    // Go through each character in the string
    for (let i = 0; i < message.length; i++){
      // Grab the current character
      const character = message.charAt(i);
      // If it's a space, we just add it to the result and skip it
      if (character === ' ') { 
        result.push(character);
      }
      // If it's not a space, we have some work to do
      else {
        // For encoding
        if (encode){
          // Grab the place of the current character in the English alphabet
          const value = englishAlphabet.indexOf(character);
          // Add the character that matches that placement from our encrpytion alphabet
          result.push(alphabet.charAt(value));
        }
        // For decoding
        else {
          // Grab the place of the current character in our decryption alphabet
          const value = alphabet.indexOf(character);
          // Add the characters that matches that placement from the English alphabet
          result.push(englishAlphabet.charAt(value));
        }
      }
    }
    // Return a string formed from joining together all of our resulting characters
    return result.join('');
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
