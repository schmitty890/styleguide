
var regex = {
  replaceSpaceWithHyphen: function(str){
    if(str) return str.replace(/ /g,"-");
  }
};

module.exports = regex;