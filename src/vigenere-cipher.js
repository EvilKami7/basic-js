const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  direct;
  constructor(direct) {
    this.direct = (typeof direct === 'undefined') ? true : direct;
  }
  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let encrypt = [];
    let charCode;

    for (let i = 0, j = 0; i < str.length; i++){
      if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        encrypt[i] = str[i];
      } else {
        charCode = ((str.charCodeAt(i) + key.charCodeAt(j)) - 130) % 26;
        encrypt[i] = String.fromCharCode(charCode + 65);
        j = (j + 1 >= key.length) ? 0 : j + 1
      }
    }
    return this.direct ? encrypt.join('') : encrypt.reverse().join('');
  }

  decrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    let decrypt = [];
    let charCode;
    for (let i = 0, j = 0; i < str.length; i++){
      if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        decrypt[i] = str[i];
      } else {
        charCode = ((str.charCodeAt(i) + 26 - key.charCodeAt(j))) % 26;
        decrypt[i] = String.fromCharCode(charCode + 65) ;
        j = (j + 1 >= key.length) ? 0 : j + 1
      }
    }
    return this.direct ? decrypt.join('') : decrypt.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
