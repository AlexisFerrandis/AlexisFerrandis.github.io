const footerDOM = document.getElementById("footer");

const footerContent = `
<div class="footer-links">
    <div class="footer-links__social">
        <p>Recevez nos informations :</p>
        <div>
            <form method="POST" action="https://lerepairedebacchus.activehosted.com/proc.php" id="_form_2_" class="_form _form_2 _inline-form _dark" novalidate>
                <input type="hidden" name="u" value="2" />
                <input type="hidden" name="f" value="2" />
                <input type="hidden" name="s" />
                <input type="hidden" name="c" value="0" />
                <input type="hidden" name="m" value="0" />
                <input type="hidden" name="act" value="sub" />
                <input type="hidden" name="v" value="2" />
                <input type="hidden" name="or" value="5cb443f00e3806771a8e3d27225ae9d1" />
                <div class="_form-content">
                    <div class="_form_element _x91316423">
                        <div class="_field-wrapper">
                            <input type="text" id="email" name="email" placeholder="Saisissez votre e-mail" required />
                        </div>
                    </div>
                    <div class="_button-wrapper">
                        <button id="_form_2_submit" class="small-button__square--green" type="submit">OK</button>
                    </div>
                    <div class="_clear-element"></div>
                </div>
                <div class="_form-thank-you" style="display: none"></div>
            </form>
        </div>
        <div class="footer-links__social--network-icons">
            <a href="TODO"><img src="../public/assets/fonts/fontawesome/facebook-square-brands.svg" alt="TODO" /></a>
            <a href="TODO"><img src="../public/assets/fonts/fontawesome/instagram-square-brands.svg" alt="TODO" /></a>
            <a href="TODO"><img src="../public/assets/fonts/fontawesome/linkedin-brands.svg" alt="TODO" /></a>
        </div>
    </div>
    <p><span>l'abus d'alcool est dangereux pour la santé. à consommer avec modération.</span></p>
    <div class="footer-links__legal-press">
        <a href="TODO">Presse</a>
        <a href="../pages/cgu.html">Mentions légales</a>
    </div>
</div>
`;
footerDOM.innerHTML += footerContent;
