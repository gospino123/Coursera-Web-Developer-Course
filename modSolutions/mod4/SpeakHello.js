(// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
  var helloSpeaker = {}; //Potentially wrong!!! REVIEW AFTER!!!
  helloSpeaker.speak = "";


  var speakWord = "Hello "; //stays global

  // STEP 4: Rewrite the 'speak' function such that it is attached to the
  // helloSpeaker object instead of being a standalone function.
  // See Lecture 52, part 2
  function speak(name) {
    console.log(speakWord + " " + name);
  }

  (function (name) {
    console.log(speakWord + " " + name);
  })(?);

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;
)();