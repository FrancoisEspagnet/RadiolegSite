// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("open-mentions");
    const lightbox = document.getElementById("lightbox");
    const lightboxText = document.getElementById("lightbox-text");
    const closeBtn = document.querySelector(".close-btn");

    // Mentions légales (contenu sécurisé, injecté via JS)
    const mentionsLegales = `
        <h2>Mentions légales</h2>
        <p><strong>Éditeur du site :</strong><br>François Espagnet<br>
        <a href="mailto:francois.espagnet@gmail.com">francois.espagnet@gmail.com</a></p>

        <p><strong>Hébergeur du site :</strong><br>OVH SAS<br>2 rue Kellermann - 59100 Roubaix - France<br>
        <a href="https://www.ovh.com" target="_blank">www.ovh.com</a></p>

        <p><strong>Propriété intellectuelle :</strong><br>
        Les contenus présents sur ce site (textes, images, sons, vidéos) appartiennent au groupe Radioleg, sauf mention contraire. 
        Toute reproduction, distribution ou utilisation sans autorisation est interdite.</p>

        <p><strong>Responsabilité :</strong><br>
        Nous mettons tout en œuvre pour garantir l'exactitude des informations publiées, mais des erreurs peuvent exister. 
        L'utilisateur du site reconnaît utiliser ces informations sous sa propre responsabilité.</p>

        <p><strong>Protection des données personnelles :</strong><br>
        Ce site ne collecte aucune donnée personnelle des visiteurs.</p>
    `;

    // Ouvrir la lightbox
    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        lightboxText.innerHTML = mentionsLegales; // Injecte le contenu
        lightbox.style.display = "flex";
    });

    // Fermer la lightbox en cliquant sur la croix
    closeBtn.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Fermer la lightbox en cliquant en dehors du contenu
    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
