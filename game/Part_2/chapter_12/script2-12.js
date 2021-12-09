displayThePet();
refreshUserLife(0);
thisIsMySword("teolame.gif");
displayChevrette();

playChapterMusic(`stage2-12.mp3`);

whoIsTalking("Chevrette");
letterByLetter("C'est vraiment dégoutant içi...");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `C'est crasseux...`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chevrette", `Berk !`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chevrette", `L'hygiène de ce monsieur est à revoir.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("???", `Vieux pape vieux pape vieux pape...`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `Dites non non à la drogue les enfants.`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Démouniraque", `Pelure d'oignon pelure d'oignon pelure d'oignon...`, ">");
						displayInterlocutor("demouniraque.gif");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `En garde mécréant !`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Démouniraque", `JE NE VENDS QUE DES BONBONS PERIMES !!!`, ">");
								document.getElementById(">").addEventListener("click", () => {
									location.href = `../chapter_13/index2-13.html`;
								});
							});
						});
					});
				});
			});
		});
	});
});
