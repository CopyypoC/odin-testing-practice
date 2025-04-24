export function caesarCipher(str, shift) {
  shift %= 25;
  let shiftStr = "";
  for (const char of str) {
    // lowercase check
    if (
      char.charCodeAt(0) >= 97 &&
      char.charCodeAt(0) <= 122 &&
      char.charCodeAt(0) + shift > 122
    ) {
      shiftStr += String.fromCharCode(char.charCodeAt(0) + (shift - 26));
    } else if (
      char.charCodeAt(0) >= 65 &&
      char.charCodeAt(0) <= 90 &&
      char.charCodeAt(0) + shift > 90
    ) {
      shiftStr += String.fromCharCode(char.charCodeAt(0) + (shift - 26));
    } else {
      shiftStr += String.fromCharCode(char.charCodeAt(0) + shift);
    }
  }

  return shiftStr;
}
