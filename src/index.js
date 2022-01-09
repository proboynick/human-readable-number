module.exports = function toReadable (number) {
    var belowTwenty = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var decades = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (number < 20) return belowTwenty[number];
    str = '' + number;
    switch(str.length) {
      case 2: return decades[Math.floor(number / 10) - 2] + (number % 10 > 0 ? " " + toReadable(number%10) : "");
      case 3: return belowTwenty[Math.floor(number / 100)] + " hundred" + (number % 100 > 0 ? " " + toReadable(number%100) : "");
      case 4: return belowTwenty[Math.floor(number / 1000)] + " thousand" + (number % 1000 > 0 ? " " + toReadable(number%1000) : "");
    }
  }
