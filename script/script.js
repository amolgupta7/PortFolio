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
  const clickPopUp = document.querySelector(".click-pop-up");

  setTimeout(() => {
    clickPopUp.style.display="block";
    clickPopUp.style.opacity='1';
    clickPopUp.style.transform= "translateY(0)";
  }, 5000); // 5000 milliseconds = 5 seconds
  
  typingText && typingText.addEventListener("animationend", () => {
      welcomeText.classList.add("hidden");
      welcomeText.classList.add("transition-effect");
      // clickPopUp.classList.add("hidden");
      setTimeout(() => {
        selectOption.style.display = "flex";
      }, 2000);
    });
});
