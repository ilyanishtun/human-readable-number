module.exports = function toReadable(number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero';
  }

  if (number > 0 && number < 20) {
    return units[number];
  }

  if (number >= 20 && number < 100) {
    if (number % 10 === 0) {
      return tens[Math.floor(number / 10)];
    } else {
      return tens[Math.floor(number / 10)] + ' ' + units[number % 10];
    }
  }

  if (number >= 100) {
    if (number % 100 === 0) {
      return units[Math.floor(number / 100)] + ' hundred';
    } else {
      return units[Math.floor(number / 100)] + ' hundred ' + toReadable(number % 100);
    }
  }
};
