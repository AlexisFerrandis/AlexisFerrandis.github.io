refreshUserLife(0);
playChapterMusic(`stage1-4.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Forgereur?");
userOptions(">");
displayChevrette();

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Jo", `Chevrette c'est toi ?`, ">");
	document.getElementById(">").addEventListener("click", () => {
		displayInterlocutor("jo.gif");
		dialogActualisation("Chevrette", `Ca faisait longtemps vieille branche !`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Jo", `Haha, rentrez donc, le chemin n'a pas du être facile.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Jo", `Qui t'accompagne petite chèvre ?`, `Je suis ${userName}.`, "L’enfant tombé du ciel.");
				let options = document.querySelectorAll(".options");
				for (let i = 0; i < options.length; i++) {
					options[i].addEventListener("click", () => {
						dialogActualisation("Jo", `Le libérateur?`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Jo", "Voilà qui est intéressant.", ">");
							document.getElementById(">").addEventListener("click", () => {
								refreshImpactChoice();
								dialogActualisation("Jo", "Vous allez tout me raconter, je vous sers à boire?", "De l'eau pour moi.", "Une cervoise de la région.", "Un de vos cocktail de renom.");

								document.getElementById(">").addEventListener("click", () => {
									refreshImpactChoice();
									dialogActualisation("Chevrette", "Un kaphéo KK s'il te plaît.", ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Jo", "Vous devez être fatigué je comprends.", ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Jo", "Dites moi tout, comment puis je vous aider?", ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", `${userName} et moi même nous sommes mis en quête de libérer la Vallée.`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", "Nous aimerions déjà savoir si tu sais quelque chose à propos des faisceaux de lumières ?", ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Jo", "Lors du Ténébrement ?", ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Chevrette", "C'est apparemment comme ça qu'on en parle.", ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Jo", "Quel terrible jour pour notre pays.", ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Jo", "Mais je n'en sais pas plus que les autres.", ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Jo", "J'ai appercu comme tout le monde ces trois lumières pointer vers le ciel,", ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Jo", "Puis l'explosion.", ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Jo", "Les changements de couleurs, l'odeur souffrée, la gravité plus imposante.", ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Jo", "Et ce sentiment, qu'une entité obscure nous hantait.", ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Chevrette", "Cette entité, c'est elle que nous devons défaire !", ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Chevrette", "Y'a t'il un moyen de s'en débarrasser?", ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Jo", "Peut-être avec de l'acier Beskar, mais il est compliqué de s'en procurer.", ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Jo", "Si vous m'en rapportez, je pourrais forger une arme digne de ce nom.", "Où pouvons nous en trouver ?");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Jo", `Au Marécage ${userName}, mais c'est un endroit dangereux.`, "C'est à dire?", "Je n'ai pas peur");
																										let options = document.querySelectorAll(".options");
																										for (let i = 0; i < options.length; i++) {
																											options[i].addEventListener("click", () => {
																												dialogActualisation("Jo", `C'est le territoire des shinoix, ils sont malins et essaierons de vous dépouiller avec leurs énigmes...`, ">");
																												document.getElementById(">").addEventListener("click", () => {
																													dialogActualisation("jo", "Mais si vous répondez correctement, le Beskar sera à vous.", ">");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("jo", "Passez la nuit ici, vous repartirez demain avec les idées claires.", "C'est le plus raisonnable.", "Ne perdons pas de temps !");

																														document.getElementById(">").addEventListener("click", () => {
																															dialogActualisation("Chevrette", `Nous partirons à l'aube.`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																window.location.href = "../chapter_5/index1-5.html";
																															});
																														});

																														document.getElementById("nepe").addEventListener("click", () => {
																															dialogActualisation("Chevrette", `Je suis prète !`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																window.location.href = "../chapter_5/index1-5.html";
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

								document.getElementById("unec").addEventListener("click", () => {
									refreshImpactChoice();
									dialogActualisation("Chevrette", "Je prendrais bien un Vodkachino.", ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Jo", "Fidèle à elle même.", ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Jo", "Dites moi tout, comment puis je vous aider?", ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", `${userName} et moi même nous sommes mis en quête de libérer la Vallée.`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", "Nous aimerions déjà savoir si tu sais quelque chose à propos des faisceaux de lumières ?", ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Jo", "Lors du Ténébrement ?", ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Chevrette", "C'est apparemment comme ça qu'on en parle.", ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Jo", "Quel terrible jour pour notre pays.", ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Jo", "Mais je n'en sais pas plus que les autres.", ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Jo", "J'ai appercu comme tout le monde ces trois lumières pointer vers le ciel,", ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Jo", "Puis l'explosion.", ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Jo", "Les changements de couleurs, l'odeur souffrée, la gravité plus imposante.", ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Jo", "Et ce sentiment, qu'une entité obscure nous hantait.", ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Chevrette", "Cette entité, c'est elle que nous devons défaire !", ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Chevrette", "Y'a t'il un moyen de s'en débarrasser?", ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Jo", "Peut-être avec de l'acier Beskar, mais il est compliqué de s'en procurer.", ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Jo", "Si vous m'en rapportez, je pourrais forger une arme digne de ce nom.", "Où pouvons nous en trouver ?");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Jo", `Au Marécage ${userName}, mais c'est un endroit dangereux.`, "C'est à dire?", "Je n'ai pas peur");
																										let options = document.querySelectorAll(".options");
																										for (let i = 0; i < options.length; i++) {
																											options[i].addEventListener("click", () => {
																												dialogActualisation("Jo", `C'est le territoire des shinoix, ils sont malins et essaierons de vous dépouiller avec leurs énigmes...`, ">");
																												document.getElementById(">").addEventListener("click", () => {
																													dialogActualisation("jo", "Mais si vous répondez correctement, le Beskar sera à vous.", ">");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("jo", "Passez la nuit ici, vous repartirez demain avec les idées claires.", "C'est le plus raisonnable.", "Ne perdons pas de temps !");

																														document.getElementById(">").addEventListener("click", () => {
																															dialogActualisation("Chevrette", `Nous partirons à l'aube`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																window.location.href = "../chapter_5/index1-5.html";
																															});
																														});

																														document.getElementById("nepe").addEventListener("click", () => {
																															dialogActualisation("Chevrette", `Je suis prète !`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																window.location.href = "../chapter_5/index1-5.html";
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

								document.getElementById("unde").addEventListener("click", () => {
									refreshUserLife(1);
									refreshImpactChoice();
									dialogActualisation("Chevrette", "Je prendrais la même chose.", ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Jo", "Ma réputation me précède à ce que je vois.", ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Jo", "Je vais vous préparer mon célèbre Sainremyto dans ce cas là.", ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", "C'est pas un peu trop fort ?", ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Jo", "Si, Ca dépend combien on en boit.", ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("", "Après quelque gorgées...", ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Chevrette", "Burp.", ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Jo", "Noice, alors comment puis je vous aider?", ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Chevrette", `${userName} et moi on c'est dit que *hic* on allait libérer la ville !`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Chevrette", "Tu sais quoi à propos des lu *hic* mières dans le ciel ?", ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Jo", "Lors du Ténébrement ?", ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Chevrette", "Wi ca ! Etonnant comme nom non?", "Ze sPecIaL wI");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Jo", "Quel terrible jour pour notre pays.", ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Jo", "Mais je n'en sais pas plus que les autres.", ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Jo", "J'ai appercu comme tout le monde ces trois lumières pointer vers le ciel,", ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Jo", "Puis l'explosion.", ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Jo", "Les changements de couleurs, l'odeur souffrée, la gravité plus imposante.", ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Jo", "Et ce sentiment, qu'une entité obscure nous hantait.", ">");
																										document.getElementById(">").addEventListener("click", () => {
																											dialogActualisation("Chevrette", "Hoooo elle a vraiment pas l'air *hic* gentille elle !", ">");
																											document.getElementById(">").addEventListener("click", () => {
																												dialogActualisation("Chevrette", "Eeeet, comment on s'en déBurprasse?", ">");
																												document.getElementById(">").addEventListener("click", () => {
																													dialogActualisation("Jo", "Peut-être avec de l'acier Beskar, mais il est compliqué de s'en procurer.", ">");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("Jo", "Si vous m'en rapportez, je pourrais forger une arme digne de ce nom.", "Et Où, ou cA sE tRouVe lE bASkaR ?");
																														document.getElementById(">").addEventListener("click", () => {
																															dialogActualisation("Jo", `Au Marécage ${userName}, mais c'est un endroit dangereux.`, "mOi j'Ai Pa pEur !.", "j'AimE mE bAtTre !.");
																															let options = document.querySelectorAll(".options");
																															for (let i = 0; i < options.length; i++) {
																																options[i].addEventListener("click", () => {
																																	dialogActualisation("Jo", `C'est le territoire des shinoix, ils sont malins et essaierons de vous dépouiller avec leurs énigmes...`, ">");
																																	document.getElementById(">").addEventListener("click", () => {
																																		dialogActualisation("jo", "Mais si vous répondez correctement, le Beskar sera à vous.", ">");
																																		document.getElementById(">").addEventListener("click", () => {
																																			dialogActualisation("jo", "Passez la nuit ici, vous repartirez demain avec les idées claires.", "TentEndS cHevreTte, tU pArleS le mAndarIN toa?");

																																			document.getElementById(">").addEventListener("click", () => {
																																				dialogActualisation("Chevrette", `EeeeeeebAH non !`, ">");
																																				document.getElementById(">").addEventListener("click", () => {
																																					dialogActualisation("Chevrette", `Bwaaaaarg !`, ">");
																																					document.getElementById(">").addEventListener("click", () => {
																																						dialogActualisation("Chevrette", `Vais aller me coucher *hic* avec les idées claires !`, ">");
																																						document.getElementById(">").addEventListener("click", () => {
																																							dialogActualisation("Chevrette", `On.. On partira demain.`, "hOWI, je.. zZZ...");
																																							document.getElementById(">").addEventListener("click", () => {
																																								window.location.href = "../chapter_5/index1-5.html";
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
