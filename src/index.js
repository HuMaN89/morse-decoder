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
  const words = [];

  let ind = 0;
  last = expr.indexOf("**********");

  console.log(last);
  let i = 0;
  while (last > 0) {
    words.push(expr.slice(ind, last));

    console.log(ind);
    console.log(last);
    ind = last + 10;
    last = expr.indexOf("**********", ind);

    console.log(ind);
    console.log(last);
  }
  words.push(expr.slice(ind));

  let res = "";
  words.forEach((el) => {
    let sings = [];
    for (let i = 0; i < el.length / 10; i++) {
      sings.push(el.slice(i * 10, (i + 1) * 10));
    }

    sings.forEach((el) => {
      let sign = "";
      for (let i = 0; i < el.length; i += 2) {
        if (el[i] + el[i + 1] === "10") {
          sign += ".";
        }
        if (el[i] + el[i + 1] === "11") {
          sign += "-";
        }
      }
      res += MORSE_TABLE[sign];
    });
    res += " ";
  });
  return res.trim();
}

module.exports = {
  decode,
};
