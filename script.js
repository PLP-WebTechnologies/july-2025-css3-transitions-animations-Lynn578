// Part 2: Functions with scope, parameters & return values

// Global variable
let animationActive = false;

// Function with parameters & return value
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// Local scope function to log state
function logAnimationState(isActive) {
  let message = isActive ? "Animation started!" : "Animation stopped!";
  console.log(message);
}

// Reusable DOM selector function
function $(id) {
  return document.getElementById(id);
}

// Part 3: Combine JS with CSS animations
document.addEventListener("DOMContentLoaded", () => {
  const box = $("box");
  const animateBtn = $("animateBoxBtn");
  const modal = $("modal");
  const openModalBtn = $("openModalBtn");
  const closeModalBtn = $("closeModalBtn");

  // Animate box on button click
  animateBtn.addEventListener("click", () => {
    animationActive = toggleAnimation(box, "animate");
    logAnimationState(animationActive);
  });

  // Open modal
  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
});
