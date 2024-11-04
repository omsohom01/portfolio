(() => {
    // Typing Effect for Home Section
    const text = "Bringing dreams to life with code and creativity.";
    let index = 0;

    function typeEffect() {
        const typingElement = document.querySelector('.typing-effect');
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Home typing speed
        }
    }

    document.addEventListener('DOMContentLoaded', typeEffect);

    // Smooth Scroll Reveal Animation for About Section
    const aboutText = document.querySelector('.about-text');
    const options = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Call the typing effect for About Me text
                let aboutIndex = 0;
                const aboutTextContent = aboutText.innerText;
                aboutText.innerText = ''; // Clear the text for typing effect

                function typeAboutEffect() {
                    if (aboutIndex < aboutTextContent.length) {
                        aboutText.innerHTML += aboutTextContent.charAt(aboutIndex);
                        aboutIndex++;
                        // Set a lower delay for faster typing in About Me section
                        setTimeout(typeAboutEffect, 50); // Faster typing speed
                    }
                }
                typeAboutEffect();

                // Add fade-in class for animation
                aboutText.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, options);

    // Observe the About Me section
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
})();

// Optional: Add bounce effect on load
document.addEventListener('DOMContentLoaded', () => {
    const logos = document.querySelectorAll('.logo');
    logos.forEach((logo, index) => {
        logo.style.animation = `bounce 0.5s ease forwards`;
        logo.style.animationDelay = `${index * 100}ms`; // Delay for each logo
    });
});

// Keyframes for bounce animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
}
`;
document.head.appendChild(style);
