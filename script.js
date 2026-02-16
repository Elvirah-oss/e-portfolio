document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    // Optional: Reset form after submission
    document.getElementById("contactForm").reset();
});
