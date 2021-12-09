displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();
displayInterlocutor("edeliste.png");

playChapterMusic(`stage1-2.mp3`);

whoIsTalking("Mr Edeliste");
letterByLetter("Ha !");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Mr Edeliste", `C'est vous !`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Mr Edeliste", `Vous êtes déjà de retour ?`, "Pour vous jouer un mauvais tour.", "Vous aviez raison !");
		refreshImpactChoice();

		document.getElementById(">").addEventListener("click", () => {
			refreshImpactChoice();
			dialogActualisation("Mr Edeliste", `Jessie, James ?`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chevrette", `La team Rocke… Qu’est ce que je raconte.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `Edeliste, pouvez vous nous faire rentrer ?`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Mr Edeliste", `Je peux tout faire si je ne suis pas dans une poubelle !`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `Parfait, nous devons trouver Defranco.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Mr Edeliste", `Je vous ouvre la porte, mais je ne m’aventure pas à l’intérieur !`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Mr Edeliste", `Voilà, bon courage hihihiHAHA.`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chevrette", `On va vous laisser vous reposer.`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Mr Edeliste", `mwihihiWAHAHAHAHA !`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", `D’accord.`, ">");
												document.getElementById(">").addEventListener("click", () => {
													location.href = "../chapter_10/index1-10.html";
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

		document.getElementById("vous").addEventListener("click", () => {
			refreshImpactChoice();
			dialogActualisation("Mr Edeliste", `Mais bien sur que oui !`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Mr Edeliste", `A propos de quoi ?`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `Sur le ténébrement et... enfin bref.`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", `Edeliste, pouvez vous nous faire rentrer ?`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Mr Edeliste", `Je peux tout faire si je ne suis pas dans une poubelle !`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `Parfait, nous devons trouver Defranco.`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Mr Edeliste", `Je vous ouvre la porte, mais je ne m’aventure pas à l’intérieur !`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Mr Edeliste", `Voilà, bon courage hihihiHAHA.`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Chevrette", `On va vous laisser vous reposer.`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Mr Edeliste", `mwihihiWAHAHAHAHA !`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", `D’accord.`, ">");
													document.getElementById(">").addEventListener("click", () => {
														location.href = "../chapter_10/index1-10.html";
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
