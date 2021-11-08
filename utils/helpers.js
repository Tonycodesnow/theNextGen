const moment = require("moment");

module.exports = {
  daysLeft(date) {
    const days = moment(date).diff(moment(), "days");
    return days == 0 ? "Party Today" : `Party in ${days} days`;
  },
};
