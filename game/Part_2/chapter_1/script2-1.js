displayChevrette();
displayInterlocutor("chevre-noir.gif");

playChapterMusic(`stage2-1.mp3`);

whoIsTalking("Chevrette");
letterByLetter("... Et voilà comment je me suis retrouvé dans cette orgie clandestine !");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chèvre noir", `Haha Chevrette tu m'en fais voir de toute les couleurs !`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chevrette", `Je sais pas à qui je raconterai tout ça quand tu partiras...`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chèvre noir", `Je ne me fais pas de soucis.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chèvre noir", `Tes histoires sont toujours passionnantes.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `Mouai...`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", `Elle dure combien de temps ton initiation ?`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chèvre noir", `Quelques mois.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chèvre noir", `Ca passera vite !`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Chèvre noir", `Et je serai peut être en mesure de comprendre !`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chevrette", `Je te le souhaite.`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Chevrette", `Mais je suis pas sur que la question de l'humanité soit résolu avec une initiation.`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chèvre noir", `Ho !`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chèvre noir", `Pètes un coup Chevrette.`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Chèvre noir", `Ce sera une expérience extraordinaire dans le pire des cas.`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Chèvre noir", `J'espère que l'étude de l'atomisation pourra m'apporter certaines réponses.`, ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Chevrette", `Bien sur.`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Chevrette", `Excuse moi, c'est juste que j'ai un peu peur que tu t'en ailles.`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Chevrette", `Je serai toute seule...`, ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Chèvre noir", `Aucun problème Chevrette, je comprends.`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Chèvre noir", `Mais je sais que ce me sera bénéfique.`, ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Chevrette", `C'est le principal.`, ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Chevrette", `Promets moi que tu ne m'oublieras jamais !`, ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Chèvre noir", `Jamais je ne t'oublierais Chevrette.`, ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Chevrette", `Parfait.`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									location.href = "../chapter_2/index2-2.html";
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
