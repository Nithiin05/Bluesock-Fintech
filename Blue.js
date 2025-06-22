function onSubmitCheck() {
    const userInput = document.getElementById("offerInput").value;
    const messageBox = document.getElementById("noticeBox");

    // Reset previous message
    messageBox.textContent = "";

    if (userInput.trim() !== "") {
        const isMatch = checkInput(userInput);

        if (isMatch) {
            // If ID is valid, redirect immediately
            messageBox.textContent = "";
            window.location.href = "Submit.html";
        } else {
            // Show message then redirect after short delay
            messageBox.textContent = "Invalid ID entered";
            setTimeout(() => {
                window.location.href = "Pro.html";
            }, 3000);
        }
    } else {
        messageBox.textContent = "ID cannot be empty";
        setTimeout(() => {
            window.location.href = "Pro.html";
        }, 3000);
    }
}

// Simulated basic input check
function checkInput(inputValue) {
    // Accept only exactly 8-character IDs
    return inputValue.length === 8;
}
