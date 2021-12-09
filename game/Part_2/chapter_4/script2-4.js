displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();
displayInterlocutor("chevre-noir.gif");

playChapterMusic(`stage1-12.mp3`);

whoIsTalking("Chevrette");
letterByLetter("...");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chèvre noir", `Pourquoi sommes nous là?`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chèvre noir", `L'existentialité est elle une fin en soit?`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chèvre noir", `Nos recherches ont peut être mal tournées...`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chèvre noir", `Nous avons révélé le pire là où nous voulions extraire le meilleur.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chèvre noir", `Malgré ça, le SainRembrion doit continuer à évoluer.`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chèvre noir", `A terme, il apportera les réponses..`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chèvre noir", `Je suis désolé Chevrette...`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chèvre noir", `Prends soin de toi petite chèvre...`, ">");
								document.getElementById(">").addEventListener("click", () => {
									characterFalling("chev");
									dialogActualisation("Chevrette", `...`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chevrette", `Snif...`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Chevrette", `Moi aussi j'ai besoin de réponses.`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", `Rentrons ${userName}.`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", `Nous avons clairement besoin d'un peu de repos.`, ">");
													document.getElementById(">").addEventListener("click", () => {
														location.href = "../chapter_5/index2-5.html";
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
	});
});
