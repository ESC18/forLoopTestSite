window.onload = function () {
    let vowelAr = ["a", "e", "i", "o", "u"];
    let form = document.querySelector("form");
    let div = document.getElementById("output");
    form.addEventListener("submit", submitFunction);
    let newText;
    
    function submitFunction(event) {
      event.preventDefault();  
      let inputText = document.getElementById("textinput").value;
        for (index = 0; index < 6; index++) {
          if (inputText[index] === "o") {
            console.log("vowel text")
          } else {
            console.log('no vowels')
          }
            div.innerHTML = inputText;
        }
    }
    
}

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}