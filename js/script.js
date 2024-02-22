let buttonElement = document.querySelector(".js-section__buttonChangeTeam");
let imgUltimateElement = document.querySelector(".js-section__imgUltimateTeam");
let imgUltimatePlElement = document.querySelector(".js-section__imgUltimateTeamPL");
let teamNameElement = document.querySelector(".js-section__teamName");

buttonElement.addEventListener("click", () => {
    imgUltimateElement.classList.toggle("section__image--hidden");
    imgUltimatePlElement.classList.toggle("section__image--hidden");
    teamNameElement.innerText = imgUltimateElement.classList.contains("section__image--hidden") ? "Amerykańską" : "Polską" ;
});