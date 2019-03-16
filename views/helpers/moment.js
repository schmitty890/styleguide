const moment = require('moment');

var momentHelpers = {
  momentFromNowTime: function(time){
    return moment(time).fromNow();
  },
  dayMonthYear: function(time) {
    return moment(time, 'YYYY-MM-DD').format('MMMM DD YYYY');
  },
  bar: function(){
    return "BAR";
  }
};

module.exports = momentHelpers;