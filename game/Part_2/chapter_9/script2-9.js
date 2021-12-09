displayThePet();
refreshUserLife(0);
thisIsMySword("divinilame.gif");
displayChevrette();

playChapterMusic(`stage2-9.mp3`);

whoIsTalking("Chevrette");
letterByLetter("On va commencer par Démouniraque.");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Son ancien magasin se trouve dans le centre de la ville.`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("???", `Salut les potes !`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chevrette", `Bien le bonjour.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				displayInterlocutor("boyer.gif");
				dialogActualisation("Boyer", `Je suis Boyer, Jo m'a demandé de vous avertir.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Boyer", `L'épée en Beskar ne sera pas suffisante pour la suite de votre périple.`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Boyer", `L'ennemi a trop gagné en puissance.`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Chevrette", `Catastrophe…`, "Comment pouvons-nous faire?");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Boyer", `Alors justement, je connais un gars qui fabrique des armes Lunaires.`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Boyer", `Et je pense sincérement que ca devrait le faire.`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chevrette", `Lunaires, fabriquées sur la lune?`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Boyer", `Oui et même mieux, fabriquées à partir de lune !`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", `Très bien, et où se trouve t'il?`, ">");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Boyer", `Bah..`, ">");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Boyer", `Justement sur la lune haha.`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Chevrette", `C'est quand même difficile de s'y rendre..`, ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Boyer", `Ha mais tu connais ?`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Chevrette", `Grâce au Népalais ?`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Boyer", `Ha mais tu connais !`, ">");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Boyer", `J'ai un tit truc qui va vous propulser là bas.`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Boyer", `Vous êtes prêts ?`, "Qu'est ce que c'est?", "Let's go !");
																				refreshImpactChoice();

																				let options = document.querySelectorAll(".options");
																				for (let i = 0; i < options.length; i++) {
																					options[i].addEventListener("click", () => {
																						refreshImpactChoice();
																						dialogActualisation("Boyer", `C'est pur, c'est une taf pour les étoiles !`, ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Boyer", `Je vous retrouve içi.`, ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Boyer", `A toute à l'heure.`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									location.href = "../chapter_10/index2-10.html";
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
