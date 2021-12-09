// Slash battle opponent movement
function opponentMovment(imgName) {
	let opponant = document.getElementById("opponentContainer");
	opponant.innerHTML = `
    <img src="../../../public/assets/img/${imgName}" />
    `;
}

// User's life decreasing but saved with doggo
function slashBattleUserLife() {
	let myPet = localStorage.getItem("chosenDog");
	setInterval(() => {
		refreshUserLife(-1);
		let userLife = localStorage.getItem("userLife");
		if (userLife <= 1) {
			document.getElementById("savorContainer").style.display = "block";
			document.getElementById("savorContainer").innerHTML = `
            <i id="petHeart" class="nes-icon is-large heart"></i>
            <img src="../../../public/assets/img/${myPet}.gif" />
            `;
			refreshUserLife(3);
			setTimeout(() => {
				document.getElementById("savorContainer").style.display = "none";
			}, 2000);
		}
	}, 6500);
}

// Opponant dialog actualisation
function refreshDialogOpponent(txt1, txt2, txt3) {
	setTimeout(() => {
		storyTextDisplay(txt1);
		setTimeout(() => {
			storyTextDisplay(txt2);
			setTimeout(() => {
				storyTextDisplay(txt3);
			}, 4000);
		}, 4000);
	}, 4000);
}

// Cursor as a sword
(function mouseAsASword() {
	document.getElementById("swordPerimter").addEventListener("mousemove", (e) => {
		if (document.getElementById("divinilameFight")) {
			let sword = document.getElementById("divinilameFight");
			sword.style.left = e.clientX + "px";
			sword.style.top = e.clientY + "px";
		} else if (document.getElementById("teolameFight")) {
			let sword = document.getElementById("teolameFight");
			sword.style.left = e.clientX + "px";
			sword.style.top = e.clientY + "px";
		}
	});
})();

// Listener mouse and opponent in contact
function hitOpponent(nextPath) {
	opponentLifeBar = 1000;
	document.getElementById("opponentContainer").addEventListener("mousemove", (e) => {
		opponentLifeBar--;
		document.getElementById("opponentLifeBarValue").value = opponentLifeBar;
		if (opponentLifeBar <= 0) {
			playSoundEffect("monster-scream.wav");
			document.getElementById("opponentLifeBar").style.display = "none";
			setTimeout(() => {
				location.href = nextPath;
			}, 2200);
		}
	});
}
