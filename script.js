function encrypt() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const outputText = document.getElementById('outputText');
  
    let encryptedText = "";
    for (let i = 0; i < inputText.length; i++) {
      let charCode = inputText.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        encryptedText += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      } else {
        encryptedText += inputText[i];
      }
    }
  
    outputText.value = encryptedText;
  }
  
  function decrypt() {
    const inputText = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shift').value);
    const outputText = document.getElementById('outputText');
  
    let decryptedText = "";
    for (let i = 0; i < inputText.length; i++) {
      let charCode = inputText.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        decryptedText += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        decryptedText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      } else {
        decryptedText += inputText[i];
      }
    }
  
    outputText.value = decryptedText;
  }