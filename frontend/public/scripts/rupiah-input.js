const rupiahInputElement = document.querySelector("#rentPerDay");


const validateStringNum = (str) => {
    if (typeof str != "string") return false  
    return !isNaN(str) && 
        !isNaN(parseFloat(str)) 
}

let prevValue = ""
rupiahInputElement.addEventListener("change", () => {
    const inputVal = rupiahInputElement.value;
    if (inputVal == "") return
    if (validateStringNum(inputVal)) {
        prevValue = inputVal
        return
    } else {
        rupiahInputElement.value = prevValue;
    }
})