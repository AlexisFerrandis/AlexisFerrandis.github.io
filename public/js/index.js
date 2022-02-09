// carousel
let myIndex = 0;

(function carousel() {
	let i;
	let x = document.getElementsByClassName("full-screen");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1;
	}
	x[myIndex - 1].style.display = "block";
	setTimeout(carousel, 5000);
})();

// logo opacity
const elementsOpacityGraduation = document.getElementById("homeLogo");

window.addEventListener("scroll", () => {
	let scrollToOpacity = 1 - window.scrollY / 1000;
	let scrollToPosition = -window.scrollY / 6;

	elementsOpacityGraduation.style.opacity = `${scrollToOpacity}`;
	elementsOpacityGraduation.style.transform = `translate(-50%, ${scrollToPosition}px)`;
});

// header behavior
const headerDOM = document.getElementById("headerHomePage");
const headerHamburger = document.getElementById("headerHamburger");
const responsiveHeaderDOM = document.getElementById("responsiveHeaderDom");

window.onload = headerHamburger.style.filter = "invert(25%) sepia(30%) saturate(686%) hue-rotate(115deg) brightness(87%) contrast(91%)";

// hamburger btn
window.addEventListener("scroll", (e) => {
	e.preventDefault();
	const headerDOM = document.getElementById("headerHomePage");
	if (window.scrollY >= window.innerHeight - 60 || window.innerHeight + window.pageYOffset >= document.offsetHeight) {
		headerDOM.classList.remove("header-transparent");
		headerDOM.classList.add("header-color-primary");
		headerHamburger.style.filter = "invert(100%) sepia(1%) saturate(2%) hue-rotate(62deg) brightness(106%) contrast(101%)";
	} else if (window.scrollY < window.innerHeight - 60) {
		headerDOM.classList.remove("header-color-primary");
		headerDOM.classList.add("header-transparent");
		headerHamburger.style.filter = "invert(25%) sepia(30%) saturate(686%) hue-rotate(115deg) brightness(87%) contrast(91%)";
	}
});

// responsive header
const headerResponsiveContent = `
<nav class="responsive-header-transparent" id="headerResponsiveNav">
    <a class="link" href="#fullPageHome">accueil</a>
    <a id="headerNavRAboutUs" class="link" href="#aboutUs">qui sommes-nous ?</a>
    <a id="headerNavLocalisation" class="link" href="./pages/nos-caves.html">nos caves</a>
    <a id="headerNavActualities" class="link" href="./pages/nos-actualites.html">nos actualités</a>
    <a id="headerNavServices" class="link" href="./pages/nos-services.html">nos services</a>
    <a id="headerNavHumanResources" class="link" href="./pages/on-recrute.html">on recrute</a>
</nav>
`;

responsiveHeaderDom.innerHTML = headerResponsiveContent;

const headerResponsiveNav = document.getElementById("headerResponsiveNav");

headerHamburger.addEventListener("click", () => {
	if (responsiveHeaderDOM.style.display == "flex") {
		responsiveHeaderDOM.style.display = "none";
		headerHamburger.innerHTML = '<img src="./public/assets/pictos-logos/pictos/open.svg" alt="ouvert">';
	} else {
		responsiveHeaderDOM.style.display = "flex";
		headerHamburger.innerHTML = '<img src="./public/assets/pictos-logos/pictos/close.svg" alt="ferme">';
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
