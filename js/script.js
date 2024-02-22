let buttonElement = document.querySelector(".js-buttonChangeTeam");
let imgUltimateElement = document.querySelector(".js-imgUltimateTeam");
let imgUltimatePlElement = document.querySelector(".js-imgUltimateTeamPL");
let teamNameElement = document.querySelector(".js-teamName");

buttonElement.addEventListener("click", () => {
    imgUltimateElement.classList.toggle("section__image--hidden");
    imgUltimatePlElement.classList.toggle("section__image--hidden");
    teamNameElement.innerText = imgUltimateElement.classList.contains("section__image--hidden") ? "Amerykańską" : "Polską" ;
});