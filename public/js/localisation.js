// User input manipulation to display stores by postal code or adress
const searchInput = document.getElementById("storeInput");

searchInput.addEventListener("input", () => {
	let userInput = searchInput.value;
	let storePostalCode = document.querySelectorAll(".store-postal");
	let storeAdress = document.querySelectorAll(".store-adresse");

	for (let i = 0; i < storePostalCode.length; i++) {
		if (userInput === "" || storePostalCode[i].textContent.split(" ")[0].includes(userInput) || storeAdress[i].textContent.toLowerCase().includes(userInput.toLowerCase())) {
			storePostalCode[i].closest(".localisation-list__stores--store").style.display = "block";
		} else {
			storePostalCode[i].closest(".localisation-list__stores--store").style.display = "none";
		}
	}
});
