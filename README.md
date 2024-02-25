# Ultimate Frisbee

Hi! <br>
Welcome to my first ever created website.

## Demo

[Link to my demo page about Ultimate Frisbee](https://liver-22.github.io/ultimate-frisbee/)

### Description

There is a describe of my passion, which is sport called Ultimate Frisbee. There were used 3 languages to write the page:

- HTML - markup language,
- CSS - style sheet language,
- JavaScript - programming language.

### Responsiveness

My webpage is created to automatically resize and looks good on all devices (desktops, tablets, and phones).

### Sections

The site is divided into 4 sections:

1. About ultimate frisbee
2. History of the sport
3. Presentation of the rules in 10 steps
4. Ultimate frisbee in Europe

Each of them contains a more detailed description and several photos showing the sport in reality.

### Navigation

There is a navigation bar at the top of the page, which allows you to navigate to any selected section from the mentioned above.

### Style BEM

I have used Block Element Modifier methodology in my code, that helps you to achieve reusable components, making it easy to find any elements in the code.

### JavaScript

There is one button on the page located in the sports history section.
Using JavaScript, the button causes the national team's photo to change.
Below I show a short code snippet:

```javascript
let buttonElement = document.querySelector(".js-buttonChangeTeam");
let imgUltimateElement = document.querySelector(".js-imgUltimateTeam");
let imgUltimatePlElement = document.querySelector(".js-imgUltimateTeamPL");
let teamNameElement = document.querySelector(".js-teamName");

buttonElement.addEventListener("click", () => {
  imgUltimateElement.classList.toggle("section__image--hidden");
  imgUltimatePlElement.classList.toggle("section__image--hidden");
  teamNameElement.innerText = imgUltimateElement.classList.contains(
    "section__image--hidden"
  )
    ? "Amerykańską"
    : "Polską";
});
```
