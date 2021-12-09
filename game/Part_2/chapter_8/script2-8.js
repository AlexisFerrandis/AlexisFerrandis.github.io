displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();
displayInterlocutor("tete-de-canard.gif");

playChapterMusic(`stage2-6.mp3`);

whoIsTalking("Tête de Canard");
letterByLetter("...");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Tête de Canard", `Le prix est lourd.`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Tête de Canard", `Mais c'est un sacrifice nécessaire.`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Tête de Canard", `Pour le bien être de la population.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Tête de Canard", `Ninja flex !`, ">");
				characterFalling("tete");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `Nous progressons.`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", `Beaucoup d'informations aujourd'hui.`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `Et nous savons où se trouve les parents.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `Allons les dénicher ${userName} !`, ">");
								document.getElementById(">").addEventListener("click", () => {
									location.href = "../chapter_9/index2-9.html";
								});
							});
						});
					});
				});
			});
		});
	});
});
