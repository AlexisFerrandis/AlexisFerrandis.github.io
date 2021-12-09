displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();
displayInterlocutor("defrancoformed.gif");

playChapterMusic(`stage1-12.mp3`);

whoIsTalking("Defranco");
letterByLetter("Merci..");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Defranco", `Merci de me libérer.`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Defranco", `Je n’ai jamais souhaité le mal à qui que ce soit.`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Defranco", `Je voulais juste une jeunesse bien dans ses bottes.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Defranco", `Prenez soin de..`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Defranco", `Prenez...`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Defranco", `Geuh.`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `Ha bah elle est morte du coup.`, ">");
							characterFalling("defr");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `Tu te débrouilles bien ${userName}.`, "Merci.");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Chevrette", `Première fois que tu maniais l’épée ?`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("???", `Chevrette c'est toi?`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Chevrette", `Chèvre Noir ? `, ">");
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
