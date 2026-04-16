document.querySelector("#world").addEventListener("click", world);
function world() {
  console.log("world");
  document.querySelector(".info-text > h2").textContent = "DIN SIKKERHED";
  document.querySelector(".placeholder").textContent =
    " Cyperangrebene har spredt sig på verdensplan. Vi får dagligt nye opdateringer rundt i verden omhandlende mystiske opdateringer og deling af privat indhold. Dette site er til dig, for at undgå selv at blive udsat for cyperangreb så godt som muligt.";
  document.querySelector("#efficiency").textContent = "Hvad kan du gøre?";
  document.querySelector("#requirement").textContent = "Step-by-step:";
}
document.querySelector("#dots").addEventListener("click", dots);
function dots() {
  console.log("dots");
  document.querySelector(".info-text > h2").textContent = "MISTANKE OM CYPERANGREB";
  document.querySelector(".placeholder").textContent = "Disse områder er blevet lokalt anmeldt med mistanke om mulige cyperangreb indenfor de sidste 24 timer.";
  document.querySelector("#efficiency").textContent = "Bor du ved en af disse områder?";
  document.querySelector("#requirement").textContent = "Cyperangreb og deres formål";
}
document.querySelector("#cyper").addEventListener("click", cyper);
function cyper() {
  console.log("cyper");
  document.querySelector(".info-text > h2").textContent = "CYPERANGREB";
  document.querySelector(".placeholder").textContent = "Flere fuldente cyperangrebene har allerede fundet sted. Cyperangrebe forventes snart at slå til i Danmark. Læs mere nedenfor om din egen sikkerhed:";
  document.querySelector("#efficiency").textContent = "Hvad er et cyperangreb?";
  document.querySelector("#requirement").textContent = "Slet privat indhold";
}

document.querySelector("#points").addEventListener("click", points);
function points() {
  console.log("point");
  document.querySelector(".info-text > h2").textContent = "CYPERAKTIVISME";
  document.querySelector(".placeholder").textContent = "Cyperangrebene er blevet sporet fra disse områder.";
  document.querySelector("#efficiency").textContent = "Hvem står bag cyperangrebene?";
  document.querySelector("#requirement").textContent = "bla";
}
document.querySelector(".eff_p").addEventListener("click", eff_p);
function eff_p() {
  console.log("eff_p");
  document.querySelector(".eff_p").textContent = "For at holde dig så sikker som muligt for eventuelle cyperangreb, anbefaler vi ALLE, at slette privat indhold, du ikke ønsker at dele. Dette involverer både videoer, billeder, sms´er ovs.";
}
document.querySelector(".req_p").addEventListener("click", req_p);
function req_p() {
  console.log("req _p");
  document.querySelector(".req_p").textContent = "For at holde dig så sikker som muligt for eventuelle cyperangreb, anbefaler vi ALLE, at slette privat indhold, du ikke ønsker at dele. Dette involverer både videoer, billeder, sms´er ovs.";
}
