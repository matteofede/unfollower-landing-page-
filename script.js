document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".cta-btn, .header-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      console.log("CTA clicked");
    });
  });
});
