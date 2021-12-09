playChapterMusic(`stage1-1.mp3`);
setDefaultOptions();

setTimeout(function () {
	whoIsTalking("???");
	letterByLetter("Ho.. Tu es finalement réveillé ? ");
	userOptions(">");

	// name, message, opt1, opt2, opt3, opt4
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("???", "Comment tu te sens?", ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("???", "Tu nous as fait peur...", ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chevrette", "Je suis Chevrette, la fée de Saint-Rémy, comment t’appelles tu ?");
				displayChevrette();

				document.getElementById("userOptions").innerHTML = userNameInput;
				document.getElementById("userNameSubmit").addEventListener("click", () => {
					nameValidator();
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", "Une puissance sombre est en train de s’étendre dans notre village.", ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", "On ne sait pas exactement comment elle est apparue.", ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", "Mais le livre astral parle de la venue d’un guerrier capable de nous libérer de cette malédiction.", ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Chevrette", `Et je pense que c'est toi, ${localStorage.getItem("userName")}.`, "Pourquoi moi?", "Je ne pense pas non.");
									document.getElementById("inpactDisclaimer").innerHTML = `<div class="impact-disclaimer">Une loupiote rouge apparaitra lorsque le choix que vous vous appretez à faire aura un impact sur le reste de l'histoire.</div>`;
									refreshImpactChoice();
									document.getElementById("inpactDisclaimer").addEventListener("click", () => {
										document.getElementById("inpactDisclaimer").remove();
									});
									let options = document.querySelectorAll(".options");
									for (let i = 0; i < options.length; i++) {
										options[i].addEventListener("click", () => {
											refreshImpactChoice();
											dialogActualisation("Chevrette", `Il est stipulé que l’enfant tombé du ciel, par son épée tranchera le malin et débarrassera Saint-Rémy du démon.`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", "Je t’en conjure, apportes nous ton aide.", "Très bien", "D'accord", "J'accepte");
												let options = document.querySelectorAll(".options");
												for (let i = 0; i < options.length; i++) {
													options[i].addEventListener("click", () => {
														dialogActualisation("Chevrette", `Merci ${localStorage.getItem("userName")}, tous les habitants de Saint-Rémy te sont reconnaissants.`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Chevrette", "Pour débuter ta quête, nous devrions nous rendre à l’ancien collège pour trouver des informations, là ou tout à commencer…", ">");
															document.getElementById(">").addEventListener("click", () => {
																location.href = "../chapter_2/index1-2.html";
															});
														});
													});
												}
											});
										});
									}
								});
							});
						});
					});
				});
			});
		});
	});
}, 2000);

userNameInput = `
<div id ="userInput" class="nes-field is-inline userInput">
    <label for="dark_field" style="color:#fff;">Nom d'aventurier(e)</label>
    <input id="userInputValue" type="text" id="dark_field" class="nes-input is-dark" placeholder="Denis">
    <button id="userNameSubmit" class="nes-btn" href="#">
        ok
    </button>
</div>`;

function nameValidator() {
	let userInput = document.getElementById("userInputValue");
	if (userInput.value == "") {
		alert("Il faut choisir un nom :o");
	} else {
		userName = userInput.value;
		localStorage.setItem("userName", userName);
		dialogActualisation("Chevrette", `Très bien ${userName}, je pense que tu es arrivé ici pour nous apporter ton aide.`, ">");
	}
}
