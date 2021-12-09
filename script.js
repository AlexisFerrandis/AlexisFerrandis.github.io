// Display options and chapters container
window.onload = document.body.innerHTML +=
	`
<div id="parameterContainer">
    <div class="nes-container is-rounded is-dark">
        <h3>OPTIONS</h3>
        <div id="closeOptBtn">X</div>
        <div class="parameter-display>
            <div style="background-color:#212529; padding: 1rem 1.2rem 1rem 1rem;width:calc(100% + 8px)">
                <label for="volumeCtrl" style="color:#fff">Volume</label>
                <div class="nes-select is-dark">
                    <select required id="volumeCtrl">
                        <option value="" disabled selected hidden>Select...</option>
                        <option value="0">Muet</option>
                        <option value="1">Pas très fort</option>
                        <option value="2">Un peu plus fort</option>
                        <option value="3">Y'a un peu de volume</option>
                        <option value="4">Au max</option>
                    </select>
                </div>
            </div>

            <div style="background-color:#212529; padding: 1rem 1.2rem 1rem 1rem;width:calc(100% + 8px)">
                <label for="textSpeedCtrl" style="color:#fff">Vitesse du texte</label>
                <div class="nes-select is-dark">
                    <select required id="textSpeedCtrl">
                        <option value="" disabled selected hidden>Select...</option>
                        <option value="0">Leeeennnnnt</option>
                        <option value="1">Un peu lent</option>
                        <option value="2">Normal</option>
                        <option value="3">I'm the fast</option>
                    </select>
                </div>
            </div>

            <div class="checkbox-container">
                <label>
                    <input type="checkbox" class="nes-checkbox is-dark" checked />
                    <span> Mode difficile</span>
                </label>
                <label>
                    <input id="activateSoundEffect" type="checkbox" class="nes-checkbox is-dark" checked />
                    <span> Bruitages</span>
                </label>
            </div>

        </div>
    </div>
</div>
` +
	// Chapter section
	`
<div id="chaptersContainer">
    <div class="nes-container is-rounded is-dark">
        <h3>Chapitres</h3>
        <div id="closeChapterBtn">X</div>
        <div class="chapitreDisplay">
            <div id="chapterSelectionPartOne">
                <h4>Part I</h4>
                <a href="./game/Part_1/chapter_1/index1-1.html">1. Hey you</a></br>
                <a href="./game/Part_1/chapter_2/index1-2.html">2. Le génie incompris</a></br>
                <a href="./game/Part_1/chapter_3/index1-3.html">3. Appel de la nature</a></br>
                <a href="./game/Part_1/chapter_4/index1-4.html">4. Le retour du Roi</a></br>
                <a href="./game/Part_1/chapter_5/index1-5.html">5. Le riz est cuit</a></br>
                <a href="./game/Part_1/chapter_6/index1-6.html">6. Divinilame</a></br>
                <a href="./game/Part_1/chapter_7/index1-7.html">7. Noblesse authentique</a></br>
                <a href="./game/Part_1/chapter_7-story/index1-7-story.html">0. Raconte moi une histoire</a></br>
                <a href="./game/Part_1/chapter_8/index1-8.html">8. Smol doggo</a></br>
                <a href="./game/Part_1/chapter_9/index1-9.html">9. Mais vous fumez monsieur</a></br>
                <a href="./game/Part_1/chapter_10/index1-10.html">10. Souilley</a></br>
                <a href="./game/Part_1/chapter_11/index1-11.html">11. La plouille</a></br>
                <a href="./game/Part_1/chapter_12/index1-12.html">12. Rédemption du savoir</a></br>
            </div>
            
            <div id="chapterSelectionPartTwo">
                <h4>Part II</h4>
                <a href="./game/Part_2/chapter_1/index2-1.html">1. Monsieur Seguin</a></br>
                <a href="./game/Part_2/chapter_2/index2-2.html">2. La carte Kiwi</a></br>
                <a href="./game/Part_2/chapter_3/index2-3.html">3. I play Pokemon Go</a></br>
                <a href="./game/Part_2/chapter_4/index2-4.html">4. Premier à tomber</a></br>
                <a href="./game/Part_2/chapter_5/index2-5.html">5. Gare Réaumur</a></br>
                <a href="./game/Part_2/chapter_6/index2-6.html">6. Un Lama ?</a></br>
                <a href="./game/Part_2/chapter_7/index2-7.html">7. Il imitait une pieuvre</a></br>
                <a href="./game/Part_2/chapter_8/index2-8.html">8. Poussière sous le tapis</a></br>
                <a href="./game/Part_2/chapter_9/index2-9.html">9. Le plus gentil</a></br>
                <a href="./game/Part_2/chapter_10/index2-10.html">10. Ce rêve bleu</a></br>
                <a href="./game/Part_2/chapter_11/index2-11.html">11. La Plagne</a></br>
                <a href="./game/Part_2/chapter_12/index2-12.html">12. Pelure d'Oignon</a></br>
                <a href="./game/Part_2/chapter_13/index2-13.html">13. Tétine moisit</a></br>
                <a href="./game/Part_2/chapter_14/index2-14.html">14. Il était une fois</a></br>
            </div>
        </div>
    </div>
</div>
`;

