// CARROUSEL
const elementsOpacityGraduation = document.getElementById("homeCarouselLogoCta");

window.addEventListener("scroll", () => {
	let scrollToOpacity = 1 - window.scrollY / 1000;
	let scrollToPosition = -window.scrollY / 6;

	elementsOpacityGraduation.style.opacity = `${scrollToOpacity}`;
	elementsOpacityGraduation.style.transform = `translate(-50%, ${scrollToPosition}px)`;
});

// HEADER

const headerDOM = document.getElementById("headerHomePage");
const headerHamburger = document.getElementById("headerHamburger");
const responsiveHeaderDom = document.getElementById("responsiveHeaderDom");
let headerResponsiveActivation = false;

window.addEventListener("scroll", (e) => {
	e.preventDefault();

	const headerDOM = document.getElementById("headerHomePage");
	if (window.scrollY >= window.innerHeight - 30) {
		headerDOM.classList.remove("header-transparent");
		headerDOM.classList.add("header-color-primary");
	} else if (window.scrollY < window.innerHeight - 30) {
		headerDOM.classList.remove("header-color-primary");
		headerDOM.classList.add("header-transparent");
	}
});

window.addEventListener("load", () => {
	if (window.scrollY >= window.innerHeight - 30) {
		headerDOM.classList.remove("header-transparent");
		headerDOM.classList.add("header-color-primary");
	} else if (window.scrollY < window.innerHeight - 30) {
		headerDOM.classList.remove("header-color-primary");
		headerDOM.classList.add("header-transparent");
	}
});

window.addEventListener("scroll", () => {
	window.innerWidth < 1250 ? (headerHamburger.style.display = "block") : (headerHamburger.style.display = "block");
	window.scrollY >= window.innerHeight - 30 && window.innerWidth < 1250 ? (headerHamburger.style.display = "block") : (headerHamburger.style.display = "none");
	if (window.scrollY <= window.innerHeight - 30 && window.innerWidth < 1250) headerHamburger.style.display = "block";
});
window.addEventListener("load", () => {
	window.scrollY >= window.innerHeight - 30 && window.innerWidth < 1250 ? (headerHamburger.style.display = "block") : (headerHamburger.style.display = "none");
});
window.addEventListener("resize", () => {
	window.scrollY >= window.innerHeight - 30 && window.innerWidth < 1250 ? (headerHamburger.style.display = "block") : (headerHamburger.style.display = "none");
});

const headerResponsiveContent = `
<nav class="header-nav-responsive__container responsive-header-primary" id="headerResponsiveNav">
    <a class="header-nav-responsive__container--link" href="#homeCarouselFullPage">accueil</a>
    <a id="headerNavRAboutUs" class="header-nav-responsive__container--link" href="#homeAboutUs">qui sommes-nous?</a>
    <a id="headerNavLocalisation" class="header-nav-responsive__container--link" href="./pages/localisation.html">nos caves</a>
    <a id="headerNavActualities" class="header-nav-responsive__container--link" href="./pages/actualities.html">nos actualités</a>
    <a id="headerNavServices" class="header-nav-responsive__container--link" href="./pages/services.html">nos services</a>
    <a id="headerNavHumanResources" class="header-nav-responsive__container--link" href="./pages/human-resources.html">on recrute</a>
    <!-- <a id="headerNavBlog" class="header-nav-responsive__container--link" href="./pages/blog.html">blog</a> -->
</nav>
`;
let headerResponsiveNav = "";
headerHamburger.addEventListener("click", () => {
	if (headerResponsiveActivation == false) {
		headerResponsiveActivation = true;
		headerHamburger.innerHTML = `<img src="./public/assets/img/pictos/header/close-menu.png" alt="TODO">`;
		responsiveHeaderDom.innerHTML += headerResponsiveContent;

		headerResponsiveNav = document.getElementById("headerResponsiveNav");

		let navLink = document.querySelectorAll(".header-nav-responsive__container--link");
		if (headerResponsiveNav && window.scrollY >= window.innerHeight - 30) {
			headerResponsiveNav.style.backgroundColor = "#214b41";
			for (let i = 0; i < navLink.length; i++) {
				navLink[i].style.color = "white";
				navLink[i].style.fontWeight = "500";
			}
		} else if (headerResponsiveNav) {
			headerResponsiveNav.style.backgroundColor = "rgba(255,255,255,0.8";
			for (let i = 0; i < navLink.length; i++) {
				navLink[i].style.color = "#214b41";
				navLink[i].style.fontWeight = "700";
			}
		}

		window.addEventListener("scroll", () => {
			if (window.scrollY >= window.innerHeight - 30 && window.innerWidth < 1250) {
				headerResponsiveNav.style.display = "flex";
			}
		});
	} else {
		headerResponsiveActivation = false;
		responsiveHeaderDom.innerHTML = ``;
		headerHamburger.innerHTML = `<img src="./public/assets/img/pictos/header/open-menu.png" alt="TODO">`;
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth < 1250) {
		if (headerResponsiveNav) headerResponsiveNav.style.display = "flex";
	} else {
		if (headerResponsiveNav) headerResponsiveNav.style.display = "none";
	}
});

window.addEventListener("scroll", () => {
	let navLink = document.querySelectorAll(".header-nav-responsive__container--link");
	if (headerResponsiveNav && window.scrollY >= window.innerHeight - 30) {
		headerResponsiveNav.style.backgroundColor = "#214b41";
		for (let i = 0; i < navLink.length; i++) {
			navLink[i].style.color = "white";
			navLink[i].style.fontWeight = "500";
		}
	} else if (headerResponsiveNav) {
		headerResponsiveNav.style.backgroundColor = "rgba(255,255,255,0.8";
		for (let i = 0; i < navLink.length; i++) {
			navLink[i].style.color = "#214b41";
			navLink[i].style.fontWeight = "700";
		}
	}
});
