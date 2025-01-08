function validateForm() {
    // Get form elements
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;

    // Name validation
    if (name === "") {
        alert("Name must be filled out");
        return false;
    }

    // Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        alert("Email must be filled out");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Invalid email format");
        return false;
    }

    // Password validation
    if (password === "") {
        alert("Password must be filled out");
        return false;
    }

    // All validations passed
    return true;
}
