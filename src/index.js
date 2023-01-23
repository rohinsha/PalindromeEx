let str1 = "MadAm  maDAM";
let modiefiedStr = "";

correctStr(str1);
function correctStr(str) {
  modiefiedStr = str.replace(/ /g, "").toLowerCase();
  reverseString(modiefiedStr);
}
function reverseString(str) {
  let reverseStr = "";
  for (let elem of str) {
    reverseStr = elem + reverseStr;
  }
  if (modiefiedStr === reverseStr) console.log("string is palindrome");
  else console.log("string not a palindrome!");
}
