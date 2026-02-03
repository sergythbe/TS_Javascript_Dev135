const maListe = document.querySelector('#maListe');
const addElement = document.querySelector('#btn');
let itemInput = document.querySelector('#item');

addElement.addEventListener("click", () => {
    const isInputEmpty = itemInput.value.trim() === "";
    addElement.classList.toggle("disabled", isInputEmpty)
    addElement.disabled = isInputEmpty;
    let itemValue = itemInput.value
    let li = document.createElement("li")
    li.textContent = itemValue
    maListe.append(li)
    itemInput.value = " "
    console.log(itemValue)
})
