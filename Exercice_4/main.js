let bouton = document.querySelector("button");
let inputs = document.querySelectorAll("input");

bouton.addEventListener("click", function () {
    inputs.forEach(function (input) {
        input.value = "";
    });
});