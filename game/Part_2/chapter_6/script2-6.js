displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();
displayInterlocutor("batiatus.gif");

playChapterMusic(`stage2-6.mp3`);

whoIsTalking("Batiatus");
letterByLetter("Je vous laisse ici, j'ai à faire.");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Merci pour tout Batiatus, au plaisir de se retrouver.`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Batiatus", `A la prochaine les coupains.`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chevrette", `Bon ${userName}, quelles questions devons-nous poser en priorité ?`, "Où se trouvent les parents ?", "Où se trouve le SainRembrion ?");
			characterLeaving("bati");
			refreshImpactChoice();

			document.getElementById(">").addEventListener("click", () => {
				refreshImpactChoice();
				document.getElementById("bati").style.display = "none";
				dialogActualisation("Chevrette", `Ca me semble pertinent.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `Bonjour ?`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", `Gardien des souvenirs ?`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `...`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `Passeurs de Mémoires ?`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Chevrette", `...`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chevrette", `Tête de Canard ?`, ">");
										displayInterlocutor("tete-de-canard.gif");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Tête de Canard", `Qui s'aventure sur mes terres ?`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", `Voici ${userName}, et je suis Chevrette.`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Tête de Canard", `Pas très obèse comme animal.`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Chevrette", `Merci ?`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Tête de Canard", `Je vous écoute. Je répondrai à vos questions.`, ">");

															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Chevrette", `Où sont Demouniraque et Marcelediction ?`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Tête de Canard", `Ho...`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Tête de Canard", `Démouniraque est reclu dans son arrière boutique.`, ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Tête de Canard", `Marcélédiction quand à lui se trouve dans la prison de la ville.`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Chevrette", `Très bien, nous savons maintenant où les trouver.`, ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Chevrette", `J'ai une autre question, j'ai un peu peur...`, ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Chevrette", `Mais je dois savoir.`, ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Chevrette", `Qui est à l'origine du ténébrement?`, ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Tête de Canard", `Je redoutais cette question.`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Tête de Canard", `Ne vous méprenez pas, mais il s'agit..`, ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Tête de Canard", `Du SRG.`, ">");
																										document.getElementById(">").addEventListener("click", () => {
																											dialogActualisation("Tête de Canard", `Chèvre Noir, Bito, Mc50, Dark Mahé et..`, ">");
																											document.getElementById(">").addEventListener("click", () => {
																												dialogActualisation("Tête de Canard", `Moi même.`, ">");
																												document.getElementById(">").addEventListener("click", () => {
																													dialogActualisation("Chevrette", `Mais pourquoi ?!`, ">");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("Tête de Canard", `Nous nous sommes tous rencontrés pleins d'idéaux.`, ">");
																														document.getElementById(">").addEventListener("click", () => {
																															dialogActualisation("Tête de Canard", `Et ensemble, nous avions le pouvoir pour les rendre possibles.`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																dialogActualisation("Tête de Canard", `Nous avons commencé à manipuler une magie qui nous dépasse.`, ">");
																																document.getElementById(">").addEventListener("click", () => {
																																	dialogActualisation("Tête de Canard", `Nous avions chacun un rêve qui était envisageable grâce à cette magie.`, ">");
																																	document.getElementById(">").addEventListener("click", () => {
																																		dialogActualisation("Tête de Canard", `Je devais être en mesure de conserver tous les souvenirs du monde.`, ">");
																																		document.getElementById(">").addEventListener("click", () => {
																																			dialogActualisation("Tête de Canard", `Il s'est avéré que malgré nos convictions, cette magie se soit retournée contre nous.`, ">");
																																			document.getElementById(">").addEventListener("click", () => {
																																				dialogActualisation("Tête de Canard", `Peut être qu'à son apogée, le SainRembrion sera capable de réaliser nos ambitions.`, ">");
																																				document.getElementById(">").addEventListener("click", () => {
																																					refreshImpactChoice();
																																					dialogActualisation("Tête de Canard", `C'est pour cela que nous devons encore le laisser croître.`, "Je ne vous laisserai pas faire !", "Mais à quel prix?");

																																					document.getElementById(">").addEventListener("click", () => {
																																						refreshImpactChoice();
																																						dialogActualisation("Tête de Canard", `Tapis Design !`, ">");
																																						document.getElementById(">").addEventListener("click", () => {
																																							location.href = `../chapter_7/index2-7.html`;
																																						});
																																					});

																																					document.getElementById("mais").addEventListener("click", () => {
																																						refreshImpactChoice();
																																						dialogActualisation("Tête de Canard", `Le prix est lourd.`, ">");
																																						document.getElementById(">").addEventListener("click", () => {
																																							dialogActualisation("Tête de Canard", `Mais c'est un sacrifice nécessaire.`, ">");
																																							document.getElementById(">").addEventListener("click", () => {
																																								dialogActualisation("Tête de Canard", `Pour le bien être de la population.`, ">");
																																								document.getElementById(">").addEventListener("click", () => {
																																									dialogActualisation("Tête de Canard", `Ninja flex !`, ">");
																																									characterLeaving("tete");
																																									document.getElementById(">").addEventListener("click", () => {
																																										dialogActualisation("Chevrette", `Mais où est il passé?`, ">");
																																										document.getElementById(">").addEventListener("click", () => {
																																											dialogActualisation("Chevrette", `Beaucoup d'informations aujourd'hui.`, ">");
																																											document.getElementById(">").addEventListener("click", () => {
																																												dialogActualisation("Chevrette", `Mais nous savons où se trouve les parents.`, ">");
																																												document.getElementById(">").addEventListener("click", () => {
																																													dialogActualisation("Chevrette", `Allons les dénicher ${userName} !`, ">");
																																													document.getElementById(">").addEventListener("click", () => {
																																														location.href = "./chapter_9/index2-9.html";
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
									});
								});
							});
						});
					});
				});
			});

			document.getElementById("oùse").addEventListener("click", () => {
				refreshImpactChoice();
				document.getElementById("bati").style.display = "none";
				dialogActualisation("Chevrette", `Ca me semble pertinent.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `Bonjour ?`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", `Gardien des souvenirs ?`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `...`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `Passeurs de Mémoires ?`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Chevrette", `...`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chevrette", `Tête de Canard ?`, ">");
										displayInterlocutor("tete-de-canard.gif");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Tête de Canard", `Qui s'aventure sur mes terres ?`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", `Voici ${userName}, et je suis Chevrette.`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Tête de Canard", `Pas très obèse comme animal.`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Chevrette", `Merci ?`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Tête de Canard", `Je vous écoute. Je répondrai à vos questions.`, ">");

															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Chevrette", `Où se trouve le SainRembrion ?`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Tête de Canard", `Je ne sais pas...`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Tête de Canard", `Il se développe doucement dans l'espace et le temps.`, ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Tête de Canard", `En revanche je connais la position de Marcélédiction et Démouniraque.`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Tête de Canard", `Démouniraque est reclu dans son arrière boutique.`, ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Tête de Canard", `Marcélédiction quand à lui se trouve dans la prison de la ville.`, ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Chevrette", `Très bien, nous savons maintenant où les trouver.`, ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Chevrette", `J'ai une autre question, j'ai un peu peur...`, ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Chevrette", `Mais je dois savoir.`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Chevrette", `Qui est à l'origine du ténébrement?`, ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Tête de Canard", `Je redoutais cette question.`, ">");
																										document.getElementById(">").addEventListener("click", () => {
																											dialogActualisation("Tête de Canard", `Ne vous méprenez pas, mais il s'agit..`, ">");
																											document.getElementById(">").addEventListener("click", () => {
																												dialogActualisation("Tête de Canard", `Du SRG.`, ">");
																												document.getElementById(">").addEventListener("click", () => {
																													dialogActualisation("Tête de Canard", `Chèvre Noir, Bito, Mc50, Dark Mahé et..`, ">");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("Tête de Canard", `Moi même.`, ">");
																														document.getElementById(">").addEventListener("click", () => {
																															dialogActualisation("Chevrette", `Mais pourquoi ?!`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																dialogActualisation("Tête de Canard", `Nous nous sommes tous rencontrés pleins d'idéaux.`, ">");
																																document.getElementById(">").addEventListener("click", () => {
																																	dialogActualisation("Tête de Canard", `Et ensemble, nous avions le pouvoir pour les rendre possibles.`, ">");
																																	document.getElementById(">").addEventListener("click", () => {
																																		dialogActualisation("Tête de Canard", `Nous avons commencé à manipuler une magie qui nous dépasse.`, ">");
																																		document.getElementById(">").addEventListener("click", () => {
																																			dialogActualisation("Tête de Canard", `Nous avions chacun un rêve qui était envisageable grâce à cette magie.`, ">");
																																			document.getElementById(">").addEventListener("click", () => {
																																				dialogActualisation("Tête de Canard", `Je devais être en mesure de conserver tous les souvenirs du monde.`, ">");
																																				document.getElementById(">").addEventListener("click", () => {
																																					dialogActualisation("Tête de Canard", `Il s'est avéré que malgré nos convictions, cette magie se soit retournée contre nous.`, ">");
																																					document.getElementById(">").addEventListener("click", () => {
																																						dialogActualisation("Tête de Canard", `Peut être qu'à son apogée, le SainRembrion sera capable de réaliser nos ambitions.`, ">");
																																						document.getElementById(">").addEventListener("click", () => {
																																							refreshImpactChoice();
																																							dialogActualisation("Tête de Canard", `C'est pour cela que nous devons encore le laisser croître.`, "Je ne vous laisserai pas faire !", "Mais à quel prix?");

																																							document.getElementById(">").addEventListener("click", () => {
																																								refreshImpactChoice();
																																								dialogActualisation("Tête de Canard", `Tapis Design !`, ">");
																																								document.getElementById(">").addEventListener("click", () => {
																																									location.href = `../chapter_7/index2-7.html`;
																																								});
																																							});

																																							document.getElementById("mais").addEventListener("click", () => {
																																								refreshImpactChoice();
																																								dialogActualisation("Tête de Canard", `Le prix est lourd.`, ">");
																																								document.getElementById(">").addEventListener("click", () => {
																																									dialogActualisation("Tête de Canard", `Mais c'est un sacrifice nécessaire.`, ">");
																																									document.getElementById(">").addEventListener("click", () => {
																																										dialogActualisation("Tête de Canard", `Pour le bien être de la population.`, ">");
																																										document.getElementById(">").addEventListener("click", () => {
																																											dialogActualisation("Tête de Canard", `Ninja flex !`, ">");
																																											characterLeaving("tete");
																																											document.getElementById(">").addEventListener("click", () => {
																																												dialogActualisation("Chevrette", `Mais où est il passé?`, ">");
																																												document.getElementById(">").addEventListener("click", () => {
																																													dialogActualisation("Chevrette", `Beaucoup d'informations aujourd'hui.`, ">");
																																													document.getElementById(">").addEventListener("click", () => {
																																														dialogActualisation("Chevrette", `Mais nous savons où se trouve les parents.`, ">");
																																														document.getElementById(">").addEventListener("click", () => {
																																															dialogActualisation("Chevrette", `Allons les dénicher ${userName} !`, ">");
																																															document.getElementById(">").addEventListener("click", () => {
																																																location.href = "../chapter_9/index2-9.html";
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
