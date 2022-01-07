const headerDOM = document.getElementById("header-color-primary");

const headerContent = `
<a href="../index.html"><img id="logoHeaderNav" src="../public/assets/img/logos/logo-img&text-white.png" /></a>
<nav class="header-nav__container" id="headerNav">
    <a class="header-nav__container--link" href="../index.html">accueil</a>
    <a id="headerNavAboutUs" class="header-nav__container--link" href="../index.html#homeAboutUs">qui sommes-nous?</a>
    <a id="headerNavLocalisation" class="header-nav__container--link" href="./localisation.html">nos caves</a>
    <a id="headerNavActualities" class="header-nav__container--link" href="./actualities.html">nos actualités</a>
    <a id="headerNavServices" class="header-nav__container--link" href="./services.html">nos services</a>
    <a id="headerNavHumanResources" class="header-nav__container--link" href="./human-resources.html">on recrute</a>
    <!-- <a id="headerNavBlog" class="header-nav__container--link" href="./blog.html">blog</a> -->
</nav>
<button type="button" id="headerHamburger" class="header-nav-responsive-inactive"><img src="../public/assets/img/pictos/header/open-menu.png" alt="TODO"></button>
`;

headerDOM.innerHTML += headerContent;

const currentPage = document.getElementsByTagName("h1");

for (let i = 0; i < currentPage.length; i++) {
	switch (currentPage[i].innerHTML) {
		case "qui sommes-nous ?":
			console.log("aboutus");
			break;
		case "nos caves":
			document.getElementById("headerNavLocalisation").classList.add("header-nav__container--link--actif");
			break;
		case "nos actualités":
			document.getElementById("headerNavActualities").classList.add("header-nav__container--link--actif");
			break;
		case "nos services":
			document.getElementById("headerNavServices").classList.add("header-nav__container--link--actif");
			break;
		case "on recrute":
			document.getElementById("headerNavHumanResources").classList.add("header-nav__container--link--actif");
			break;
		default:
			console.log("ERR : NOT FOUND");
	}
}

const headerResponsiveContent = `
<nav class="header-nav-responsive__container" id="headerResponsiveNav">
    <a class="header-nav-responsive__container--link" href="../index.html">accueil</a>
    <a id="headerNavRAboutUs" class="header-nav-responsive__container--link" href="../index.html#homeAboutUs">qui sommes-nous?</a>
    <a id="headerNavLocalisation" class="header-nav-responsive__container--link" href="./localisation.html">nos caves</a>
    <a id="headerNavActualities" class="header-nav-responsive__container--link" href="./actualities.html">nos actualités</a>
    <a id="headerNavServices" class="header-nav-responsive__container--link" href="./services.html">nos services</a>
    <a id="headerNavHumanResources" class="header-nav-responsive__container--link" href="./human-resources.html">on recrute</a>
    <!-- <a id="headerNavBlog" class="header-nav-responsive__container--link" href="./blog.html">blog</a> -->
</nav>
`;
let responsiveNav = "";

const headerHamburger = document.getElementById("headerHamburger");

window.addEventListener("load", () => {
	if (window.innerWidth < 1250) {
		headerHamburger.style.display = "block";
	} else {
		headerHamburger.style.display = "none";
	}
});

const responsiveHeaderDom = document.getElementById("responsiveHeaderDom");
let headerResponsiveActivation = false;

headerHamburger.addEventListener("click", () => {
	if (headerResponsiveActivation == false) {
		headerResponsiveActivation = true;
		headerHamburger.innerHTML = `<img src="../public/assets/img/pictos/header/close-menu.png" alt="TODO">`;
		responsiveHeaderDom.innerHTML += headerResponsiveContent;
		responsiveNav = document.getElementById("headerResponsiveNav");
	} else {
		headerResponsiveActivation = false;
		responsiveHeaderDom.innerHTML = ``;
		headerHamburger.innerHTML = `<img src="../public/assets/img/pictos/header/open-menu.png" alt="TODO">`;
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth < 1250) {
		headerHamburger.style.display = "block";
		if (responsiveNav) responsiveNav.style.display = "flex";
	} else {
		headerHamburger.style.display = "none";
		if (responsiveNav) responsiveNav.style.display = "none";
	}
});
