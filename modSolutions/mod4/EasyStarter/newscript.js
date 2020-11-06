sayHello();
sayBye();
























































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