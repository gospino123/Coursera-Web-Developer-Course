(function (window) {
  var byeSpeaker = {}; //step 7
  
  var speakWord = "Good Bye";

  //step 8
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;
}) (window);

//step 6 IIFE
