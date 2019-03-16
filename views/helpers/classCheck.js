var classcheck = function (str) {
  if(str) return str.replace(/ /g,"-");
}

module.exports = classcheck;