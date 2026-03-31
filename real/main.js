const idmeny = document.getElementById("idmeny");
const meny = document.querySelector(".meny");

idmeny.addEventListener("click", () => {
    meny.classList.toggle("aktiv");
});