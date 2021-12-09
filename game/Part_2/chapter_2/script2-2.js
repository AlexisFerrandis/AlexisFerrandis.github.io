displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();
displayInterlocutor("chevre-noir.gif");

playChapterMusic(`stage1-12.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Chèvre noir?..");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Ca fait tellement longtemps !`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chèvre noir", `Salut Chevrette.`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chèvre noir", `Qu'est ce que tu fait là?`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chevrette", `Nous venons de terrasser le premier parent !`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `Première étape vers la libération de Saint Rémy !`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chèvre noir", `Ha...`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chèvre noir", `C'est donc toi qui est derrière tout ça.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `Avec ${userName} oui, tu n'as pas l'air enchanté?`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Chèvre noir", `C'est compliqué Chevrette.`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chèvre noir", `Il fallait juste...`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Chèvre noir", `Que tu attendes encore un peu ! `, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", `Je... `, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", `J'ai du mal à comprendre.`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Chèvre noir", `C'est simple.`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Chèvre noir", `Nous avons besoin que l'entité gagne en puissance.`, ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Chèvre noir", `Mais tu es en train de casser nos plans.`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Chevrette", `Quoi?.. `, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Chevrette", `Je comprends pas.. `, "Chevrette?", "Ca va?");
																		let options = document.querySelectorAll(".options");
																		for (let i = 0; i < options.length; i++) {
																			options[i].addEventListener("click", () => {
																				dialogActualisation("Chevrette", `Ca va, ca va...`, ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Chevrette", `Chèvre noir, qu'est ce qui se passe?`, ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Chèvre noir", `Le SainRembrion, il doit nous permettre de savoir!`, ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Chèvre noir", `De répondre à la question ultime !`, "Bonne question !", "La question ultime ?");
																							refreshImpactChoice();

																							document.getElementById(">").addEventListener("click", () => {
																								refreshImpactChoice();
																								dialogActualisation("Chèvre noir", `Je ne tolérerais pas un tel manque de respect.`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Chèvre noir", `Très bien.`, ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Chèvre noir", `C'est l'heure.`, ">");
																										document.getElementById(">").addEventListener("click", () => {
																											dialogActualisation("Chèvre noir", `Du dudu du du du du...`, ">");
																											document.getElementById(">").addEventListener("click", () => {
																												dialogActualisation("Chèvre noir", `DUEL !`, ">");
																												document.getElementById(">").addEventListener("click", () => {
																													location.href = "../chapter_3/index2-3.html";
																												});
																											});
																										});
																									});
																								});
																							});

																							document.getElementById("laqu").addEventListener("click", () => {
																								refreshImpactChoice();
																								dialogActualisation("Chèvre noir", `Oui ${userName}, pourquoi sommes nous là?`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Chèvre noir", `L'existentialité est elle une fin en soit?`, ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Chèvre noir", `Mais nos recherches ont mal tournées...`, ">");
																										document.getElementById(">").addEventListener("click", () => {
																											dialogActualisation("Chèvre noir", `Nous avons révélé le pire là où nous voulions extraire le meilleur.`, ">");
																											document.getElementById(">").addEventListener("click", () => {
																												dialogActualisation("Chèvre noir", `Malgré ça, le SainRembrion doit continuer à évoluer.`, ">");
																												document.getElementById(">").addEventListener("click", () => {
																													dialogActualisation("Chèvre noir", `A terme, il m'apportera ces réponses.`, ">");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("Chèvre noir", `Je vous épargnerai aujourd'hui, en souvenir du bon vieux temps Chevrette.`, ">");
																														document.getElementById(">").addEventListener("click", () => {
																															dialogActualisation("Chèvre noir", `Espérons que nos routes ne se croisent plus.`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																characterLeaving("chev");
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
								});
							});
						});
					});
				});
			});
		});
	});
});
