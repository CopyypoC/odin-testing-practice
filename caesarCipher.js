export function caesarCipher(str, shift) {
  shift %= 25;
  let shiftStr = "";
  for (const char of str) {
    // lowercase check
    if (
      shiftTooLarge(char.charCodeAt(0), shift) &&
      isAlpha(char.charCodeAt(0))
    ) {
      shiftStr += String.fromCharCode(char.charCodeAt(0) + (shift - 26));
    } else if (isAlpha(char.charCodeAt(0))) {
      shiftStr += String.fromCharCode(char.charCodeAt(0) + shift);
    } else {
      shiftStr += String.fromCharCode(char.charCodeAt(0));
    }
  }

  return shiftStr;
}

function isAlpha(charCode) {
  return (
    (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)
  );
}

function shiftTooLarge(charCode, shift) {
  return (
    (charCode >= 97 && charCode <= 122 && charCode + shift > 122) ||
    (charCode >= 65 && charCode <= 90 && charCode + shift > 90)
  );
}
