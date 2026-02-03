const userInput = document.getElementById("convertisseur")
const versFar = document.getElementById("versFar")
const versCels = document.getElementById("versCels")
const versKm = document.getElementById("versKm")
const versMil = document.getElementById("versMiles")
const resultat = document.getElementById("resultat")

function versCelsius(valueToConvert){
    valueToConvert = userInput.value
    const celsius = ((valueToConvert - 32) * 5/9).toFixed(2)
    resultat.textContent = `${celsius} dégrés celsius`
}

function versFahrenheit(valueToConvert){
    valueToConvert = userInput.value
    const fara = ((valueToConvert *9/5) + 32).toFixed(2)
     resultat.textContent = `${fara}  fahrenheit`
}
function versKilometre(valueToConvert){
    valueToConvert = userInput.value
    const kilo = (valueToConvert * 1.60934).toFixed(2)
     resultat.textContent = `${kilo} kilomètres`
}

function versMiles(valueToConvert){
    valueToConvert = userInput.value
     const miles = (valueToConvert * .621371).toFixed(2)
      resultat.textContent = `${miles} miles`
}

versCels.addEventListener("click", versCelsius)
versFar.addEventListener("click", versFahrenheit)
versKm.addEventListener("click", versKilometre)
versMil.addEventListener("click", versMiles)
