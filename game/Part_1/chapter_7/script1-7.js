refreshUserLife(0);
thisIsMySword("divinilame.gif");
playChapterMusic(`stage1-7.mp3`);

whoIsTalking("???");
letterByLetter("Bienvenue sur mes terres mes amis.");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Bonsoir, V ?`, ">");
	displayChevrette();
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Violight", `Chevrette, ${userName}, je suis Violight.`, ">");
		displayTheThird("dogs.gif");
		displayInterlocutor("violight.gif");
		document.getElementById("dogs").style.transform = "translateY(70px)";
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Violight", `Grande prêtresse de la lumière.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Violight", `Gardienne des Canidés.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Violight", `Et protectrice de la bienveillance.`, "Sympa ta robe !", "Qu'ils sont mignons !");
					let options = document.querySelectorAll(".options");
					for (let i = 0; i < options.length; i++) {
						options[i].addEventListener("click", () => {
							dialogActualisation("Violight", `Merci pour ces compliments.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Violight", `Mais les temps sont graves.`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Violight", `Et le temps presse.`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Violight", `Laissez-moi-vous compter l’histoire du Tébébrement.`, ">");
										document.getElementById(">").addEventListener("click", () => {
											location.href = "../chapter_7-story/index1-7-story.html";
										});
									});
								});
							});
						});
					}
				});
			});
		});
	});
});
