displayThePet();
refreshUserLife(0);
thisIsMySword("teolame.gif");
displayChevrette();

playChapterMusic(`stage2-9.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Nous sommes parés !");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Boyer", `Salut les potes !`, ">");
	displayInterlocutor("boyer.gif");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Boyer", `Vous avez fait bon voyage ?`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chevrette", `Babybabybabylone.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Boyer", `Je vois.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Boyer", `Vous devriez me rejoindre à la Plagne de temps en temps on pourrait bien s'éclater !`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", `Pourquoi pas à l'occasion !`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Boyer", `Bon, je pense que vous pouvez continuer bien équipé.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Boyer", `Bonne chance !`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Chevrette", `Merci Boyer !`, ">");
									characterLeaving("boye");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chevrette", `A l'assaut de Démouniraque !`, ">");
										document.getElementById(">").addEventListener("click", () => {
											location.href = "../chapter_12/index2-12.html";
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});
});
