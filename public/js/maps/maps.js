function initMap(){const t=new google.maps.Map(document.getElementById("map"),{zoom:11,center:{lat:48.86235,lng:2.34261}});t.data.loadGeoJson("../public/js/maps/stores.json",{idPropertyName:"storeid"}),t.data.setStyle(t=>({icon:{url:"../public/assets/pictos-logos/pictos/pinlocator.png",scaledSize:new google.maps.Size(36,50)}}));const e=new google.maps.InfoWindow;t.data.addListener("click",s=>{const r=s.feature.getProperty("name"),o=s.feature.getProperty("address"),a=s.feature.getProperty("phone"),n=s.feature.getProperty("email"),p=s.feature.getProperty("hours"),i=s.feature.getProperty("maps-itinerary"),l=s.feature.getGeometry().get(),c=`\n        <div class="maps-store-preview">\n\t\t\t<h2 class="maps-store-preview__name">${r}</h2>\n\t\t\t<p class="maps-store-preview__address">${o}</p>\n\t\t\t<div class="maps-store-preview__contact">\n\t\t\t\t<a href="tel:${a}">${a}</a><br/>\n\t\t\t\t<a href="mailto:${n}">${n}</a>\n\t\t\t</div>\n\t\t\t<p class="maps-store-preview__hours">${p}</p>\n\t\t\t<a class="maps-store-preview__itinerary" href="http://maps.google.com/?q=${i}">Itinéraire</a>\n        </div>\n        `;e.setContent(c),e.setPosition(l),e.setOptions({pixelOffset:new google.maps.Size(0,-30)}),e.open(t);const m=document.getElementById("storeInput"),d=s.feature.getProperty("storeid");m.value=d;let g=new Event("input");m.dispatchEvent(g)}),setTimeout(()=>{const s=document.querySelectorAll(".localisation-list__stores--store");for(let r=0;r<s.length;r++)s[r].addEventListener("click",()=>{fetch("../public/js/maps/stores.json").then(t=>t.json()).then(t=>t.features).then(o=>{o.forEach(o=>{if(o.properties.storeid===s[r].id){const s=o.properties.name,r=o.properties.address,a=o.properties.phone,n=o.properties.email,p=o.properties.hours,i=o.properties.itinerary,l=o.geometry.coordinates[1],c={lng:o.geometry.coordinates[0],lat:l},m=`\n\t\t\t\t\t\t\t<div class="maps-store-preview">\n\t\t\t\t\t\t\t\t<h2 class="maps-store-preview__name">${s}</h2>\n\t\t\t\t\t\t\t\t<p class="maps-store-preview__address">${r}</p>\n\t\t\t\t\t\t\t\t<div class="maps-store-preview__contact">\n\t\t\t\t\t\t\t\t\t<a href="tel:${a}">${a}</a><br/>\n\t\t\t\t\t\t\t\t\t<a href="mailto:${n}">${n}</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<p class="maps-store-preview__hours">${p}</p>\n\t\t\t\t\t\t\t\t<a class="maps-store-preview__itinerary" href="http://maps.google.com/?q=${i}">Itinéraire</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t`;e.setContent(m),e.setPosition(c),e.setOptions({pixelOffset:new google.maps.Size(0,-30)}),e.open(t)}})})})},1e3)}