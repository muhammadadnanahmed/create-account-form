var users = [];

function Constructor(username, password, email, gender, city) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.gender = gender;
    this.city = city;
}

document.getElementById("createAccountForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name="gender"]:checked')?.value;
    var city = document.getElementById("city").value;

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Validation
    var isValid = true;

    if (!username) {
        document.getElementById("usernameError").textContent = "Username is required.";
        isValid = false;
    }
    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email.";
        isValid = false;
    }
    if (!password) {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
    }
    if (!gender) {
        document.getElementById("genderError").textContent = "Gender is required.";
        isValid = false;
    }
    if (!city) {
        document.getElementById("cityError").textContent = "City is required.";
        isValid = false;
    }

    if (!isValid) return;

    // Check for existing username or email
    if (users.some(user => user.username === username)) {
        alert("Username already exists.");
        return;
    }
    if (users.some(user => user.email === email)) {
        alert("Email already exists.");
        return;
    }

    // Create new user object
    var newUser = new Constructor(username, password, email, gender, city);
    users.push(newUser);

    alert("Account created successfully!");
    console.log(users); // For debugging purposes
    document.getElementById("createAccountForm").reset();
});
