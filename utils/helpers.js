const moment = require('moment');

module.exports = {
  format_date: date => {
    const momentDate = moment(date);
    return momentDate.format('MM/DD/YYYY');
  }
};

