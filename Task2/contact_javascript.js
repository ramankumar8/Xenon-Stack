document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulate form submission (replace with your actual handling logic)
    setTimeout(function() {
        document.getElementById("confirmation-message").textContent = "Message sent!";
        document.getElementById("contact-form").reset();
    }, 1000);
});
