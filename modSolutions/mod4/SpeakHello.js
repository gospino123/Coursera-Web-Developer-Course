(function(window){
  var helloSpeaker = {}; // step 3

  var speakWord = "Hello";

  // step 4
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);

  }
  //step 5
  window.helloSpeaker = helloSpeaker;
})(window);