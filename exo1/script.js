const nom = document.getElementById("nom")
const prenom = document.getElementById("prenom")
const dateNaissance = document.getElementById("dateNaiss")
const submit = document.getElementById("enregistrer")
const info = document.getElementById("info")

submit.addEventListener("click", () => {
   info.textContent = `Je m'appelle ${nom.value} ${prenom.value} et je suis né le ${dateNaiss.value}` 
})