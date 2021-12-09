displayThePet();
refreshUserLife(0);
thisIsMySword("teolame.gif");
displayChevrette();
displayInterlocutor("demouniraque.gif");
playChapterMusic(`stage2-12.mp3`);

whoIsTalking("Démouniraque");
letterByLetter("...");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Démouniraque", `Vous savez...`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Démouniraque", `La vie n'est pas toujours évidente.`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Démouniraque", `On fait ce qu'on peut pour survivre dans ce bas monde.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Démouniraque", `Je n'ai pas forcément fait les bons choix.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Démouniraque", `Mais j'ai essayé de faire de mon mieux.`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Démouniraque", `Je...`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Démouniraque", `Je.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Démouniraque", `Geuh.`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Chevrette", `Une belle morale à cette histoire.`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chevrette", `${userName}, nous aurons bientôt libéré la ville.`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Chevrette", `MARCELEDICTION NOUS ARRIVONS ! `, ">");
											document.getElementById(">").addEventListener("click", () => {
												blackScreenToLocation("../../../index.html");
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
});
