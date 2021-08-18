const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let result = [];
  let expression = expr.split("**********");

  for (let str of expression) {
    let templetter = [];
    for (i = 0; i < str.length; i += 2) {
      let tempSign = "";
      if (str[i] + str[i + 1] == "10") {
        tempSign = ".";
      } else if (str[i] + str[i + 1] == "11") {
        tempSign = "-";
      } else if (str[i] + str[i + 1] == "00") {
        continue;
      }

      templetter.push(tempSign);

      if (i != 0 && (i + 2) % 10 == 0) {
        result.push([templetter.join("")]);
        templetter = [];
      }
    }
    result.push(" ");
  }
  result = result
    .map((l) => {
      if (l == " ") return " ";
      else {
        return MORSE_TABLE[l];
      }
    })
    .join("")
    .trim();

  return result;
}

module.exports = {
  decode,
};
