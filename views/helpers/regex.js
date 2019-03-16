/**
 * Description:   Handlebar regex helper functions 
 * Created:       03.15.2019
 **/
var regex = {
  replaceSpaceWithHyphen: function(str){
    if(str) return str.replace(/ /g,"-");
  }
};

module.exports = regex;