displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();

playChapterMusic(`stage1-10.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Pas très accueillant comme endroit !");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("???", `Zdrazvouitié mon bichon.`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chevrette", `D’où vient cette voix de chaudasse endormie ?`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Souillimoff", `C’est moi, Soulisouli.`, ">");
			displayInterlocutor("souillimoff.gif");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chevrette", `Mon dieu, quelle abomination.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Souillimoff", `Vous auriez pas un..`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Souillimoff", `Un p’tit radiateur à dépanne ?`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `On est en plein été ?`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Souillimoff", `Da da, mais j’ai besoin de me frotter vous comprenez ?`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Souillimoff", `J'aime la chaleur...`, "Reculez sorcière !", "Quelle indignité !");

									let options = document.querySelectorAll(".options");
									for (let i = 0; i < options.length; i++) {
										options[i].addEventListener("click", () => {
											dialogActualisation("Souillimoff", `Soukassine !`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Souillimoff", `Je pourrai me frotter sur cette chèvre sinon !`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", `Non non ! J’ai un poil rêche !`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Souillimoff", `Ca ne m’a jamais dérangé !`, ">");
														document.getElementById(">").addEventListener("click", () => {
															refreshImpactChoice();
															dialogActualisation("Chevrette", `${userName} A l’aide ! ALED !!!`, "Trancher Souillimoff.", "Continuer sans Chevrette.");

															document.getElementById(">").addEventListener("click", () => {
																refreshImpactChoice();
																swordSlash();
																dialogActualisation("Souillimoff", `HaaaArgaRggghhh… `, ">");
																document.getElementById(">").addEventListener("click", () => {
																	document.getElementById("swordSlash").style.display = "none";
																	characterFalling("soui");
																	dialogActualisation("Chevrette", `Tu m’as sauvé ${userName}.`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Chevrette", `J’ai une dette envers toi !`, "TKT Chevrette.");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Chevrette", `Continuons, je sens l’aura de Defrancorrible.`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Chevrette", `Elle n’est pas loin..`, ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("#ù$*~¤^", `kliketiklik...........`, ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Chevrette", `C'est elle ${userName} !`, ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Chevrette", `Ou ce qu’il en reste… `, ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Defrancorrible", `tuuuu SoooOORS DU CDIIIIIIII !!!`, ">");
																								displayInterlocutor("defrancoformed.gif");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Chevrette", `Je compte sur toi ${userName} là!`, ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("", `Préparez vous à infliger un maximum de dégat à Defrancorrible avec votre épée.`, ">");
																										document.getElementById(">").addEventListener("click", () => {
																											location.href = "../chapter_11/index1-11.html";
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

															document.getElementById("cont").addEventListener("click", () => {
																gameOver();
																refreshUserDecision(-3);
															});
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
			});
		});
	});
});
