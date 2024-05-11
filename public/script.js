const checkBox = document.querySelector(".form-check-input");
const temp = document.querySelector("#temperature"); //should I add an ID to the <p> element targeted here instead of using last child here?

checkBox.addEventListener("change", (e) => {
  if (checkBox.checked) {
    tempString = temp.innerHTML;
    tempValueC = parseFloat(tempString);
    tempValueF = tempValueC * 1.8 + 32;
    temp.innerHTML = `${tempValueF.toFixed(1)} °F`;
  } else {
    tempString = temp.innerHTML;
    tempValueF = parseFloat(tempString);
    tempValueC = (tempValueF - 32) * (5 / 9);
    temp.innerHTML = `${tempValueC.toFixed(1)} °C`;
  }
});
