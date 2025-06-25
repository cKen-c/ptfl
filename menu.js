document.addEventListener("DOMContentLoaded", function() {
    const introText = document.getElementById("intro-text");
    const startButton = document.getElementById("start-button");
    const navBarLinks = document.querySelectorAll(".nav-bar a");
    const sections = document.querySelectorAll(".section-content");
    const exitButton = document.getElementById("exit-button");

    setTimeout(() => introText.classList.add("visible"), 500);
    setTimeout(() => startButton.classList.add("visible"), 1500);

    startButton.addEventListener("click", function() {
        introText.classList.remove("visible");
        startButton.style.display = "none";
        navBarLinks.forEach(link => link.classList.add("visible"));
        exitButton.classList.add("visible");
    });

    exitButton.addEventListener("click", function() {
        sections.forEach(section => {
            section.style.display = "none";
            section.classList.remove("visible");
        });
        introText.classList.add("visible");
        startButton.style.display = "block";
        exitButton.classList.remove("visible");
        navBarLinks.forEach(link => link.classList.remove("visible"));
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        let video = document.querySelector(".background-video");
        video.playbackRate = 5; // Change la vitesse (2x plus rapide)
    });

});

// Fonction pour afficher les éléments au défilement
function revealTimelineItems() {
    const items = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < windowHeight - 50) {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }
    });
}

// Écouteur d'événement pour le défilement
    window.addEventListener('scroll', revealTimelineItems);


    // Sélectionner le conteneur du logo
const hoverLogo = document.getElementById('hover-logo');

// Ajouter des événements pour chaque lien
const links = [
    { selector: 'a[href="qui-suis-je.html"]', icon: '<i class="fas fa-user"></i>' },
    { selector: 'a[href="langages.html"]', icon: '<i class="fas fa-code"></i>' },
    { selector: 'a[href="parcours.html"]', icon: '<i class="fas fa-road"></i>' },
    { selector: 'a[href="veilles.html"]', icon: '<i class="fas fa-briefcase"></i>' },
    { selector: 'a[href="projets.html"]', icon: '<i class="fas fa-project-diagram"></i>' }
];

links.forEach(link => {
    const element = document.querySelector(link.selector);
    element.addEventListener('mouseenter', () => {
        hoverLogo.innerHTML = link.icon; // Mettre à jour l'icône
        hoverLogo.classList.add('show'); // Afficher le logo
    });
    element.addEventListener('mouseleave', () => {
         hoverLogo.classList.remove('show'); // Cacher le logo
    });
});



