// dark-mode.js


const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const a = document.querySelectorAll('.card a');

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶")) {
        main.style.background = "#7a7a7a";
        main.style.color = "#f5f4f4";
        menuButton.style.background = "#f5f4f42";
        menuButton.style.color = "#7a7a7a";

        modeButton.textContent = "☀";
        a.forEach(link => {
            link.style.color = "#F2F5FA";
        });
    } else {
        main.style.background = "#F2F5FA";
        main.style.color = "#222E42";
        modeButton.textContent = "🕶";
        menuButton.style.color = "#222E42";
        menuButton.style.background = "#F2F5FA";
        a.forEach(link => {
            link.style.color = "#222E42";
        });
    }
});