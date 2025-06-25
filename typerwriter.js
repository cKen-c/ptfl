document.addEventListener("DOMContentLoaded", () => {
    const typewriterText = document.getElementById("typewriter-text");
    const text = typewriterText.textContent; // Récupère le texte existant
    typewriterText.textContent = ""; // Vide le contenu pour l'animation
    let index = 0;

    function type() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(type, 50); // Ajustez la vitesse ici (50ms par caractère)
        }
    }

    type();
});