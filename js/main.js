document.querySelector("#dots").addEventListener("click", dots);
function dots() {
  console.log("dots");
  document.querySelector(".info-text > h2").textContent = "MISTANKE OM CYPERANGREB";
  document.querySelector(".placeholder").textContent = "Disse områder er blevet lokalt anmeldt med mistanke om mulige cyperangreb indenfor de sidste 24 timer.";
  document.querySelector("#efficiency").textContent =
    "Hvis du bor ved en af disse områder, råder vi stærkt til, at handle hurtigt. Få fjernet al indhold fra din mobil, computer mm., som du ikke ønsker delt. Disse zoner er særligt præget af cyberangreb, og der er stor chance for, at du er den næste.";
  document.querySelector("#requirement").textContent =
    "Det er ikke til at vide, hvad hackerne bag cyberangrebet er ude på. Det har i disse områder været alt fra deling af private billeder, til adgang til konto og kortoplysninger. Deling af billeder og videoer har indtil videre intet økonomisk pres haft, kun ren ondskab";
}
document.querySelector("#cyper").addEventListener("click", cyper);
function cyper() {
  console.log("cyper");
  document.querySelector(".info-text > h2").textContent = "CYPERANGREB";
  document.querySelector(".placeholder").textContent = "Flere fuldente cyperangrebene har allerede fundet sted. Cyperangrebe forventes snart at slå til i Danmark. Læs mere nedenfor om din egen sikkerhed:";
  document.querySelector("#efficiency").textContent =
    "Et cyberangreb er en række ondsindede handlinger, hvor en eller flere hackere står bag. Hackerne får fat i folks private oplysninger, billeder, bankkontoer ovs., ofte med en økonomisk bagtanke bag. At folk enten vil betale dem penge for ikke at få delt billeder/videoer, eller direkte går ind og tager penge fra folks kontoer. ";
  document.querySelector("#requirement").textContent =
    "Det kan være svært at undgå et cyberangreb. Hackere udgiver sig nemlig for at være noget, de ikke er. De er kloge, og i dne moderniserede verden vi lever i, hvor alt stortset ligger online, er det nemt for hackerne at få hvad de vil have. I denne tid opfordrer vi til, at begrænse al privat indhold.  ";
}

document.querySelector("#points").addEventListener("click", points);
function points() {
  console.log("points");
  document.querySelector(".info-text > h2").textContent = "CYPERAKTIVISME";
  document.querySelector(".placeholder").textContent = "Cyperangrebene er blevet sporet fra disse områder.";
  document.querySelector("#efficiency").textContent =
    "Der er indtil videre kun sket få anholdelser af folkene bag cyberangrebene. Det er endnu ikke oplyst, om der er en sammenhæng mellem køn, alder, etnicitet eller lignende. Der er nemlig fundet flere cyberhackere, som er spredt over hele jordkloden, så noget tyder på, at der er en lille til ingen sammenhæng.";
  document.querySelector("#requirement").textContent =
    "Hvis du bor tæt ved en af disse områder, vil vi råde dig til at passe ekstra på, når du bevæger dig i offentligheden. Små ting som at være forsigtig når du betaler for dine varer eller din benzin, passe på hvad du viser folk af billeder og videoer og være opmærksom på, hvad du logger ind på, hvis du befinder dig selv et sted med overvågningskameraer.";
}
// const dotsCB = document.getElementById("dots");
// const cyperCB = document.getElementById("cyper");
// const pointsCB = document.getElementById("points");

// const dotsbox = document.getElementById("dotsbox");
// const cyperbox = document.getElementById("cyperbox");
// const pointsbox = document.getElementById("pointsbox");

// function showBox(activeBox) {
//   [cyperbox, dotsbox, pointsbox].forEach((box) => {
//     box.classList.add("hidden");
//   });
//   activeBox.classList.remove("hidden");
// }
// dotsCB.addEventListener("click", () => showBox(dotsbox));
// cyperCB.addEventListener("click", () => showBox(cyperbox));
// pointsCB.addEventListener("click", () => showBox(pointsbox));

// document.querySelectorAll(".toggle").forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     const content = toggle.nextElementSibling;
//     content.classList.toggle("open");
//   });
// });

// const popover = document.getElementById("popup");
// const overlay = document.getElementById("overlay");

// popover.addEventListener("toggle", () => {
//   overlay.classList.toggle("active");
// });

// const html = document.querySelector("html");
// const btn = document.querySelector("#toggle-btn");

// html.classList.toggle("dark)");
