//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  function shout(input) { return input === input.toUpperCase() && input.match(/[a-zA-Z]/)};

  function silence(input) { return !input.match(/\S/) };

  function question(input) { return (input.slice(-1) === "?") };


  if (shout(input)) {
    return 'Whoa, chill out!';
  } else if (question(input)) {
    return 'Sure.';
  } else if (silence(input)) {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
