// CARROUSEL
const elementsOpacityGraduation = document.getElementById("homeCarouselLogoCta");

window.addEventListener("scroll", () => {
	let scrollToOpacity = 1 - window.scrollY / 1000;
	let scrollToPosition = -window.scrollY / 6;

	elementsOpacityGraduation.style.opacity = `${scrollToOpacity}`;
	elementsOpacityGraduation.style.transform = `translate(-50%, ${scrollToPosition}px)`;
});

// HEADER

const headerResponsiveContent = `
<nav class="header-nav-responsive__container responsive-header-transparent" id="headerResponsiveNav">
    <a class="header-nav-responsive__container--link" href="#homeCarouselFullPage">accueil</a>
    <a id="headerNavRAboutUs" class="header-nav-responsive__container--link" href="#homeAboutUs">qui sommes-nous?</a>
    <a id="headerNavLocalisation" class="header-nav-responsive__container--link" href="./pages/localisation.html">nos caves</a>
    <a id="headerNavActualities" class="header-nav-responsive__container--link" href="./pages/actualities.html">nos actualités</a>
    <a id="headerNavServices" class="header-nav-responsive__container--link" href="./pages/services.html">nos services</a>
    <a id="headerNavHumanResources" class="header-nav-responsive__container--link" href="./pages/human-resources.html">on recrute</a>
    <!-- <a id="headerNavBlog" class="header-nav-responsive__container--link" href="./pages/blog.html">blog</a> -->
</nav>
`;

const headerDOM = document.getElementById("headerHomePage");
const headerHamburger = document.getElementById("headerHamburger");
const responsiveHeaderDOM = document.getElementById("responsiveHeaderDom");

window.onload = headerHamburger.style.filter = "invert(25%) sepia(30%) saturate(686%) hue-rotate(115deg) brightness(87%) contrast(91%)";

window.addEventListener("scroll", (e) => {
	e.preventDefault();

	const headerDOM = document.getElementById("headerHomePage");
	if (window.scrollY >= window.innerHeight - 60) {
		headerDOM.classList.remove("header-transparent");
		headerDOM.classList.add("header-color-primary");
		headerHamburger.style.filter = "invert(100%) sepia(1%) saturate(2%) hue-rotate(62deg) brightness(106%) contrast(101%)";
	} else if (window.scrollY < window.innerHeight - 60) {
		headerDOM.classList.remove("header-color-primary");
		headerDOM.classList.add("header-transparent");
		headerHamburger.style.filter = "invert(25%) sepia(30%) saturate(686%) hue-rotate(115deg) brightness(87%) contrast(91%)";
	}
});

responsiveHeaderDom.innerHTML = `
<nav class="header-nav-responsive__container responsive-header-transparent" id="headerResponsiveNav">
	<a class="header-nav-responsive__container--link" href="#homeCarouselFullPage">accueil</a>
	<a id="headerNavRAboutUs" class="header-nav-responsive__container--link" href="#homeAboutUs">qui sommes-nous?</a>
	<a id="headerNavLocalisation" class="header-nav-responsive__container--link" href="./pages/localisation.html">nos caves</a>
	<a id="headerNavActualities" class="header-nav-responsive__container--link" href="./pages/actualities.html">nos actualités</a>
	<a id="headerNavServices" class="header-nav-responsive__container--link" href="./pages/services.html">nos services</a>
	<a id="headerNavHumanResources" class="header-nav-responsive__container--link" href="./pages/human-resources.html">on recrute</a>
	<!-- <a id="headerNavBlog" class="header-nav-responsive__container--link" href="./pages/blog.html">blog</a> -->
</nav>
`;

const headerResponsiveNav = document.getElementById("headerResponsiveNav");

headerHamburger.addEventListener("click", () => {
	if (responsiveHeaderDOM.style.display == "flex") {
		responsiveHeaderDOM.style.display = "none";
		headerHamburger.innerHTML = '<img src="./public/assets/img/pictos/header/open.svg" alt="TODO">';
	} else {
		responsiveHeaderDOM.style.display = "flex";
		headerHamburger.innerHTML = '<img src="./public/assets/img/pictos/header/close.svg" alt="TODO">';
	}
});
window.addEventListener("scroll", (e) => {
	e.preventDefault();

	if (window.scrollY >= window.innerHeight - 30) {
		headerResponsiveNav.classList.remove("responsive-header-transparent");
		headerResponsiveNav.classList.add("responsive-header-primary");
	} else if (window.scrollY < window.innerHeight - 30) {
		headerResponsiveNav.classList.remove("responsive-header-primary");
		headerResponsiveNav.classList.add("responsive-header-transparent");
	}
});
