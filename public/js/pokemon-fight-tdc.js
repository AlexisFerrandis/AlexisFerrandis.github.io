// Display selected opponent
function displayOpponent(opponentImg, opponentName) {
	document.getElementById("battleOpponentName").innerHTML = `
    <h3>${opponentName}</h3>
    `;
	document.getElementById("battleOpponentImg").innerHTML = `
    <img src="../../../public/assets/img/${opponentImg}" alt="" />
    `;
}

// Chevrette movement and Atck
function chevretteMovingAndAttacking() {
	let chevretteAtck = document.querySelectorAll(".chevrette-atck");
	for (let i = 0; i < chevretteAtck.length; i++) {
		chevretteAtck[i].addEventListener("click", () => {
			let chevretteImg = document.getElementById("battleChevretteImg");
			chevretteImg.style.transition = "400ms";
			chevretteImg.style.transform = "translateX(100px)";
			document.getElementById("battleChevretteAttackContainer").style.pointerEvents = "none";
			setTimeout(() => {
				chevretteImg.style.transform = "translateX(0px)";
			}, 400);
			if (chevretteAtck[i].id == "fireDance") {
				playSoundEffect("fire-dance.wav");
				chevretteAtckSprite("fire-dance.gif");
				opponentLifeBarRefresh(17, 2500);
			} else if (chevretteAtck[i].id == "pipoSmash") {
				playSoundEffect("pipo-smash.wav");
				chevretteAtckSprite("pipo-smash.gif");
				opponentLifeBarRefresh(22, 2350);
			} else if (chevretteAtck[i].id == "spatuleVenimeuse") {
				playSoundEffect("spatule-venimeuse.wav");
				chevretteAtckSprite("spatule-venimeuse.gif");
				opponentLifeBarRefresh(4, 2350);
			} else if (chevretteAtck[i].id == "shazamAtoumini") {
				playSoundEffect("shazam-atoumini.wav");
				chevretteAtckSprite("shazam-atoumini.gif");
				opponentLifeBarRefresh(24, 2400);
			}
		});
	}
}
chevretteMovingAndAttacking();

// Refresh opponent life and end animation sprite
function opponentLifeBarRefresh(val, spriteDuration) {
	let opponentLifeBar = document.getElementById("battleOpponentLifeBar");
	let opponentLifeValue = document.getElementById("opponentLifeValue");
	setTimeout(() => {
		document.getElementById("curentlySprite").remove();
		opponentLifeBar.value -= val;
		opponentLifeValue.innerHTML = opponentLifeBar.value + "hp";
		OpponentOpposition("Tête de Canard");
		whoLLDieFirst("../chapter_8/index2-8.html");
	}, spriteDuration);
}

// Display chevrette atck animation
function chevretteAtckSprite(imgName) {
	let opponentImg = document.getElementById("battleOpponentImg");
	opponentImg.innerHTML += `
                <img class="chevrette-atck-sprite" id="curentlySprite" src="../../../public/assets/img/${imgName}" alt="" />
                `;
}

// Opponent msg and atck after Chevrette's
function OpponentOpposition(opponentName) {
	document.getElementById("battleChevretteAttackContainer").style.pointerEvents = " auto";
	switch (opponentName) {
		case "Tête de Canard":
			let messages = ["Ouch, un gros pénis sur ta gueule tiens !", "Ca pique. Ninja Flex j'ai besoin de toi !", "Cheh, BENJIIIIII PLATOOOOOO !", "Hmmm.. Le méchant... Crayon, attaque !"];
			let message = messages[Math.floor(Math.random() * 4)];
			let msgContainer = document.getElementById("battleChevretteAttackContainer");
			msgContainer.innerHTML += `
                <div id="OpponentMsg" class="nes-container is-dark">
                    <h3>${message}</h3>
                </di>
                `;
			document.getElementById("OpponentMsg").addEventListener("click", () => {
				document.getElementById("OpponentMsg").style.pointerEvents = "none";
				if (message == "Ouch, un gros pénis sur ta gueule tiens !") {
					playSoundEffect("penis.wav");
					opponentAtckSprite("dick.gif", 22, 4100);
				} else if (message == "Ca pique. Ninja Flex j'ai besoin de toi !") {
					playSoundEffect("ninja.wav");
					opponentAtckSprite("ninja.gif", 14, 4000);
				} else if (message == "Cheh, BENJIIIIII PLATOOOOOO !") {
					playSoundEffect("plato.wav");
					opponentAtckSprite("plato.gif", 12, 4100);
				} else {
					playSoundEffect("pencil.wav");
					opponentAtckSprite("pencil.gif", 24, 4100);
				}
				whoLLDieFirst("../chapter_8/index2-8.html");
				chevretteMovingAndAttacking();
			});
			break;

		default:
			console.log("ERROR NO OPPONENT FOUND");
	}
}

// Display opponent atck sprite
function opponentAtckSprite(imgName, val, spriteDuration) {
	let chevretteLifeBar = document.getElementById("battleChevretteLifeBar");
	let chevretteLifeValue = document.getElementById("chevretteLifeValue");
	document.getElementById("battleChevretteImg").innerHTML += `
    <img class="opponent-atck-sprite" id="curentlyOpponentSprite" src="../../../public/assets/img/${imgName}" alt="" />
    `;
	setTimeout(() => {
		document.getElementById("curentlyOpponentSprite").remove();
		chevretteLifeBar.value -= val;
		chevretteLifeValue.innerHTML = chevretteLifeBar.value + "hp";
		document.getElementById("OpponentMsg").remove();
		whoLLDieFirst("../chapter_8/index2-8.html");
	}, spriteDuration);
}

// If chevretteLife = 0 => GameOver // if opponent life = 0 => Win
function whoLLDieFirst(path) {
	let chevretteLife = document.getElementById("battleChevretteLifeBar").value;
	let opponentLife = document.getElementById("battleOpponentLifeBar").value;
	if (opponentLife <= 0) {
		characterFalling("battleOpponentImg");
		setTimeout(() => {
			location.href = path;
		}, 2000);
	}
	if (chevretteLife <= 0) {
		gameOver();
	}
}
