// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // The shift must be between -25 and 25, excluding 0
    if (shift > 25 || shift < -25 || shift === 0) return false;
    // If we are decoding, we need to reverse the shift
    shift = encode? shift : -shift;
    // Split the sentence into a character array
    let chars = input.toLowerCase().split('');
    // We will only change characters within this range
    const min = 'a'.charCodeAt(0);
    const max = 'z'.charCodeAt(0); 
    // Modify each character by the shift
    chars = chars.map((character) => {
      // Grab the UTF-16 value for the character
      let value = character.charCodeAt(0);
      // If its value isn't in this range, it's a space or a symbol, so we don't change it
      if (value < min || value > max) return character;
      // Otherwise, modify it by the shift
      value += shift;
      // Wrap around if we go past z or before a
      if (value > max) value -= 26;
      if (value < min) value += 26;
      // Get the character associated with this value
      return String.fromCharCode(value);
    });
    // Return the string of these characters joined together
    return chars.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
