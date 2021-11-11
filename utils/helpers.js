const moment = require("moment");

module.exports = {
  daysLeft(date) {
    const days = moment(date).diff(moment(), "days");
    if (days > 0) return `Party in ${days} days`;
    if (days === 0) return `Party today`;
    return "Event Past";
  },
};
