blackScreenToDisplay("Quelques jours plus tard...");

setTimeout(() => {
	displayThePet();
	refreshUserLife(0);
	thisIsMySword("divinilame.gif");
	displayChevrette();

	playChapterMusic(`stage2-5.mp3`);

	whoIsTalking("Chevrette");
	letterByLetter("Fait pas chaud aujourd'hui !");
	userOptions(">");

	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chevrette", `Et qui voilà ?`, ">");
		document.getElementById(">").addEventListener("click", () => {
			displayInterlocutor("vincent.gif");
			dialogActualisation("Vincent Derez", `Wesh ma p'tite dame, t'as pas un 06 ?`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chevrette", `Pardon ?`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Vincent Derez", `Eh t'es bonne !`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", `Je ne mange pas de ce pain là.`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Vincent Derez", `Et vas y pourquoi tu fais la maline ?`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `La lourdeur.`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Vincent Derez", `Tu sais pas qui chuis moi, je vais te faire…`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("", `BOOM !`, ">");
										document.getElementById("vinc").remove();
										displayInterlocutor("batiatus.gif");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("???", `Fin ..`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("???", `C'est très très grave en fait.`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", `Merci !`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("???", `Ce n'est rien, la vermine à la niche !`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Chevrette", `Qui êtes-vous?`, ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Batiatus", `Je possède plusieurs identités, mais le plus souvent, on m'appelle Batiatus de Sébastopol.`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Chevrette", `Ravie de faire votre connaissance Botiata.`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Batiatus", `De même, avez vous encore besoin de mes services ?`, ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Chevrette", `C'est adorable mais je ne suis pas sûr que vous soyez en mesure de nous aider malheureusement.`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Batiatus", `Essayez quand même.`, ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Chevrette", `Nous essayons de résoudre l'énigme du ténébrement.`, ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Batiatus", `J'ai vu l'actualité, c'est vous qui avez mis un terme à Defrancorrible ?`, ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Chevrette", `C'est nous effectivement.`, ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Batiatus", `Vous êtes des Boss !`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Batiatus", `Et !`, ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Batiatus", `Je pense être en mesure de vous aider.`, ">");
																										document.getElementById(">").addEventListener("click", () => {
																											dialogActualisation("Chevrette", `C'est impossible ?`, ">");
																											document.getElementById(">").addEventListener("click", () => {
																												dialogActualisation("Batiatus", `Mais si c'est possible !`, ">");
																												document.getElementById(">").addEventListener("click", () => {
																													dialogActualisation("Batiatus", `Il s'avère que je connais l'emplacement de l’antre du Gardien des Souvenirs.`, ">");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("Chevrette", `Le Gardien des Souvenirs ?`, ">");
																														document.getElementById(">").addEventListener("click", () => {
																															dialogActualisation("Batiatus", `Le Passeur des Mémoires.`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																dialogActualisation("Chevrette", `Le Passeur des Mémoires ?`, ">");
																																document.getElementById(">").addEventListener("click", () => {
																																	dialogActualisation("Batiatus", `Une Tête de Canard.`, ">");
																																	document.getElementById(">").addEventListener("click", () => {
																																		dialogActualisation("Chevrette", `Oui.`, ">");
																																		document.getElementById(">").addEventListener("click", () => {
																																			dialogActualisation("Batiatus", `Je pense qu'il sera en mesure de répondre à certaines de vos questions.`, ">");
																																			document.getElementById(">").addEventListener("click", () => {
																																				dialogActualisation("Batiatus", `Suivez moi.`, ">");
																																				document.getElementById(">").addEventListener("click", () => {
																																					location.href = `../chapter_6/index2-6.html`;
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
}, 4000);

document.getElementById("pauseBtn").addEventListener("click", () => {
	playSoundEffect("menu-click.wav");
	document.getElementById("pauseMenu").style.display = "block";
});
document.getElementById("closePauseMenuBtn").addEventListener("click", () => {
	playSoundEffect("menu-click.wav");
	document.getElementById("pauseMenu").style.display = "none";
});
document.getElementById("saveAndQuitBtn").addEventListener("click", () => {
	localStorage.setItem("userSave", window.location.href);
	location.href = "../../../index.html";
});
