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
/*STEP4 - move function and make sayHello a property of greeter*/
greeter.sayHello function () {
    console.log("Hello " + greeter.name); /*STEP5 add greeter here too before name*/
}