// Mobile menu
document.getElementById("menu-btn").onclick = () => {
    const menu = document.getElementById("mobile-menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};

// Contact form (works without backend)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formStatus").innerText = "Message sent!";
});

// Simple buy button
function buy(product) {
    alert("Purchasing: " + product);
}