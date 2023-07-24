function validateAndRedirect(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the value from the "data" input field
    var dataValue = document.getElementById("username").value;

    // Check if the data is empty or does not meet certain criteria
    var specificString = "koma@123"; 

    if (dataValue.trim() === specificString) {
        window.location.href = "files/error.html"; // Redirect to the error page
    } else {
        window.location.href = "files/view.html"; // Redirect to the destination page
    }
}