const checkBox = document.querySelector(".form-check-input")
const temp = document.querySelector(".container p:last-child") //should I add an ID to the <p> element targeted here instead of using last child here?

checkBox.addEventListener("change", (e) => 
    {
    if (checkBox.checked) {
        tempString = temp.innerHTML;
        tempValueC = Number(tempString.slice(13, 17))
        tempValueF = tempValueC * 1.8 + 32 //should we round to 1 decimal place?
        temp.innerHTML = `Temperature: ${tempValueF} °F`
    } else {
        temp.innerHTML = `Temperature: ${tempValueC} °C`
    }
})