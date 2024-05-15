const checkBox = document.querySelector(".form-check-input");
const temp = document.querySelector("#temperature");
const tonightTemp = document.querySelector("#tonightTemp");
const tomorrowTemp = document.querySelector("#tomorrowTemp");
const overmorrowTemp = document.querySelector("#overmorrowTemp");
const fourthmorrowTemp = document.querySelector("#fourthmorrowTemp");

function unitConvertF(tempvalues) {
  tempvalues.forEach((element, index) =>{
    tempvalues[index] = (element * 1.8 + 32).toFixed(0);
  });
  return tempvalues;
}

function unitConvertC(tempvalues) {
  tempvalues.forEach((element, index) => {
    tempvalues[index] = ((element - 32) * (5 / 9)).toFixed(0);
  });
  return tempvalues;
}

function convertF(documentString) {
  stringValues = documentString.innerHTML.match(/[0-9]+/g);
  highC = stringValues[0];
  exceptC = stringValues[1];
  fahrenheit = unitConvertF(stringValues);
  highF = fahrenheit[0];
  exceptF = fahrenheit[1];
  dayString = documentString.innerHTML;
  documentString.innerHTML = dayString.replace(highC, highF);
  documentString.innerHTML = documentString.innerHTML.replace(exceptC, exceptF);
  return documentString.innerHTML
}

function convertC(documentString) {
  stringValues = documentString.innerHTML.match(/[0-9]+/g);
  highC = stringValues[0];
  exceptC = stringValues[1];
  fahrenheit = unitConvertC(stringValues);
  highF = fahrenheit[0];
  exceptF = fahrenheit[1];
  dayString = documentString.innerHTML;
  documentString.innerHTML = dayString.replace(highC, highF);
  documentString.innerHTML = documentString.innerHTML.replace(exceptC, exceptF);
  return documentString.innerHTML
}

checkBox.addEventListener("change", (e) => {
  if (checkBox.checked) {
    tempString = temp.innerHTML;
    tempValueC = parseFloat(tempString);
    tempValueF = tempValueC * 1.8 + 32;
    temp.innerHTML = `${tempValueF.toFixed(1)} °F`;
    convertF(tonightTemp);
    convertF(tomorrowTemp);
    convertF(overmorrowTemp);
    convertF(fourthmorrowTemp);
  } else {
    tempString = temp.innerHTML;
    tempValueF = parseFloat(tempString);
    tempValueC = (tempValueF - 32) * (5 / 9);
    temp.innerHTML = `${tempValueC.toFixed(1)} °C`;
    convertC(tonightTemp);
    convertC(tomorrowTemp);
    convertC(overmorrowTemp);
    convertC(fourthmorrowTemp);
  }
});

