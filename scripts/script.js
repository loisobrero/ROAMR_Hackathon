// JavaScript to handle language selection
document.getElementById("language-select").addEventListener("change", function() {
    const selectedLanguage = this.value;
    alert(`You selected ${selectedLanguage} as your preferred language.`);
});

// JavaScript to handle menu option clicks
const menuLinks = document.querySelectorAll(".top-menu a");

menuLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior (e.g., page navigation)
        const targetSectionId = this.getAttribute("href").substring(1);
        
        // Replace this with the actual IDs of your content sections
        const targetSection = document.getElementById(targetSectionId);
        
        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});


