function toggleMenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open");
	icon.classList.toggle("open");
}

let projectsShown = 6;

const showMoreBtn = document.getElementById("show-more-btn");
const hiddenProjects = document.querySelectorAll(".color-container");

showMoreBtn.addEventListener("click", () => {
	let limit = projectsShown;
	if (projectsShown < hiddenProjects.length) {
		limit = projectsShown + 3;
	}
	for (let i = 0; i < hiddenProjects.length; i++) {
		if (i < limit) {
			hiddenProjects[i].classList.remove("hidden");
		} else {
			hiddenProjects[i].classList.add("hidden");
		}
	}
	projectsShown = limit;

	if (projectsShown >= hiddenProjects.length) {
		showMoreBtn.style.display = "none";
	}
});

const upbtn = document.getElementById("up-button");
upbtn.addEventListener("click", () => {
	window.scrollTo(0, 0);
	if (projectsShown >= 6) {
		for (i = hiddenProjects.length - 1; i >= 6; i--) {
			hiddenProjects[i].classList.add("hidden");
		}
		showMoreBtn.style.display = "block";
	}
});
