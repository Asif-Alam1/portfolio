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

const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const experience = document.getElementById("experience");
const Logo = document.getElementById("logo");

const aboutLink = document.getElementById("about-link");
const projectsLink = document.getElementById("projects-link");
const contactLink = document.getElementById("contact-link");
const experienceLink = document.getElementById("experience-link");

window.addEventListener("scroll", () => {
	if (window.scrollY < about.offsetTop) {
		Logo.classList.add("active");
		aboutLink.classList.remove("active");
		experienceLink.classList.remove("active");
		projectsLink.classList.remove("active");
		contactLink.classList.remove("active");
	} else if (
		window.scrollY >= about.offsetTop &&
		window.scrollY < experience.offsetTop
	) {
		aboutLink.classList.add("active");
		Logo.classList.remove("active");
		experienceLink.classList.remove("active");
		projectsLink.classList.remove("active");
		contactLink.classList.remove("active");
	} else if (
		window.scrollY >= experience.offsetTop &&
		window.scrollY < projects.offsetTop
	) {
		aboutLink.classList.remove("active");
		experienceLink.classList.add("active");
		Logo.classList.remove("active");
		projectsLink.classList.remove("active");
		contactLink.classList.remove("active");
	} else if (
		window.scrollY >= projects.offsetTop &&
		window.scrollY < contact.offsetTop - 400
	) {
		console.log(projects.offsetTop);
		console.log(window.scrollY);
		console.log(contact.offsetTop);
		experienceLink.classList.remove("active");
		aboutLink.classList.remove("active");
		projectsLink.classList.add("active");
		Logo.classList.remove("active");
		contactLink.classList.remove("active");
	} else {
		aboutLink.classList.remove("active");
		projectsLink.classList.remove("active");
		experienceLink.classList.remove("active");
		Logo.classList.remove("active");
		contactLink.classList.add("active");
	}
});
