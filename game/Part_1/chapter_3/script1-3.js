refreshUserLife(0);
playChapterMusic(`stage1-3.mp3`);

whoIsTalking("???");
letterByLetter("MMeeeeeeeeeuuuuuuuuuh !!");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Quel acceuil !`, ">");
	displayChevrette();
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("???", `GrouNMF !`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chevrette", `Attention ${userName} !`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("???", `DReEEEeeE !`, ">");
				refreshUserLife(-1);
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("???", `Arrete Torocho !`, ">");
					displayInterlocutor("torocho.gif");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("???", `Je suis désolé !`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("???", `S’il vous plait ne lui faite pas de mal !`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `C’était pas notre intention, mais votre animal est un peu agressif !`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("???", `Disons qu’il a un peu peur des inconnus mais il n’est pas méchant.`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Andréa-Fiona", `Je suis Andréa-Fiona, j'ai récupéré cette ferme après l'incendie d'il y'a 10 ans.`, ">");
										displayTheThird("andrea.gif");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Chevrette", `Bonjour, vous étiez là lors du commencement?`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Andréa-Fiona", `Le ténébrement vous voulez dire?`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", `Plait-il?`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Andréa-Fiona", `Nous appelons le jour ou tout à changé le Ténébrement.`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Andréa-Fiona", `Mais j'étais bien présente...`, ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Andréa-Fiona", `J'ai pu apercevoir une lumière étrange émaner du collège et se diriger vers le ciel !`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Andréa-Fiona", `Mais ce n'était pas la seule, il y'en avait deux autres qui rejoingnaient la première dans les nuages.`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Andréa-Fiona", `L'atmosphère à changée d'un coup et la ferme à commencée à prendre feu.`, ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Andréa-Fiona", `J'ai réussi à sauver Torocho des flammes au dernier moment.`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Chevrette", `Le point de départ n'était donc pas uniquement le collège?`, ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Andréa-Fiona", `Je ne pense pas, j'ai l'impression que la réunion de ces trois faisceaux est à l'origine de la situation.`, "Donc trois Chetans?", "Vous avez une explication?");
																					let options = document.querySelectorAll(".options");
																					for (let i = 0; i < options.length; i++) {
																						options[i].addEventListener("click", () => {
																							dialogActualisation("Andréa-Fiona", `Difficile à dire.`, ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Andréa-Fiona", `J'étais loin, j'ai vu ces trois lumières se retrouver dans une explosion tonitruante.`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Andréa-Fiona", `Mais je sais qu'une d'elle venait du centre ville.`, "Ca sent le danger Chevrette, non?", "Comment pouvons nous revenir à la normal?");
																									let options = document.querySelectorAll(".options");
																									for (let i = 0; i < options.length; i++) {
																										options[i].addEventListener("click", () => {
																											dialogActualisation("Chevrette", `Je ne sais pas...`, ">");
																											document.getElementById(">").addEventListener("click", () => {
																												dialogActualisation("Chevrette", `Mais il va falloir se battre.`, "Sans arme?", "Tu es une chèvre.");
																												refreshImpactChoice();

																												document.getElementById(">").addEventListener("click", () => {
																													refreshImpactChoice();
																													refreshUserDecision(1);
																													dialogActualisation("Chevrette", `Je connais quelqu'un qui pourra nous en procurer.`, "Et ce sera suffisant?", "Où?");
																													let options = document.querySelectorAll(".options");
																													for (let i = 0; i < options.length; i++) {
																														options[i].addEventListener("click", () => {
																															dialogActualisation("Chevrette", `C'est un ami de longue date et il peut faire des miracles.`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																dialogActualisation("Chevrette", `Il se trouve dans la péninsule de Gif.`, ">");
																																document.getElementById(">").addEventListener("click", () => {
																																	dialogActualisation("Andréa-Fiona", `Ce ne serait pas...`, ">");
																																	document.getElementById(">").addEventListener("click", () => {
																																		dialogActualisation("Chevrette", `Si, Jo le forgereur des montagnes.`, ">");
																																		document.getElementById(">").addEventListener("click", () => {
																																			dialogActualisation("Andréa-Fiona", `La route est longue jusqu'à sa demeure.`, ">");
																																			document.getElementById(">").addEventListener("click", () => {
																																				dialogActualisation("Andréa-Fiona", `Acceptez cette potion revigorante pour votre périple.`, "Merci");
																																				refreshUserLife(1);
																																				document.getElementById(">").addEventListener("click", () => {
																																					dialogActualisation("Chevrette", `Tu es prêt ${userName}?`, ">");
																																					document.getElementById(">").addEventListener("click", () => {
																																						dialogActualisation("Chevrette", `Allons y!`, ">");
																																						document.getElementById(">").addEventListener("click", () => {
																																							location.href = "../chapter_4/index1-4.html";
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

																												document.getElementById("tues").addEventListener("click", () => {
																													refreshImpactChoice();
																													refreshUserDecision(-1);
																													console.log("Ho u ridiculize the Goat :'(");
																													dialogActualisation("Chevrette", `Certe, mais magique.`, ">");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("Chevrette", `Et je connais quelqu'un qui pourra nous aider.`, "Et ce sera suffisant?", "Qui?");
																														let options = document.querySelectorAll(".options");
																														for (let i = 0; i < options.length; i++) {
																															options[i].addEventListener("click", () => {
																																dialogActualisation("Chevrette", `C'est un ami de longue date et il peut faire des miracles.`, ">");
																																document.getElementById(">").addEventListener("click", () => {
																																	dialogActualisation("Chevrette", `Il se trouve dans la péninsule de Gif.`, ">");
																																	document.getElementById(">").addEventListener("click", () => {
																																		dialogActualisation("Andréa-Fiona", `Ce ne serait pas...`, ">");
																																		document.getElementById(">").addEventListener("click", () => {
																																			dialogActualisation("Chevrette", `Si, Jo le forgereur des montagnes.`, ">");
																																			document.getElementById(">").addEventListener("click", () => {
																																				dialogActualisation("Andréa-Fiona", `La route est longue jusqu'à sa demeure.`, ">");
																																				document.getElementById(">").addEventListener("click", () => {
																																					dialogActualisation("Andréa-Fiona", `Je ne peux que vous souhaiter bonne chance.`, "Merci");
																																					document.getElementById(">").addEventListener("click", () => {
																																						dialogActualisation("Chevrette", `Tu es prêt ${userName}?`, ">");
																																						document.getElementById(">").addEventListener("click", () => {
																																							dialogActualisation("Chevrette", `Allons y!`, ">");
																																							document.getElementById(">").addEventListener("click", () => {
																																								location.href = "../chapter_4/index1-4.html";
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
																									}
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
		});
	});
});
