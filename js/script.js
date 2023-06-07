window.onload = function () {
    vowelAr = ["a", "e", "o", "u", "i"]
    let form = document.querySelector("form");
    let div = document.getElementById("output");
    form.addEventListener("submit", submitFunction);


    function submitFunction(event) {
        event.preventDefault();
        let inputText = document.getElementById("textinput").value;
        let savedText = inputText;

        for (index = 0; index < 6; index++) {
            savedText = savedText.replaceAll(vowelAr[index],'-');
            div.innerHTML = savedText;
        }
    }


}