// Part path
document.getElementById("partOne").addEventListener("click", () => {
	playSoundEffect("menu-click.wav");
	blackScreenToLocation("./game/Part_1/chapter_1/index1-1.html");
});
document.getElementById("partTwo").addEventListener("click", () => {
	playSoundEffect("menu-click.wav");
	blackScreenToLocation("./game/Part_2/chapter_1/index2-1.html");
});
document.getElementById("partThree").addEventListener("click", () => {
	playSoundEffect("menu-click.wav");
	alert("Bientôt disponible !");
});

// Display continue Btn if they're is a save
if (localStorage.getItem("userSave")) {
	document.getElementById("saveBtnContainer").innerHTML += `
    <button id="userSaveBtn" class="nes-btn options home-btn">
		<h3>Continuer</h3>
	</button>
    `;
	document.getElementById("userSaveBtn").addEventListener("click", () => {
		playSoundEffect("menu-click.wav");
		blackScreenToLocation(localStorage.getItem("userSave"));
	});
}

/*** OPTIONS SELECTION ***/

// Open and close options
document.getElementById("homeOptionsBtn").addEventListener("click", () => {
	playSoundEffect("menu-chapter.wav");
	document.getElementById("parameterContainer").style.display = "block";
});
document.getElementById("closeOptBtn").addEventListener("click", () => {
	playSoundEffect("menu-click.wav");
	document.getElementById("parameterContainer").style.display = "none";
});

// Volume controler
document.getElementById("volumeCtrl").addEventListener("input", () => {
	let volumeChosen = document.getElementById("volumeCtrl").value;
	localStorage.setItem("volumeChosen", volumeChosen);
});

// Text speed controler
document.getElementById("textSpeedCtrl").addEventListener("input", () => {
	let textSpeedChosen = document.getElementById("textSpeedCtrl").value;
	localStorage.setItem("textSpeedChosen", textSpeedChosen);
});

// Activate sound effect
document.getElementById("activateSoundEffect").addEventListener("input", () => {
	let isSoundEffectActif = document.getElementById("activateSoundEffect").checked;
	localStorage.setItem("isSoundEffectActif", isSoundEffectActif);
});

/*** CHAPTERS SELECTION ***/

document.getElementById("chapterChoiceBtn").addEventListener("click", () => {
	playSoundEffect("menu-chapter.wav");
	document.getElementById("chaptersContainer").style.display = "block";
});
document.getElementById("closeChapterBtn").addEventListener("click", () => {
	playSoundEffect("menu-click.wav");
	document.getElementById("chaptersContainer").style.display = "none";
});
