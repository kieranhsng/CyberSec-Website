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
        "welcome",
        "123456",
        "password",
        "123456789",
        "12345678",
        "12345",
        "1234567",
        "password1",
        "123123",
        "111111",
        "1234567890",
        "qwerty",
        "abc123",
        "million2",
        "000000",
        "1234",
        "iloveyou",
        "aaron431",
        "password123",
        "monkey",
        "qwerty123",
        "654321",
        "dragon",
        "sunshine",
        "princess",
        "letmein",
        "football",
        "welcome",
        "shadow",
        "master",
        "michael",
        "666666",
        "qazwsx",
        "121212",
        "baseball",
        "trustno1",
        "mustang",
        "access",
        "flower",
        "hello",
        "whatever",
        "freedom",
        "secret",
        "superman",
        "batman",
        "starwars",
        "admin",
        "login",
        "passw0rd",
        " qazwsx",
        "123321"
    ];

    let result = document.getElementById("result");

    if (password == "") {
        result.textContent = "Please enter a password.";
    }

    else if (commonPasswords.includes(password.toLowerCase())) {
        result.textContent = "This password is commonly used and is not secure.";
    }

    else {
        result.textContent = "This password is somewhat secure, but consider using a stronger password.";
    }

}
