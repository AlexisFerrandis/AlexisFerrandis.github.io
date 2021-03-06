const headerDOM = document.getElementById("header-color-primary"),
	headerContent = '\n<a href="../index.html"><img id="logoHeaderNav" src="../public/assets/pictos-logos/logos/lrdb-white.svg" alt="logo" /></a>\n<nav class="nav-container" id="headerNav">\n    <a class="link" href="../index.html">accueil</a>\n    <a id="headerNavAboutUs" class="link" href="../index.html#aboutUs">qui sommes-nous ?</a>\n    <a id="headerNavLocalisation" class="link" href="./nos-caves.html">nos caves</a>\n    <a id="headerNavActualities" class="link" href="./nos-actualites.html">nos actualités</a>\n    <a id="headerNavServices" class="link" href="./nos-services.html">nos services</a>\n    <a id="headerNavHumanResources" class="link" href="./on-recrute.html">on recrute</a>\n</nav>\n<button type="button" id="headerHamburger" class="header-nav-responsive-inactive"><img src="../public/assets/pictos-logos/pictos/open.svg" alt="Bouton du menu"></button>\n';
headerDOM.innerHTML += headerContent;
const currentPage = document.getElementsByTagName("h1");
for (let e = 0; e < currentPage.length; e++)
	switch (currentPage[e].innerHTML) {
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
responsiveHeaderDom.innerHTML = '\n<nav class="responsive-header-primary" id="headerResponsiveNav">\n\t<a class="link" href="../index.html">accueil</a>\n\t<a id="headerNavRAboutUs" class="link" href="../index.html#aboutUs">qui sommes-nous ?</a>\n    <a id="headerNavLocalisation" class="link" href="../pages/nos-caves.html">nos caves</a>\n    <a id="headerNavActualities" class="link" href="../pages/nos-actualites.html">nos actualités</a>\n    <a id="headerNavServices" class="link" href="../pages/nos-services.html">nos services</a>\n    <a id="headerNavHumanResources" class="link" href="../pages/on-recrute.html">on recrute</a>\n</nav>\n';
const headerHamburger = document.getElementById("headerHamburger"),
	responsiveHeaderDOM = document.getElementById("responsiveHeaderDom");
window.onload = headerHamburger.style.filter = "invert(100%) sepia(1%) saturate(2%) hue-rotate(62deg) brightness(106%) contrast(101%)";
const headerResponsiveNav = document.getElementById("headerResponsiveNav");
headerHamburger.addEventListener("click", () => {
	"flex" == responsiveHeaderDOM.style.display ? ((responsiveHeaderDOM.style.display = "none"), (headerHamburger.innerHTML = '<img src="../public/assets/pictos-logos/pictos/open.svg" alt="ouvert">')) : ((responsiveHeaderDOM.style.display = "flex"), (headerHamburger.innerHTML = '<img src="../public/assets/pictos-logos/pictos/close.svg" alt="ferme">'));
});
