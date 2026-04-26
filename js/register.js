const form = document.querySelector("form");
const outputNavn = document.querySelector("#navn_output");
const outputAlder = document.querySelector("#alder_output");
const outputEmail = document.querySelector("#email_output");
const outputLand = document.querySelector("#land_output");
const outputTelefon = document.querySelector("#telefon_output");
const outputDelt = document.querySelector("#delt_output");
const outputTerms = document.querySelector("#terms_output");

function handleSubmit(event) {
  event.preventDefault();
  // 1. saml formularens værdier i FormData
  const formData = new FormData(form);
  formData.getAll("delt");

  // 2. vis værdierne i de rigtige output-felter
  outputNavn.textContent = formData.get("navn");
  outputAlder.textContent = formData.get("alder");
  outputEmail.textContent = formData.get("email");
  outputLand.textContent = formData.get("land");
  outputTelefon.textContent = formData.get("telefon");
  outputDelt.textContent = formData.getAll("delt").join(", ");
  outputTerms.textContent = formData.get("terms");
  form.reset();
}

form.addEventListener("submit", handleSubmit);
