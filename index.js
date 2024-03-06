function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  hide("skills");
  hide("projects");
  hide("languages");
  show("home");
}

function showSkillsPage() {
  hide("home");
  hide("projects");
  hide("languages");
  show("skills");
}
function showProjectsPage() {
  hide("home").style.display = "none";
  hide("languages").style.display = "none";
  hide("skills").style.display = "none";
  show("projects");
}
function showLanguagesPage() {
  hide("home").style.display = "none";
  hide("projects").style.display = "none";
  hide("skills").style.display = "none";
  show("languages");
}

showHomePage();

var homeLink = document.querySelectorAll("#top-menu-bar a")[0];
homeLink.addEventListener("click", showHomePage);

var skillsLink = document.querySelectorAll("#top-menu-bar a")[1];
skillsLink.addEventListener("click", showSkillsPage);

var projectsLink = document.querySelectorAll("#top-menu-bar a")[2];
projectsLink.addEventListener("click", showProjectsPage);

var languagesLink = document.querySelectorAll("#top-menu-bar a")[3];
languagesLink.addEventListener("click", showLanguagesPage);
