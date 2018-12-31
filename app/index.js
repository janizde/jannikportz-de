/**
 * Application entry point
 */

// Load application styles
import "styles/index.scss";

// Toggle Vita
window.addEventListener("load", () => {
  const elem = document.getElementById("vita-past");
  const button = document.getElementById("vita-button-more");

  button.addEventListener("click", () => {
    elem.classList.toggle("hidden");
    button.classList.toggle("expanded");
  });
});
