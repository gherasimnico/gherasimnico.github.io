window.onerror = function (message, source, lineno, colno, error) {
  alert(
    `Error: ${message}\nSource: ${source}\nLine: ${lineno}\nColumn: ${colno}\nError object: ${JSON.stringify(
      error
    )}`
  );
  return false; // Returning false will suppress the default browser error message
};

var activePage = "home";

var dark = localStorage.getItem("dark-mode");
if (dark === "true") {
  document.body.classList.add("dark-mode");
}

if (typeof URLSearchParams === "undefined") {
  var script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/url-search-params-polyfill@8.2.5/index.min.js";
  script.async = false;
  document.head.appendChild(script);
}
if (typeof fetch === "undefined") {
  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/fetch-polyfill@0.8.2/fetch.min.js";
  script.async = false;
  document.head.appendChild(script);
}

function $(selector, parent) {
  return (parent || document).querySelector(selector);
}

function hide(id) {
  $("#" + id).style.display = "none";
}

function show(id) {
  $(`#${id}`).style.display = "block";
}

function showPage(id) {
  hide(activePage);
  $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  show(id);
  $(`#top-menu-bar a[data-page="${id}"]`).classList.add("active");
  activePage = id;
}

function initEvents() {
  $("#top-menu-bar").addEventListener("click", (e) => {
    const id = e.target.dataset.page;
    console.info("click on menu bar", id);
    if (id) {
      showPage(id);
    }
  });
}

function loadSkills() {
  fetch("skills.json")
    .then((response) => response.json())
    .then((skills) => {
      printSkills(skills);
    });
}

function printSkills(skills) {
  skills = sortSkillsByEndorcements(skills);
  const skillsMapResult = skills.map((skill) => {
    const cls = skill.favourite ? "favourite" : "";
    return `<li class="${cls}">${skill.name} <span>- ${skill.endorcements}</span></li>`;
  });
  $("#skills ul").innerHTML = skillsMapResult.join("");
}

function sortSkillsByEndorcements(skills) {
  return skills.sort((a, b) => b.endorcements - a.endorcements);
}

function sortSkillsByName(skills) {
  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

function initMenu() {
  $("#toggle-dark-mode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "dark-mode",
      document.body.classList.contains("dark-mode")
    );
  });
}

console.info(typeof []);
console.info(typeof {});
console.info(typeof document.getElementsByTagName("body")[0]);

showPage(activePage);
initEvents();
loadSkills();
