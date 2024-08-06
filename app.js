document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalBtn = document.querySelector(".modal-btn");
    const closeBtn = document.querySelector(".close-btn");
    const startBtn = document.querySelector(".start-btn");
  
    // Open Modal
    modalBtn.addEventListener("click", function () {
      modalOverlay.style.display = "flex";
    });
  
    // Close Modal
    closeBtn.addEventListener("click", function () {
      modalOverlay.style.display = "none";
    });
  
    // Close modal when clicking on the overlay
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
      }
    });
  
    // Start workout button handler
    startBtn.addEventListener("click", function () {
      alert("Workout Started! Let's get moving!");
      modalOverlay.style.display = "none";
    });
  });
  