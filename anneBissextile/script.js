const annee = document.getElementById("annee")
const resultat = document.getElementById("resultat")
const evalue = document.getElementById("evalue")




evalue.addEventListener("click", () => {
    const anneeEvalue = annee.value;

    ((anneeEvalue % 4 == 0 && anneeEvalue % 100 != 0) || anneeEvalue % 400 == 0 )?
    resultat.textContent = `L' année ${anneeEvalue} est bissextile` : resultat.textContent = `L' année ${anneeEvalue} n'est pas bissextile`

})