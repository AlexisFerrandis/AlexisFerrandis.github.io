// Get json store list then display them on map's left

const storesList = fetch("../public/js/maps/stores.json")
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		storesJSON = data.features;
		return storesJSON;
	});

async function getTheStores() {
	try {
		let res = await fetch("../public/js/maps/stores.json");
		return await res.json();
	} catch (err) {
		console.log("ERR : " + err);
	}
}

(async function renderEachStore() {
	let allStores = await getTheStores();

	// sort by postal code
	allStores.features.sort(function compare(a, b) {
		if (a.postal < b.postal) return -1;
		if (a.postal > b.postal) return 1;
		return 0;
	});

	let renderHTML = "";
	allStores.features.forEach((store) => {
		let storeInfo = `
		<article class="localisation-list__stores--store" id="${store.properties.storeid}">
			<h6>${store.properties.name}</h6>
			<p class="store-adresse" >${store.properties.address}</p>
			<a href="tel:${store.properties.phone}"><p class="store-phone"><img class="filter-white" src="../public/assets/fonts/fontawesome/mobile-alt-solid.svg" alt="TODO" />${store.properties.phone}</p></a>
			<a href="mailto:${store.properties.email}"><p class="store-mail"><img class="filter-white" src="../public/assets/fonts/fontawesome/envelope-solid.svg" alt="TODO" />${store.properties.email}</p></a>
		</article>
		`;
		renderHTML += storeInfo;
	});
	const localisationStoresList = document.getElementById("localisationStoresList");
	localisationStoresList.innerHTML += renderHTML;

	// User input manipulation to display stores by postal code or adress
	const searchInput = document.getElementById("storeInput");

	searchInput.addEventListener("input", () => {
		let userInput = searchInput.value.toLocaleLowerCase();
		let storeAdress = document.querySelectorAll(".store-adresse");
		let storeMail = document.querySelectorAll(".store-mail");

		for (let i = 0; i < storeAdress.length; i++) {
			const storeArray = storeAdress[i].innerHTML.split("<br>");
			let storeAdressName = storeArray[0].toLocaleLowerCase();
			let storePostalCode = storeArray[1].toLocaleLowerCase();

			let storeMailName = storeMail[i].innerHTML;

			if (userInput === "" || storeAdressName.includes(userInput) || storePostalCode.includes(userInput) || storeMailName.includes(userInput)) {
				storeAdress[i].closest(".localisation-list__stores--store").style.display = "block";
			} else {
				storeAdress[i].closest(".localisation-list__stores--store").style.display = "none";
			}
		}
	});
})();

// footer display if innerHeight not height enough
const footer = document.getElementById("footer");

if (window.innerHeight > 1000) {
	footer.style.position = "absolute";
	footer.style.bottom = "0";
}
