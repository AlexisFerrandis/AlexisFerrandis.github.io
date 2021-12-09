refreshUserLife(0);
playChapterMusic(`stage1-5.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Pas facile le réveil aujourd'hui.");
userOptions(">");
displayChevrette();

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Comment vas tu ${userName} ?`, "Ca va.", "Un peu fatigué.", "Belle gueule de bois.");
	let options = document.querySelectorAll(".options");
	for (let i = 0; i < options.length; i++) {
		options[i].addEventListener("click", () => {
			dialogActualisation("Chevrette", `Il va falloir être d'attaque aujourd'hui.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Shinoix", `Halte là !`, ">");
				document.getElementById(">").addEventListener("click", () => {
					displayInterlocutor("shinoix.gif");
					dialogActualisation("Chevrette", `Bonjour, nous souhaiterions nous entretenir avec votre chef.`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Shinoix", `Vous pourrez continuer sur nos terre si vous répondez à mon énigme.`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `Continuez Jackson, vous m'intéressez.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								refreshImpactChoice();
								dialogActualisation("Shinoix", `Quel est votre nom?`, "Etienne Houzey", "Sheshounet", userName, "Kimono Kaki");

								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Shinoix", "Dommage !", ">");
									refreshUserLife(-1);
									refreshImpactChoice();
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Shinoix", "Retour à la case départ !", ">");
										document.getElementById(">").addEventListener("click", () => {
											window.location.reload();
										});
									});
								});
								document.getElementById("shes").addEventListener("click", () => {
									dialogActualisation("Shinoix", "Dommage !", ">");
									refreshUserLife(-1);
									refreshImpactChoice();
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Shnoix", "Retour à la case départ !", ">");
										document.getElementById(">").addEventListener("click", () => {
											window.location.reload();
										});
									});
								});
								document.getElementById("kimo").addEventListener("click", () => {
									dialogActualisation("Shinoix", "Dommage !", ">");
									refreshUserLife(-1);
									refreshImpactChoice();
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Shnoix", "Retour à la case départ !", ">");
										document.getElementById(">").addEventListener("click", () => {
											window.location.reload();
										});
									});
								});
								document.getElementById(get4LetttersForId(userName)).addEventListener("click", () => {
									dialogActualisation("Shinoix", "Hmm, c'était peut être trop facile.", ">");
									refreshImpactChoice();
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("", "Il disparue dans un nuage de fumée.", ">");
										document.getElementById(">").addEventListener("click", () => {
											characterFalling("shin");
											dialogActualisation("Chevrette", "Nous devrions y arriver sans encombre.", ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Shinoix", "Halte là !", ">");
												displayInterlocutor("shinoix.gif");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", "Heu, nous venons voir votre chef !", ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Shinoix", "Vous pourrez continuer sur nos terre si vous répondez à mon énigme.", ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Chevrette", "Une sensation de déjà vu.", ">");
															document.getElementById(">").addEventListener("click", () => {
																refreshImpactChoice();
																dialogActualisation("Shinoix", "Qui de l'oeuf ou la poule est arrivé en premier?", "La poule.", "L'oeuf");
																let options = document.querySelectorAll(".options");
																for (let i = 0; i < options.length; i++) {
																	options[i].addEventListener("click", () => {
																		refreshImpactChoice();
																		dialogActualisation("Shinoix", `Wow, nous ne devrions pas vous sous estimer...`, ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("", "Il disparue dans un nuage de fumée.", ">");
																			characterFalling("shin");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Chevrette", "Comment tu sais ça ?", ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Shinoix", "Halte là !", ">");
																					displayInterlocutor("shinoix.gif");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Chevrette", "Un classique.", ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Shinoix", "Vous pourrez continuer sur nos terre si vous répondez à mon énigme.", ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Chevrette", "Oui on commence à connaitre.", ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Shinoix", "Mon preeuuumier est dégoulinant !", ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Shinoix", "Mon deuuuuuxième arrive à point !", ">");
																										document.getElementById(">").addEventListener("click", () => {
																											dialogActualisation("Shinoix", "Et mon troisièèèèèème sort du cu...", ">");
																											document.getElementById(">").addEventListener("click", () => {
																												characterFalling("shin");
																												dialogActualisation("", "Un tigre sortie des fougères, attrapa le Shinoix et l'emporta dans les fins fond du Marécage.", ">");
																												document.getElementById(">").addEventListener("click", () => {
																													dialogActualisation("Chevrette", "Dommage elle avait l'air marrante celle là.", ">");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("Chevrette", "Y'en à d'autres?", ">");
																														document.getElementById(">").addEventListener("click", () => {
																															dialogActualisation("???", "Non...", ">");
																															document.getElementById(">").addEventListener("click", () => {
																																dialogActualisation("???", "Il ne reste plus que moi.", ">");
																																document.getElementById(">").addEventListener("click", () => {
																																	dialogActualisation("Chevrette", "Vous devez être le chef des Shinoix?", ">");
																																	document.getElementById(">").addEventListener("click", () => {
																																		dialogActualisation("XinJinPin FinLin", "On m'appel XinJinPin FinLin.", ">");
																																		displayInterlocutor("xinjinpin.gif");
																																		document.getElementById(">").addEventListener("click", () => {
																																			dialogActualisation("Chevrette", "Très bien Xin, nous avons besoin de Beskar.", ">");
																																			document.getElementById(">").addEventListener("click", () => {
																																				dialogActualisation("XinJinPin FinLin", "Petit animal, le Beskar est un matériau rare et convoité.", ">");
																																				document.getElementById(">").addEventListener("click", () => {
																																					dialogActualisation("XinJinPin FinLin", "Pourquoi en auriez vous besoin?", "Pour vaincre l'entité.", "Forger une arme.");
																																					let options = document.querySelectorAll(".options");
																																					for (let i = 0; i < options.length; i++) {
																																						options[i].addEventListener("click", () => {
																																							dialogActualisation("XinJinPin FinLin", `C'est un dessein ambitieux que vous souhaitez accomplir.`, ">");
																																							document.getElementById(">").addEventListener("click", () => {
																																								dialogActualisation("XinJinPin FinLin", "Et vous êtes arrivé jusqu'à moi, je vous propose un marché.", ">");
																																								document.getElementById(">").addEventListener("click", () => {
																																									refreshImpactChoice();
																																									dialogActualisation("XinJinPin FinLin", "En échange du Beskar, je veux récupérer la dépouille de l'entité vaincu.", "Chevrette?", "Marché conclu.");
																																									let options = document.querySelectorAll(".options");
																																									for (let i = 0; i < options.length; i++) {
																																										options[i].addEventListener("click", () => {
																																											refreshImpactChoice();
																																											dialogActualisation("Chevrette", `Nous n'avons pas vraiment le choix.`, ">");
																																											document.getElementById(">").addEventListener("click", () => {
																																												dialogActualisation("Chevrette", "Très bien Xin, nous acceptons.", ">");
																																												document.getElementById(">").addEventListener("click", () => {
																																													dialogActualisation("XinJinPin FinLin", "Vous ne le regretterez pas.", ">");
																																													document.getElementById(">").addEventListener("click", () => {
																																														dialogActualisation("XinJinPin FinLin", "Voici, le Beskar.", ">");
																																														document.getElementById(">").addEventListener("click", () => {
																																															dialogActualisation("Chevrette", "J'ai quand même l'impression que tout n'est pas clair.", ">");
																																															document.getElementById(">").addEventListener("click", () => {
																																																dialogActualisation("XinJinPin FinLin", "C'est aussi... un investissement que je suis en train de faire.", ">");
																																																document.getElementById(">").addEventListener("click", () => {
																																																	dialogActualisation("XinJinPin FinLin", "Je n'ai aucune garantie sur votre réussite.", ">");
																																																	document.getElementById(">").addEventListener("click", () => {
																																																		dialogActualisation("Chevrette", `Oui.. ${userName}, retournons voir le Forgereur.`, ">");
																																																		document.getElementById(">").addEventListener("click", () => {
																																																			location.href = "../chapter_6/index1-6.html";
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
	}
});
