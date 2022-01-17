const headerDOM = document.getElementById("header-color-primary");

const headerContent = `
<a href="../index.html"><img id="logoHeaderNav" src="../public/assets/img/logos/logo-img&text-white.svg" /></a>
<nav class="header-nav__container" id="headerNav">
    <a class="header-nav__container--link" href="../index.html">accueil</a>
    <a id="headerNavAboutUs" class="header-nav__container--link" href="../index.html#homeAboutUs">qui sommes-nous?</a>
    <a id="headerNavLocalisation" class="header-nav__container--link" href="./localisation.html">nos caves</a>
    <a id="headerNavActualities" class="header-nav__container--link" href="./actualities.html">nos actualités</a>
    <a id="headerNavServices" class="header-nav__container--link" href="./services.html">nos services</a>
    <a id="headerNavHumanResources" class="header-nav__container--link" href="./human-resources.html">on recrute</a>
    <!-- <a id="headerNavBlog" class="header-nav__container--link" href="./blog.html">blog</a> -->
</nav>
<button type="button" id="headerHamburger" class="header-nav-responsive-inactive"><img src="../public/assets/img/pictos/header/open.svg" alt="TODO"></button>
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

responsiveHeaderDom.innerHTML = `
<nav class="header-nav-responsive__container responsive-header-primary" id="headerResponsiveNav">
	<a class="header-nav-responsive__container--link" href="../index.html">accueil</a>
	<a id="headerNavRAboutUs" class="header-nav-responsive__container--link" href="../index.html#homeAboutUs">qui sommes-nous?</a>
	<a id="headerNavLocalisation" class="header-nav-responsive__container--link" href="../pages/localisation.html">nos caves</a>
	<a id="headerNavActualities" class="header-nav-responsive__container--link" href="../pages/actualities.html">nos actualités</a>
	<a id="headerNavServices" class="header-nav-responsive__container--link" href="../pages/services.html">nos services</a>
	<a id="headerNavHumanResources" class="header-nav-responsive__container--link" href="../pages/human-resources.html">on recrute</a>
	<!-- <a id="headerNavBlog" class="header-nav-responsive__container--link" href="../pages/blog.html">blog</a> -->
</nav>
`;

const headerHamburger = document.getElementById("headerHamburger");
const responsiveHeaderDOM = document.getElementById("responsiveHeaderDom");

window.onload = headerHamburger.style.filter = "invert(100%) sepia(1%) saturate(2%) hue-rotate(62deg) brightness(106%) contrast(101%)";

const headerResponsiveNav = document.getElementById("headerResponsiveNav");

headerHamburger.addEventListener("click", () => {
	if (responsiveHeaderDOM.style.display == "flex") {
		responsiveHeaderDOM.style.display = "none";
		headerHamburger.innerHTML = '<img src="../public/assets/img/pictos/header/open.svg" alt="TODO">';
	} else {
		responsiveHeaderDOM.style.display = "flex";
		headerHamburger.innerHTML = '<img src="../public/assets/img/pictos/header/close.svg" alt="TODO">';
	}
});
