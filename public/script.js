const checkBox = document.querySelector(".form-check-input");
const temp = document.querySelectorAll(".temperature"); //should I add an ID to the <p> element targeted here instead of using last child here?

checkBox.addEventListener("change", () => {
  for (let i = 0; i < temp.length; i++) {
    if (checkBox.checked) {
      tempString = temp[i].innerHTML;
      tempValueC = parseFloat(tempString);
      tempValueF = tempValueC * 1.8 + 32;
      temp[i].innerHTML = `${tempValueF.toFixed()}°F`;
    } else {
      tempString = temp[i].innerHTML;
      tempValueF = parseFloat(tempString);
      tempValueC = (tempValueF - 32) * (5 / 9);
      temp[i].innerHTML = `${tempValueC.toFixed()}°C`;
    }
  }
});
