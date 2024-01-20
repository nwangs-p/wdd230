const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

darkModeToggle.addEventListener("click", () => {
  if (main.classList.contains("dark-mode")) {
    main.classList.remove("dark-mode");
    modeButton.textContent = "🔆";
  } else {
    main.classList.add("dark-mode");
    modeButton.textContent = "🕶️";
  }
});