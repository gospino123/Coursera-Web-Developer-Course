// // STEP10 - use newscript IIFE skill
// (function (window){window.nameOfFxn=nameOfFxn;})(window); //newscript not working because not global
// // STEP11 - expose to window object -> input window
// // STEP12 - window.nameOfFxn=nameOfFxn -> exposed "greeter" to outside by placing it IN the window object 

//Begin testing Area!!!!!!!!!!!!!!!!!
(function (window) {
    var greeter = {}; // STEP2 (STEP1 is Create var greeter = {};)

    /*STEP 3 var - replaced w/ greeter*/ 
    greeter.name = [
        "Will",
        "Pablo",
        "Jose",
        "Josey",
        "Billy",
        "Rosi"
    ];
    var greeting = "Hello "; // STEP9 add greeting variable
    
    /*STEP4 - move function and make sayHello a property of greeter*/
    greeter.sayHello = function () {
        console.log(greeting
            /*STEP8 "Hello " replaced with variable greeting*/ 
            + greeter.name); /*STEP5 add greeter here too before name*/
    }
    window.greeter = greeter;
})(window);
// End testing Area!!!!!!!!!!!!



// // REMOVE COMMENT var greeter = {}; // STEP2 (STEP1 is Create var greeter = {};)

// /*STEP 3 var - replaced w/ greeter*/ 
// greeter.name = [
//     "Will",
//     "Pablo",
//     "Jose",
//     "Josey",
//     "Billy",
//     "Rosi"
// ];
// var greeting = "Hello "; // STEP9 add greeting variable

// /*STEP4 - move function and make sayHello a property of greeter*/
// greeter.sayHello = function () {
//     console.log(greeting
//         /*STEP8 "Hello " replaced with variable greeting*/ 
//         + greeter.name); /*STEP5 add greeter here too before name*/
// }

// // REMOVE COMMENT 