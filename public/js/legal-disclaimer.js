const legalDisclaimer = document.getElementById("legalDisclaimer");

if (localStorage.getItem("legalDisclaimerAgreement") == "true") {
	legalDisclaimer.style.display = "none";
} else {
	legalDisclaimer.innerHTML = `
    <div class="legal-disclaimer">
        <div class="legal-disclaimer__container">
            <img src="./public/assets/img/logos/logo-img&text-color-primary-rounded.svg" alt="Logo du Repaire de Bacchus" />
            <select name="country" id="countrySelect">
                <option value="french">français</option>
                <option value="english">english</option>
                <option value="deutsch">deutsch</option>
                <option value="italiano">italiano</option>
                <option value="español">español</option>
                <option value="русский">русский</option>
                <option value="中国人">中国人</option>
            </select>
			<div id="flag"><img src="./public/assets/img/pictos/flags/fr.svg" alt="flag"/></div>
            <p id="disclaimerMajority">Pour visiter notre site, vous devez être en âge d'acheter et de consommer de l'alcool selon la législation de votre pays de résidence. S'il n'existe pas de législation sur ce sujet, vous devez être âgé de 18 ans au moins.</p>
            <div class="legal-disclaimer__container--separator"></div>
            <p id="disclaimerAgreement">J'accepte les termes et conditions de ce site.</p>
            <div class="legal-disclaimer__container--choices">
                <button id="legalDisclaimerAgree" type="button" class="button__square--green">oui</button>
                <button id="legalDisclaimerDisagree" type="button" class="button__square--green">non</button>
            </div>
        </div>
    </div>
    `;

	const countrySelection = document.getElementById("countrySelect");
	const countryFlag = document.getElementById("flag");
	const disclaimerMajority = document.getElementById("disclaimerMajority");
	const disclaimerAgreement = document.getElementById("disclaimerAgreement");
	const legalDisclaimerAgree = document.getElementById("legalDisclaimerAgree");
	const legalDisclaimerDisagree = document.getElementById("legalDisclaimerDisagree");

	countrySelection.addEventListener("change", () => {
		switch (countrySelection.value) {
			case "french":
				countryFlag.innerHTML = `<img src="./public/assets/img/pictos/flags/fr.svg" alt="flag"/>`;
				disclaimerMajority.innerText = `Pour visiter notre site, vous devez être en âge d'acheter et de consommer de l'alcool selon la législation de votre pays de résidence. S'il n'existe pas de législation sur ce sujet, vous devez être âgé de 18 ans au moins.`;
				disclaimerAgreement.innerText = `J'accepte les termes et conditions de ce site.`;
				legalDisclaimerAgree.innerText = `oui`;
				legalDisclaimerDisagree.innerText = `non`;
				break;
			case "english":
				countryFlag.innerHTML = `<img src="./public/assets/img/pictos/flags/gb.svg" alt="flag"/>`;
				disclaimerMajority.innerText = `To visit our site, you must be old enough to purchase and consume alcohol according to the legislation of your country of residence. If there is no legislation on this subject, you must be at least 18 years old.`;
				disclaimerAgreement.innerText = `I accept the terms and conditions of this site.`;
				legalDisclaimerAgree.innerText = `yes`;
				legalDisclaimerDisagree.innerText = `no`;
				break;
			case "deutsch":
				countryFlag.innerHTML = `<img src="./public/assets/img/pictos/flags/de.svg" alt="flag"/>`;
				disclaimerMajority.innerText = `Um unsere Website besuchen zu können, müssen Sie gemäß der Gesetzgebung Ihres Wohnsitzlandes alt genug sein, um Alkohol zu kaufen und zu konsumieren. Wenn es keine Gesetzgebung zu diesem Thema gibt, müssen Sie mindestens 18 Jahre alt sein.`;
				disclaimerAgreement.innerText = `Ich akzeptiere die Bedingungen dieser Site.`;
				legalDisclaimerAgree.innerText = `ja`;
				legalDisclaimerDisagree.innerText = `Nein`;
				break;
			case "italiano":
				countryFlag.innerHTML = `<img src="./public/assets/img/pictos/flags/it.svg" alt="flag"/>`;
				disclaimerMajority.innerText = `Per visitare il nostro sito, devi essere abbastanza grande per acquistare e consumare alcolici secondo la legislazione del tuo paese di residenza. Se non esiste una legislazione in materia, devi avere almeno 18 anni.`;
				disclaimerAgreement.innerText = `Accetto i termini e le condizioni di questo sito.`;
				legalDisclaimerAgree.innerText = `sì`;
				legalDisclaimerDisagree.innerText = `no`;
				break;
			case "español":
				countryFlag.innerHTML = `<img src="./public/assets/img/pictos/flags/es.svg" alt="flag"/>`;
				disclaimerMajority.innerText = `Para visitar nuestro sitio, debe tener la edad suficiente para comprar y consumir alcohol de acuerdo con la legislación de su país de residencia. Si no existe legislación sobre este tema, debe tener al menos 18 años.`;
				disclaimerAgreement.innerText = `Acepto los términos y condiciones de este sitio.`;
				legalDisclaimerAgree.innerText = `sí`;
				legalDisclaimerDisagree.innerText = `no`;
				break;
			case "русский":
				countryFlag.innerHTML = `<img src="./public/assets/img/pictos/flags/ru.svg" alt="flag"/>`;
				disclaimerMajority.innerText = `Чтобы посетить наш сайт, вы должны быть достаточно взрослыми, чтобы покупать и употреблять алкоголь в соответствии с законодательством страны вашего проживания. Если нет законодательства по этому поводу, вам должно быть не менее 18 лет.`;
				disclaimerAgreement.innerText = `Я принимаю условия этого сайта.`;
				legalDisclaimerAgree.innerText = `да`;
				legalDisclaimerDisagree.innerText = `нет`;
				break;
			case "中国人":
				countryFlag.innerHTML = `<img src="./public/assets/img/pictos/flags/cn.svg" alt="flag"/>`;
				disclaimerMajority.innerText = `要访问我们的网站，您必须达到居住国法律规定的可以购买和饮用酒精的年龄。如果没有关于此主题的立法，您必须年满 18 岁。`;
				disclaimerAgreement.innerText = `我接受本网站的条款和条件。`;
				legalDisclaimerAgree.innerText = `是的`;
				legalDisclaimerDisagree.innerText = `不`;
				break;
		}
	});

	legalDisclaimerDisagree.addEventListener("click", () => {
		disclaimerAgreement.style.color = "red";
	});
	legalDisclaimerAgree.addEventListener("click", () => {
		legalDisclaimer.style.display = "none";
		localStorage.setItem("legalDisclaimerAgreement", "true");
	});
}
