export function reverseString(str) {
  const strArr = str.split("");
  let newStr = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    newStr += strArr[i];
  }
  return newStr;
}
