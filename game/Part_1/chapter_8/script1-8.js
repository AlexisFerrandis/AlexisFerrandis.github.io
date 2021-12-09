refreshUserLife(0);
thisIsMySword("divinilame.gif");
playChapterMusic(`stage1-7.mp3`);

displayChevrette();
displayTheThird("dogs.gif");
document.getElementById("dogs").style.transform = "translateY(70px)";
displayInterlocutor("violight.gif");
whoIsTalking("Chevrette");
letterByLetter("Wallah je ne m’attendais pas à ca.");
userOptions(">");

document.getElementById(">").addEventListener("click", () => {
	dialogActualisation("Violight", `Je comprends, mais je crois en vous.`, ">");
	document.getElementById(">").addEventListener("click", () => {
		dialogActualisation("Violight", `Je sens votre lumière à tous les deux.`, ">");
		document.getElementById(">").addEventListener("click", () => {
			dialogActualisation("Violight", `Ensemble vous pourrez le vaincre.`, ">");
			document.getElementById(">").addEventListener("click", () => {
				dialogActualisation("Chevrette", `Si j'ai bien compris, nous devons premièrement nous occuper des parents.`, ">");
				document.getElementById(">").addEventListener("click", () => {
					dialogActualisation("Chevrette", `Et du coup où se trouvent ils ?`, ">");
					document.getElementById(">").addEventListener("click", () => {
						dialogActualisation("Violight", `Ils n’ont plus bougés depuis le Ténébrement.`, ">");
						document.getElementById(">").addEventListener("click", () => {
							dialogActualisation("Violight", `Pour Demouniraque et Marcelediction je ne sais pas.`, ">");
							document.getElementById(">").addEventListener("click", () => {
								dialogActualisation("Violight", `Mais Defrancorrible elle, est toujours au collège.`, ">");
								document.getElementById(">").addEventListener("click", () => {
									dialogActualisation("Violight", `J’aimerai vous offrir un présent pour vous aider dans votre périple.`, ">");
									document.getElementById(">").addEventListener("click", () => {
										dialogActualisation("Violight", `Il vous éclairera dans la pénombre.`, ">");
										document.getElementById(">").addEventListener("click", () => {
											dialogActualisation("Violight", `Lequel vous comblerait le plus?`, ">");
											document.getElementById(">").addEventListener("click", () => {
												threeItemChoice("sebastien.gif", "Sebastien", "pietros.gif", "Pietros", "faros.gif", "Faros");
												let choiceOptions = document.querySelectorAll(".itemChoice");
												for (let i = 0; i < choiceOptions.length; i++) {
													choiceOptions[i].addEventListener("click", () => {
														let chosenDog = choiceOptions[i].id;
														localStorage.setItem("chosenDog", chosenDog);
														playSoundEffect("new-item.mp3");
														displayThePet();
														document.getElementById("threeItemContainer").style.display = "none";
														dialogActualisation("Chevrette", `Merci énormément, qu'il est beau!`, "Merci <3");

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
														document.getElementById(">").addEventListener("click", () => {
															dialogActualisation("Violight", `Ce n’est rien.`, ">");
															document.getElementById(">").addEventListener("click", () => {
																dialogActualisation("Violight", `Vous devriez faire vite, il gagne chaque jour un peu plus de puissance.`, ">");
																document.getElementById(">").addEventListener("click", () => {
																	dialogActualisation("Violight", `Retrouvez-moi ici si vous en ressentez le besoin.`, "Poupipoupi Poupipou");
																	document.getElementById(">").addEventListener("click", () => {
																		let isEdelistAlive = localStorage.getItem("isEdelistAlive");
																		if (isEdelistAlive == "true") {
																			location.href = "../chapter_9/index1-9.html";
																		} else {
																			location.href = "../chapter_10/index1-10.html";
																		}
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
