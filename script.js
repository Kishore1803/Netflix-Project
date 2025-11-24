function login() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

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
