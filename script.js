// signup page
function signup() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("confirmPassword").value;

    if (name === "" || email === "" || pass === "" || cpass === "") {
        alert("Please fill all fields!");
        return;
    }

    if (pass !== cpass) {
        alert("Passwords do not match!");
        return;
    }
    // Save data temporarily in localStorage (optional)
    localStorage.setItem("netflixUser", email);
    localStorage.setItem("netflixPass", pass);
    alert("Account created successfully!");
    window.location.href = "index.html";
}

// login page
function login() {
    const username = document.getElementById("user").value;
    const password = document.getElementById("pass").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }
    // Example login check (you can change the values)
    if (username === "admin" && password === "1234") {
        // Redirect to movie page
        window.location.href = "movie.html";
    } else {
        alert("Incorrect username or password");
    }
}
