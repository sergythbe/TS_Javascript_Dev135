const valeurs = document.getElementById("valeurs")
const soumettre = document.getElementById("btn")
const resultat = document.getElementById("resultat")

soumettre.addEventListener("click", () => {
  
    const valeursLus = valeurs.value;
    const total = valeursLus.split(",").reduce(
        (accumulator, currentValue) => accumulator + +currentValue,
       0
    );
    moyenne = total/valeursLus.length
    console.log(total, moyenne)
})
