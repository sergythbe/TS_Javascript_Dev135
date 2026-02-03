const multiplicande = document.getElementById("multiplicande")
const btn = document.getElementById("btn")
const resultat = document.getElementById("resultat");

btn.addEventListener("click", () => {
    const nbMultiplier = multiplicande.value;
    for (let i =1; i < 21; i++) {
        const li = document.createElement("li")
        li.textContent = `${nbMultiplier} * ${i} = ${nbMultiplier * i} `
        resultat.append(li);    
    }
})