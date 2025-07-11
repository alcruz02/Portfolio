window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".intro").classList.add("animate");
});

function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
}

