document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }
  );

  revealElements.forEach((element) => observer.observe(element));

  const welcomeText = document.querySelector(".welcome-text");
  const typingText = document.querySelector(".typing-effect");
  const selectOption = document.querySelector(".select-option");
  
  typingText && typingText.addEventListener("animationend", () => {
      welcomeText.classList.add("hidden");
      welcomeText.classList.add("transition-effect");
      // clickPopUp.classList.add("hidden");
      setTimeout(() => {
        selectOption.style.display = "flex";
      }, 2000);
    });

  const menuIconClick = document.querySelector(".nav-icon");
  const crossIcon = document.querySelector(".cross-icon");
  const navPanel = document.querySelector(".nav-panel");    
  menuIconClick.addEventListener('click', ()=>{
    navPanel.style.display="flex";
    crossIcon.style.display="flex";
  });     
});
