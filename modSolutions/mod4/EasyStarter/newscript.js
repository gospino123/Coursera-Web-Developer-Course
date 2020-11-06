greeter.sayHello();
salutation.sayBye();

// STEP7B objects updated to fit new forms
// This ends PART1 of Lecture 52 and starts PART2








// // Uncomment from HERE ON

// //What is an IIFE (Immediately Invoked Function Expression)? This:

// /*C.1 var a = is erased along with bottom part*/

// (function (/* E.1 add parameter "name" */name) {
//     console.log("Hello " + name/* Coursera replaced with name */);
// } // A. The entire function is just a value/object (can be wrapped in parens)
// ) /* D. add invocation (); --> */ (/*E.2 parameter input needed here */"Coursera!");
// // B. Parentheses added

// // C.2 a();


// //Expression - Produces a Value --> produces fxn obj that gets invoked (parameters can be added)
// //Rewritten below w/o comments:
// (function (name) {
//     console.log("Hello " + name);
// })("Coursera!");

// If using window object, then window.nameOfFxn=nameOfFxn








































// //Closures Part 2

// function makeMultiplier (multiplier) {
//     function name(params) {
        
//     }
//     return (
//         function (x) {
//             return multiplier * x;
//         }
//     );
// };

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(10)); // gets own execution env. + because memory is saved to return and is able to be called although the function has already been closed

// //End of makeMultiplier

// function makeDivider (divider) {
//     return (
//         function (y) {
//             return y / divider;
//         }
//     );
// };

// var divide2 = makeDivider(2);
// console.log(divide2(50));


    //Closures

    // function makeMultiplier (multiplier) {
    //     // SAME AS --> var multiplier = 2;
    //     return (
    //         function (x) {
    //             return multiplier * x;
    //         }
    //     )
    // }

    // var doubleAll = makeMultiplier(2);
    // console.log(doubleAll(10));