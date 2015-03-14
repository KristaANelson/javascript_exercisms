var Hamming = {
  compute: function(strand_a, strand_b) {
    if (strand_a.length != strand_b.length) {
      throw 'DNA strands must be of equal length.';
    }

    var counter = 0;

    for (var i = 0; i < strand_a.length; i++) {
      if (strand_a[i] != strand_b[i]) { counter++; }
    };
    
  return counter
  }
};

module.exports = Hamming;
