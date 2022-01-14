const footerDOM = document.getElementById("footer");

const footerContent = `
    <div class="footer-links">
        <div class="footer-links__social">
            <p>Recevez nos informations :</p>
            <input type="text" placeholder="Votre e-mail" />
            <button class="small-button__square--green" >OK</button>
            <div class="footer-links__social--network-icons">
                <a href="TODO"><img src="../public/assets/fonts/fontawesome/facebook-square-brands.svg" alt="TODO" /></a>
                <a href="TODO"><img src="../public/assets/fonts/fontawesome/instagram-square-brands.svg" alt="TODO" /></a>
                <a href="TODO"><img src="../public/assets/fonts/fontawesome/linkedin-brands.svg" alt="TODO" /></a>
            </div>
        </div>
        <p><span>l'abus d'alcool est dangereux pour la santé. à consommer avec modération.</span></p>
        <div class="footer-links__legal-press">
            <a href="TODO">Presse</a>
            <a href="./cgu.html">Mentions légales</a>
        </div>
    </div>
    <div class="footer-disclaimer">
		<p>Le Repaire de Bacchus - Copyright - 2022</p><!-- TODO -->
	</div>
`;
footerDOM.innerHTML += footerContent;
