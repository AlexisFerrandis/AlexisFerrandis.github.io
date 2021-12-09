storyTextDisplay("Cela faisait longtemps que les trois réceptacles avaient été infectés.");
playChapterMusic(`stage-story.mp3`);

document.getElementById(">").addEventListener("click", () => {
	storyTextDisplay("Le premier par la rancœur.");
	portalDisplay();
	document.getElementById(">").addEventListener("click", () => {
		storyTextDisplay("Le second par la bêtise.");
		portalDisplay();
		document.getElementById(">").addEventListener("click", () => {
			storyTextDisplay("Et le troisième par l’oisiveté.");
			portalDisplay();
			document.getElementById(">").addEventListener("click", () => {
				storyTextDisplay("Ce qui les transforma doucement en entité maléfique.");
				document.getElementById(">").addEventListener("click", () => {
					storyTextDisplay("Defrancorrible.");
					entitiDisplay("defranco.gif");
					document.getElementById(">").addEventListener("click", () => {
						storyTextDisplay("Demouniraque.");
						entitiDisplay("mounir.gif");
						document.getElementById(">").addEventListener("click", () => {
							storyTextDisplay("Marcelediction.");
							entitiDisplay("marcel.gif");
							document.getElementById(">").addEventListener("click", () => {
								storyTextDisplay("Leur perversité implosa, réunissant tout le mal qui pouvait se trouver dans la ville.");
								lightDisplay();
								document.getElementById(">").addEventListener("click", () => {
									storyTextDisplay("Et de cette fusion naquis…");
									whiteScreen();
									setTimeout(() => {
										clearForSainRembrion();
										storyTextDisplay("Le SainRembrion, diffuseur de cauchemars… ");
										sainRembrionAppear();
										document.getElementById(">").addEventListener("click", () => {
											storyTextDisplay("Il absorbe l’énergie et la positivité des êtres vivants jusqu’à leurs dernières goutte.");
											document.getElementById(">").addEventListener("click", () => {
												storyTextDisplay("Vous comprenez maintenant pourquoi il y’a cette atmosphère étrange.");
												document.getElementById(">").addEventListener("click", () => {
													storyTextDisplay("Et pourquoi la ville court un grand danger.");
													document.getElementById(">").addEventListener("click", () => {
														storyTextDisplay("Il existe une manière de le réduire à néant.");
														document.getElementById(">").addEventListener("click", () => {
															storyTextDisplay("En terrassant ses trois parents.");
															document.getElementById(">").addEventListener("click", () => {
																location.href = "../chapter_8/index1-8.html";
															});
														});
													});
												});
											});
										});
									}, 2900);
								});
							});
						});
					});
				});
			});
		});
	});
});

function portalDisplay() {
	document.getElementById("portalsContainer").innerHTML += `
    <div class="entitiPortal">
        <img src="../../../public/assets/img/entite.gif" />
    </div>
    `;
}
function entitiDisplay(imgName) {
	document.getElementById("entitiesContainer").innerHTML += `
    <div class="entitiesImg">
        <img src="../../../public/assets/img/${imgName}" />
    </div>
    `;
}
function lightDisplay() {
	document.getElementById("lightContainer").innerHTML += `
    <div class="lightImg">
        <img src="../../../public/assets/img/thelight.gif" />
    </div>
    `;
}
function clearForSainRembrion() {
	document.getElementById("lightContainer").style.display = "none";
	document.getElementById("entitiesContainer").style.display = "none";
	document.getElementById("portalsContainer").style.display = "none";
}
function sainRembrionAppear() {
	document.getElementById("sainRembrionContainer").innerHTML += `
    <div class="sainRembrion.img">
        <img src="../../../public/assets/img/sainrembrion.gif" />
    </div>
    `;
}
