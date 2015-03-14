var words = function(input) {
  var hash = {};
  var words_array = input.split(/[ \n\t]+/)

  words_array.forEach(function(value){
    if (hash[value] >= 1){
      hash[value]++;
    } else {
      hash[value] = 1;
    }
  });

  return hash;

};

module.exports = words;
