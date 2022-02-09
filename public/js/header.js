const headerDOM = document.getElementById("header-color-primary");

const headerContent = `
<a href="../index.html"><img id="logoHeaderNav" src="../public/assets/pictos-logos/logos/lrdb-white.svg" alt="logo" /></a>
<nav class="nav-container" id="headerNav">
    <a class="link" href="../index.html">accueil</a>
    <a id="headerNavAboutUs" class="link" href="../index.html#aboutUs">qui sommes-nous ?</a>
    <a id="headerNavLocalisation" class="link" href="./nos-caves.html">nos caves</a>
    <a id="headerNavActualities" class="link" href="./nos-actualites.html">nos actualités</a>
    <a id="headerNavServices" class="link" href="./nos-services.html">nos services</a>
    <a id="headerNavHumanResources" class="link" href="./on-recrute.html">on recrute</a>
</nav>
<button type="button" id="headerHamburger" class="header-nav-responsive-inactive"><img src="../public/assets/pictos-logos/pictos/open.svg" alt="Bouton du menu"></button>
`;

headerDOM.innerHTML += headerContent;

// bold current page link
const currentPage = document.getElementsByTagName("h1");

for (let i = 0; i < currentPage.length; i++) {
	switch (currentPage[i].innerHTML) {
		case "qui sommes-nous ?":
			console.log("aboutus");
			break;
		case "nos caves":
			document.getElementById("headerNavLocalisation").classList.add("link__actif");
			break;
		case "nos actualités":
			document.getElementById("headerNavActualities").classList.add("link__actif");
			break;
		case "nos services":
			document.getElementById("headerNavServices").classList.add("link__actif");
			break;
		case "on recrute":
			document.getElementById("headerNavHumanResources").classList.add("link__actif");
			break;
		default:
			console.log("ERR : NOT FOUND");
	}
}

// responsive header
responsiveHeaderDom.innerHTML = `
<nav class="responsive-header-primary" id="headerResponsiveNav">
	<a class="link" href="../index.html">accueil</a>
	<a id="headerNavRAboutUs" class="link" href="../index.html#aboutUs">qui sommes-nous ?</a>
    <a id="headerNavLocalisation" class="link" href="../pages/nos-caves.html">nos caves</a>
    <a id="headerNavActualities" class="link" href="../pages/nos-actualites.html">nos actualités</a>
    <a id="headerNavServices" class="link" href="../pages/nos-services.html">nos services</a>
    <a id="headerNavHumanResources" class="link" href="../pages/on-recrute.html">on recrute</a>
</nav>
`;

const headerHamburger = document.getElementById("headerHamburger");
const responsiveHeaderDOM = document.getElementById("responsiveHeaderDom");

window.onload = headerHamburger.style.filter = "invert(100%) sepia(1%) saturate(2%) hue-rotate(62deg) brightness(106%) contrast(101%)";

const headerResponsiveNav = document.getElementById("headerResponsiveNav");

// hamburger btn
headerHamburger.addEventListener("click", () => {
	if (responsiveHeaderDOM.style.display == "flex") {
		responsiveHeaderDOM.style.display = "none";
		headerHamburger.innerHTML = '<img src="../public/assets/pictos-logos/pictos/open.svg" alt="ouvert">';
	} else {
		responsiveHeaderDOM.style.display = "flex";
		headerHamburger.innerHTML = '<img src="../public/assets/pictos-logos/pictos/close.svg" alt="ferme">';
	}
});
