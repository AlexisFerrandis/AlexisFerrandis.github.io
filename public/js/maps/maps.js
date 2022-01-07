function initMap() {
	// Create the map.
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: { lat: 48.86235, lng: 2.34261 },
	});

	// Load the stores GeoJSON onto the map.
	map.data.loadGeoJson("../public/js/maps/stores.json", { idPropertyName: "storeid" });

	// Define the custom marker icons, using the store's "category".
	map.data.setStyle((feature) => {
		return {
			icon: {
				url: `../public/assets/img/pictos/localisation/pinlocator.png`,
				scaledSize: new google.maps.Size(36, 50),
			},
		};
	});

	const apiKey = "APIKEY";
	const infoWindow = new google.maps.InfoWindow();

	// Show the information for a store when its marker is clicked.
	map.data.addListener("click", (event) => {
		const name = event.feature.getProperty("name");
		const address = event.feature.getProperty("address");
		const phone = event.feature.getProperty("phone");
		const email = event.feature.getProperty("email");
		const hours = event.feature.getProperty("hours");
		const mapsItinerary = event.feature.getProperty("maps-itinerary");
		const position = event.feature.getGeometry().get();
		const content = `
        <div class="maps-store-preview">
			<h2 class="maps-store-preview__name">${name}</h2>
			<p class="maps-store-preview__address">${address}</p>
			<div class="maps-store-preview__contact">
				<a href="tel:${phone}">${phone}</a><br/>
				<a href="mailto:${email}">${email}</a>
			</div>
			<p class="maps-store-preview__hours">${hours}</p>
			<a class="maps-store-preview__itinerary" href="http://maps.google.com/?q=${mapsItinerary}">Itinéraire</a>
        </div>
        `;

		infoWindow.setContent(content);
		infoWindow.setPosition(position);
		infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
		infoWindow.open(map);
	});

	// Store onclick reveal equivalent on maps
	const storesDOMList = document.querySelectorAll(".localisation-list__stores--store");

	for (let i = 0; i < storesDOMList.length; i++) {
		storesDOMList[i].addEventListener("click", () => {
			fetch("../public/js/maps/stores.json")
				.then((response) => response.json())
				.then((json) => json.features)
				.then((storesArray) => {
					storesArray.forEach((store) => {
						if (store.properties.storeid === storesDOMList[i].id) {
							const name = store.properties.name;
							const address = store.properties.address;
							const phone = store.properties.phone;
							const email = store.properties.email;
							const hours = store.properties.hours;
							const mapsItinerary = store.properties.itinerary;
							const lat = store.geometry.coordinates[1];
							const lng = store.geometry.coordinates[0];
							const position = { lng, lat };
							const content = `
							<div class="maps-store-preview">
								<h2 class="maps-store-preview__name">${name}</h2>
								<p class="maps-store-preview__address">${address}</p>
								<div class="maps-store-preview__contact">
									<a href="tel:${phone}">${phone}</a><br/>
									<a href="mailto:${email}">${email}</a>
								</div>
								<p class="maps-store-preview__hours">${hours}</p>
								<a class="maps-store-preview__itinerary" href="http://maps.google.com/?q=${mapsItinerary}">Itinéraire</a>
							</div>
							`;

							infoWindow.setContent(content);
							infoWindow.setPosition(position);
							infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
							infoWindow.open(map);
						}
					});
				});
		});
	}
}
