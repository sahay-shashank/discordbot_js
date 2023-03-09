const Discord = require("discord.js"),
  ms = require("ms");
module.exports = {
  
  
  formatDate: function (date) {
  
    return new Intl.DateTimeFormat("en-US").format(date);
  
  },
  
  
  isOdd(num) {
    
    if ((num % 2) == 0) return false;
    else if ((num % 2) == 1) return true;
  
  },
  
  
  verifyInt(num, def) {
    
    if (typeof def === "number" && !num) return def;
    const parsed = parseInt(num);
    if (isNaN(parsed)) throw "Baka! You must provide a valid number.";
    return parsed;
  
  },
  
  
  printDate(pdate) {
  
    let monthNames = [
      "janvier", "février", "mars",
      "avril", "mai", "juin", "juillet",
      "août", "septembre", "octobre",
      "novembre", "décembre"
    ];

    let day = pdate.getDate(),
      monthIndex = pdate.getMonth(),
      year = pdate.getFullYear(),
      hour = pdate.getHours(),
      minute = pdate.getMinutes();

    return day + " " + monthNames[monthIndex] + " " + year + " à " + hour + "h" + minute;
  
  },

  
  convertMs(ms) {
  
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;

    return h + " heure(s) " + m + " minute(s) " + s + " seconde(s)";
  
  },
}
