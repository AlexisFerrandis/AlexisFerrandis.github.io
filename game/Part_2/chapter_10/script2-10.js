let chevrette = document.getElementById("characterOne");
chevrette.innerHTML = `<img src="../../../public/assets/img/chevrette-sprite/chevrette-lama.gif" alt="" />`;
chevrette.style.opacity = "1";
chevrette.classList.add("moon-chevrette");
playChapterMusic(`stage2-10.mp3`);

whoIsTalking("Chevrette");
letterByLetter("Wooooooooow !");
userOptions("Wow !");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Chevrette", `Ca faisait longtemps que j'étais pas allé sur la lune !`, "Tu.. es un lama ?!");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Chevrette", `Mwahahaha ! Et toi tu es une chèvre ?!`, "Chevrette, qu'est ce qui se passe ?");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Chevrette", `Tout va bien, on est juste complétement défoncé !`, "Ha !");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chevrette", `Wiiiiiiiiiiiiiiiiiiii !`, "Wihihi !");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `C rigolo ^^`, "Je suis un nuage !");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Chevrette", `C'est vrai que tu ressembles un peu à un nuage :o`, ":o");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("???", `Bienvenue les enfants.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Chevrette", `MONSIEUR LUNE !`, "C'est monsieur lune ?!");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Teomousse", `Je suis Teomousse.`, ">");
									displayInterlocutor("teomousse.gif");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Chevrette", `Quel homme...`, "Magnifique.");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Teomousse", `Mes enfants, comment puis je vous aider ?`, ">");
											document.getElementById(">").addEventListener("click", () => {
												dialogActualisation("Chevrette", `Il semblerait que vous soyez en mesure de nous fournir une arme.`, "Wi.");
												document.getElementById(">").addEventListener("click", () => {
													dialogActualisation("Chevrette", `Pour détruire le SainRembrion !`, "Wi.");
													document.getElementById(">").addEventListener("click", () => {
														dialogActualisation("Teomousse", `Hmmmmmmmmmm ...`, ">");
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Teomousse", `Il se pourrait oui.`, ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Teomousse", `Pour cela, je dois savoir si vous êtes capable de la manier.`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Teomousse", `Et que votre coeur est bon.`, ">");
																	document.getElementById(">").addEventListener("click", () => {
																		dialogActualisation("Chevrette", `Nous le sommes !`, "Wi.");
																		document.getElementById(">").addEventListener("click", () => {
																			dialogActualisation("Teomousse", `Je vais vérifier ça.`, ">");
																			document.getElementById(">").addEventListener("click", () => {
																				dialogActualisation("Teomousse", `Pour ce faire,`, ">");
																				document.getElementById(">").addEventListener("click", () => {
																					dialogActualisation("Teomousse", `Je vais analyser l'historique de ${userName}.`, ">");
																					document.getElementById(">").addEventListener("click", () => {
																						dialogActualisation("Teomousse", `...`, ">");
																						document.getElementById(">").addEventListener("click", () => {
																							dialogActualisation("Teomousse", `Ho...`, ">");
																							document.getElementById(">").addEventListener("click", () => {
																								dialogActualisation("Teomousse", `...`, ">");
																								document.getElementById(">").addEventListener("click", () => {
																									dialogActualisation("Teomousse", `Vous voulez un verre d'eau ?`, ">");
																									document.getElementById(">").addEventListener("click", () => {
																										dialogActualisation("Teomousse", `...`, ">");
																										document.getElementById(">").addEventListener("click", () => {
																											dialogActualisation("Teomousse", `C'est une âme pure.`, ">");
																											document.getElementById(">").addEventListener("click", () => {
																												dialogActualisation("Teomousse", `Voici l'épée de la lune.`, ">");
																												playSoundEffect("new-item.mp3");
																												newItemDisplay("teolame.gif");
																												document.getElementById(">").addEventListener("click", () => {
																													dialogActualisation("Chevrette", `De toute beauté !`, ">");
																													document.getElementById("newItemDisplay").remove();
																													thisIsMySword("teolame.gif");
																													document.getElementById(">").addEventListener("click", () => {
																														dialogActualisation("Teomousse", `Petit animal, ${userName}, je vous souhaite d'être invincible dans votre combat.`, ">");
																														document.getElementById(">").addEventListener("click", () => {
																															dialogActualisation("Teomousse", `Pleins de bisous.`, ">");
																															document.getElementById(">").addEventListener("click", () => {
																																dialogActualisation("Chevrette", `Merci Teomousse !`, "<3");
																																document.getElementById(">").addEventListener("click", () => {
																																	location.href = "../chapter_11/index2-11.html";
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
