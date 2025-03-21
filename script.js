document.getElementById("toggleProjects").addEventListener("click", function () {
    let projects = document.getElementById("projectsContainer");
    if (projects.style.display === "none" || projects.style.display === "") {
        projects.style.display = "block";
        this.innerText = "Hide Projects";
    } else {
        projects.style.display = "none";
        this.innerText = "Show Projects";
    }
});
