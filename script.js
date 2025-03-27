document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("tugglebutton");
    const imageContainer = document.getElementById("image");
  
    button.addEventListener("click", () => {
      imageContainer.style.display =
        imageContainer.style.display === "none" ? "block" : "none";
    });
  });