(function (window) {
    var salutation = {};
    salutation.name = ["Bobby", "Sheryl", "George"];
    // STEP9B same for this script
    var greeting = "Bye "

    salutation.sayBye = function () {
        console.log(greeting + salutation.name);
    }

    window.salutation = salutation;
})(window);




// STEP6 Converted to Namespace

// STEP7A Fixed issue where "=" not placed before function