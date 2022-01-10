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
	let renderHTML = "";
	allStores.features.forEach((store) => {
		let storeInfo = `
		<article class="localisation-list__stores--store" id="${store.properties.storeid}">
			<h6>${store.properties.name}</h6>
			<p class="store-adresse" >${store.properties.address}</p>
			<p class="store-phone"><img class="filter-white" src="../public/assets/fonts/fontawesome/mobile-alt-solid.svg" alt="TODO" />${store.properties.phone}</p>
			<p class="store-mail"><img class="filter-white" src="../public/assets/fonts/fontawesome/envelope-solid.svg" alt="TODO" />${store.properties.email}</p>
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

		for (let i = 0; i < storeAdress.length; i++) {
			const storeArray = storeAdress[i].innerHTML.split("<br>");
			let storeAdressName = storeArray[0].toLocaleLowerCase();
			let storePostalCode = storeArray[1].toLocaleLowerCase();

			if (userInput === "" || storeAdressName.includes(userInput) || storePostalCode.includes(userInput)) {
				storeAdress[i].closest(".localisation-list__stores--store").style.display = "block";
			} else {
				storeAdress[i].closest(".localisation-list__stores--store").style.display = "none";
			}
		}
	});
})();
