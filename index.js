const about = document.getElementById("About-me");
const projects = document.getElementById("Projects");
const skills = document.getElementById("Skills");
const contact = document.getElementById("Contact-me");

about.addEventListener("click", function () {
  document.getElementById("Projects").style.display = "none";
});
