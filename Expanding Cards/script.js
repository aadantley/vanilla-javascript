const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  console.log(panel);
  panel.addEventListener("click", () => {
    console.log("panel clicked");
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

var w = window.innerWidth;
var h = window.innerHeight;

console.log(w, h);
