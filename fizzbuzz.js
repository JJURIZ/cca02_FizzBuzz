"strict mode"
let fizzBuzzButton = document.getElementById("fizzbuzz_button"),
    displayResults = document.getElementById("display_results"),
    clearFizzBuzz = document.getElementById("clear_fizzbuzz");

let fizzBuzz = function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            displayResults.innerHTML += "FizzBuzz" + "<br>";
        } else if (i % 3 == 0) {
            displayResults.innerHTML += "Fizz" + "<br>";
        } else if (i % 5 == 0) {
            displayResults.innerHTML += "Buzz" + "<br>";
        } else displayResults.innerHTML += i + "<br>";
    }
};

fizzBuzzButton.addEventListener("click", function () {
    fizzBuzz();
});

clearFizzBuzz.addEventListener("click", function(){
    displayResults.innerHTML = " ";
})

//Left out the first bracket after the for parameter. This caused it to fail.
//However the curly braces can be removed and it works. 