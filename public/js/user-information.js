const userName = localStorage.getItem("userName");
const userLife = localStorage.getItem("userLife");
const userDecision = localStorage.getItem("userDecision");

const isEdelistAlive = localStorage.getItem("isEdelistAlive");

// Calculate user's karma
function refreshUserDecision(val) {
	let userDecision = localStorage.getItem("userDecision");
	let decisionUpdate = parseInt(userDecision) + val;
	localStorage.setItem("userDecision", decisionUpdate);
}

// Set user's life dynamically
function refreshUserLife(val) {
	const lifeContainer = document.getElementById("lifeContainer");
	let userLife = localStorage.getItem("userLife");
	let userUpdate = parseInt(userLife) + val;
	if (userUpdate > 5) {
		userUpdate = 5;
	}
	if (userUpdate < 0) {
		userUpdate = 0;
	}
	if (val > 0) {
		playSoundEffect("heart-plus.wav");
	}
	if (val < 0) {
		playSoundEffect("heart-minus.wav");
	}
	localStorage.setItem("userLife", userUpdate);
	switch (userUpdate) {
		case 5:
			lifeContainer.innerHTML = `
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>
        <i class="nes-icon is-medium heart"></i>`;
			break;
		case 4:
			lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
			break;
		case 3:
			if (lifeContainer) {
				lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
			}
			break;
		case 2:
			lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
			break;
		case 1:
			lifeContainer.innerHTML = `
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>`;
			break;
		case 0:
			gameOver();
			break;
		default:
			console.log("Error : unvalid lifebar");
	}
}

// If user die, button to retry or go home...
function gameOver() {
	document.body.innerHTML += `
	<div id=gameOver>
		<p><span>GAME</span> OVER</p>
		<p class="u-dead">u dead :(</p>
		<button id="dieAndRetry" type="button" class="nes-btn ">Retry</button>
		<button id="toHome" type="button" class="nes-btn ">Retour au menu</button>
	<div>
	`;

	playSoundEffect("game-over.wav");
	document.getElementById("dieAndRetry").addEventListener("click", () => {
		refreshUserLife(-5);
		refreshUserLife(3);
		window.location.reload();
	});
	document.getElementById("toHome").addEventListener("click", () => {
		refreshUserLife(3);
		window.location.href = "../../../index.html";
	});
}

// Display a new Item
function newItemDisplay(imgName) {
	document.body.innerHTML += `
    <div id="newItemDisplay">
        <img src="../../../public/assets/img/${imgName}"
    </div>
    `;
}

// Put a sword in inventory
function thisIsMySword(swordImgName) {
	document.getElementById("inventaireContainer").innerHTML = `
	<img id="actualSword" src="../../../public/assets/img/${swordImgName}"/>
	`;
}

/***  RETURN TO MENU ***/

(function displayPause() {
	document.body.innerHTML += `
	<button type="button" class="nes-btn" id="pauseBtn">||</button>
	<div class="nes-container is-rounded is-dark" id="pauseMenu">
		<div id="closePauseMenuBtn">X</div>
		<h3>Pause</h3>
		<button type="button" class="nes-btn" id="saveAndQuitBtn">Sauvegarder et revenir au menu principal</button>
	</div>
	`;
})();

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

/*** SRG MEMBERS  ***/
let srgMembers = ["chevreNoir true", "darkMahe true", "teteDeCanard true", "martin", "bito"];
