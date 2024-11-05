document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const organisation = document.getElementById("organisation").value;
    const delegates = document.getElementById("delegates").value;

    if (name && email && contact && organisation && delegates) {
        alert("Thank you for registering for GWECCC 2025!");
    } else {
        alert("Please fill in all required fields.");
    }
});