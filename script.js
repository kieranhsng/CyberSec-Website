function checkPassword() {

    let password = document.getElementById("password").value;

    let commonPasswords = [
        "password",
        "123456",
        "123456789",
        "qwerty",
        "admin",
        "password123",
        "letmein",
        "welcome"
    ];

    let result = document.getElementById("result");

    if (password == "") {
        result.textContent = "Please enter a password.";
    }

    else if (commonPasswords.includes(password.toLowerCase())) {
        result.textContent = "This password is commonly used and is not secure.";
    }

    else {
        result.textContent = "This password does not match any passwords in our list.";
    }

}
