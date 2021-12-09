refreshUserLife(0);
playChapterMusic(`stage1-4.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Jo !");
userOptions(">");
displayChevrette();

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Il est à nous !`, ">");
	displayInterlocutor("jo.gif");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Jo", `Magnifique !`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Jo", `Je me mets au travail.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("", `...`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("", `Bing! Bang! Tching!`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("", `...`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Jo", `Et voilà, votre lame !`, ">");
							playSoundEffect("new-item.mp3");
							newItemDisplay("divinilame.gif");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `Merci beaucoup Jo !`, "Merci.");
								document.getElementById("newItemDisplay").remove();
								thisIsMySword("divinilame.gif");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Jo", `J'ai pris l'initiative de lui donner un petit nom.`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Jo", `DIVINILAME!`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Jo", `L'épée suprême qui libérera nos contrées.`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Jo", `J’espère que ce sera suffisant.`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", `Elle est parfaite Jo !`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Jo", `Haha, c’est plus facile avec du Beskar.`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Jo", `Chevrette,`, ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Jo", `J'ai reçu une lettre pour vous pendant votre absence.`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Chevrette", `Etonnant, je n'attendais pas de courrier.`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Lettre de V", `"Bonjour,"`, ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Lettre de V", `"J’ai des informations qui pourraient vous intéresser."`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Lettre de V", `"Si vous souhaitez en savoir plus,"`, ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Lettre de V", `"Retrouvez-moi à Lewisanom."`, ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Lettre de V", `"V"`, ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Chevrette", `C’est la seule piste que nous ayons pour le moment.`, ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Chevrette", `Et... je ne saurais expliquer pourquoi... mais j'ai confiance.`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Chevrette", `Allons y ${userName}, à la prochaine Jo !`, ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Jo", `Prends soin de toi petite chèvre.`, ">");
																										document.getElementById(">").addEventListener("click", () => {
																											location.href = "../chapter_7/index1-7.html";
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
