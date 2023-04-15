let screen = document.getElementById("screen");

let calculator = document.querySelectorAll(".button");

let storevalue = "";
screen.value = "";
for (let items of calculator) {
  items.addEventListener("click", calculatorfunction);

  function calculatorfunction(event) {
    let audio = new Audio("mixkit-quick-switch-click-2582.wav");

    audio.play();
    buttonText = event.target.innerText;

    //    storevalue+=buttonText
    //       screen.value+=buttonText
    if (buttonText == "x") {
      buttonText = "*";

      screen.value += buttonText;
      storevalue += buttonText;
    } else if (buttonText == "C") {
      screen.value = "";
      storevalue = "";
    } else if (buttonText == "Backspace") {
      //   console.log(String(' '))

      //   let a =Array.from(screen.value)
      //  screen.value=a.shift()
      screen.value = screen.value.slice(0, -1);
      storevalue = storevalue.slice(0, -1);
    } else {
      storevalue += buttonText;
      screen.value += buttonText;
    }
  }
}

let total = document.getElementById("Total");
total.addEventListener("click", function () {
    let audio = new Audio("mixkit-quick-switch-click-2582.wav");
  screen.value = `${eval(storevalue)}`;

  audio.play();
  for (let items of calculator) {
    items.addEventListener("click", function () {
      screen.value = storevalue;
    });
  }
});
