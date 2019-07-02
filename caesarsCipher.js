// this function will perform a caesar cipher decryption on a given string using the
// given cipher key

function rot13(cipherText, cipherKey) {
  const ALPHABET_LENGTH = 26;
  const ASCII_WRAP = 65;

  const cipherArray = cipherText.split("");
  // begin cipher manipulations
  const plainText = cipherArray
    .map(cipherLetter => cipherLetter.charCodeAt(0))
    // obtain decrypted ascii code
    .map(asciiCode => {
      if (String.fromCharCode(asciiCode).match(/[A-Z]/)) {
        if (asciiCode - cipherKey < ASCII_WRAP) {
          return asciiCode - cipherKey + ALPHABET_LENGTH;
        } else {
          return asciiCode - cipherKey;
        }
      } else {
        return asciiCode;
      }
    })
    // convert decrypted ascii code to character and then build the new string
    .map(newAsciiCode => String.fromCharCode(newAsciiCode))
    .join("");
  console.log(plainText);
  return plainText;
}

// Tests
rot13("SERR PBQR PNZC", 13); // should decode to FREE CODE CAMP
rot13("SERR CVMMN!", 13); // should decode to FREE PIZZA!
rot13("SERR YBIR?", 13); // should decode to FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", 13); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
