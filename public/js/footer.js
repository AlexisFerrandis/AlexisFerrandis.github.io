// footer integration
const footerDOM = document.getElementById("footer");

const footerContent = `
<div class="links">
    <div class="social">
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
                        <button id="_form_2_submit" class="newsletter-btn" type="submit">OK</button>
                    </div>
                    <div class="_clear-element"></div>
                </div>
                <div class="_form-thank-you" style="display: none"></div>
            </form>
        </div>
        <div class="icons">
            <a href="https://www.facebook.com/lerepairedebacchus" target="_blank" rel="noopener noreferrer"><img src="../public/assets/pictos-logos/pictos/facebook-square-brands.svg" alt="facebook" /></a>
            <a href="https://www.instagram.com/lerepairedebacchus" target="_blank" rel="noopener noreferrer"><img src="../public/assets/pictos-logos/pictos/instagram-square-brands.svg" alt="instagram" /></a>
            <a href="https://fr.linkedin.com/company/le-repaire-de-bacchus" target="_blank" rel="noopener noreferrer"><img src="../public/assets/pictos-logos/pictos/linkedin-brands.svg" alt="linkedin" /></a>
        </div>
    </div>
    <p class="disclaimer">l'abus d'alcool est dangereux pour la santé. à consommer avec modération.</p>
    <div class="legal-press">
        <a href="mailto:contact@sick-rp.com"><p class="press">Presse</p></a>
        <a href="./cgu.html">Mentions légales</a>
    </div>
</div>
`;
footerDOM.innerHTML += footerContent;
