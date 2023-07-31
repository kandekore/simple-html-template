// Script.js
function toggleMenu() {
  const sidebar = document.getElementById("mySidebar");
  const overlay = document.getElementById("myOverlay");
  const mainContent = document.getElementById("main-content");

  if (sidebar.style.display === "block") {
    sidebar.style.display = "none";
    overlay.style.display = "none";
  } else {
    sidebar.style.display = "block";
    overlay.style.display = "block";
  }
}

function w3_close() {
  const sidebar = document.getElementById("mySidebar");
  const overlay = document.getElementById("myOverlay");

  sidebar.style.display = "none";
  overlay.style.display = "none";
}
