{
const toggleUltimateImage = () => {
    const imgUltimateElement = document.querySelector(".js-imgUltimateTeam");
    const imgUltimatePlElement = document.querySelector(".js-imgUltimateTeamPL");
    const teamNameElement = document.querySelector(".js-teamName");

    imgUltimateElement.classList.toggle("section__image--hidden");
    imgUltimatePlElement.classList.toggle("section__image--hidden");
    teamNameElement.innerText = imgUltimateElement.classList.contains("section__image--hidden") ? "Amerykańską" : "Polską" ;
};

const init = () => {
    const buttonElement = document.querySelector(".js-buttonChangeTeam");
    buttonElement.addEventListener("click", toggleUltimateImage);
};

init();

}