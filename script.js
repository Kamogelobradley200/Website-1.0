// Reasons I Love You
const reasons = [
    "You make me laugh every day.",
    "Your smile lights up my world.",
    "You’re my best friend and my soulmate.",
    "You always know how to make me feel loved.",
    "You inspire me to be a better person.",
    "Your kindness is unmatched.",
    "I love the way you look at me.",
    "You’re my favorite person to spend time with.",
  ];

  function uploadPhoto() {
    const input = document.getElementById('upload');
    const files = input.files;
    const photoGrid = document.getElementById('photo-grid');
  
    for (let file of files) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement('img');
        img.src = e.target.result;
        photoGrid.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  }
  
  function revealReason() {
    const reasonText = document.getElementById('reason-text');
    reasonText.style.opacity = 0; // Fade out before revealing new reason
    setTimeout(() => {
      const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
      reasonText.textContent = randomReason;
      reasonText.style.opacity = 1; // Fade in new reason
    }, 300);
  }

  // Password Protection
const correctPassword = "Keitumetse"; // Change this to your secret password

function checkPassword() {
    const enteredPassword = document.getElementById("password-input").value;
    const passwordScreen = document.getElementById("password-screen");
    const mainContent = document.getElementById("main-content");
    const errorMessage = document.getElementById("error-message");

    if (enteredPassword === correctPassword) {
        passwordScreen.style.display = "none";
        mainContent.style.display = "block";
    } else {
        errorMessage.style.display = "block";
    }
}
