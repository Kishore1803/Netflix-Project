// SIGNUP 
function signup() {
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (fullname === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill all fields!");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    // Create user object
    const user = {
        fullname: fullname,
        email: email,
        password: password
    };
    // Save user data in localStorage
    localStorage.setItem("userData", JSON.stringify(user));
    alert("Account created successfully!");
    // Redirect to login page
    window.location.href = "login.html";
}



// LOGIN 
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const savedUser = JSON.parse(localStorage.getItem("userData"));
            if (!savedUser) {
                document.getElementById("msg").innerHTML =
                    `<div class="alert alert-danger">No account found! Please sign up first.</div>`;
                return;
            }
            if (email === savedUser.email && password === savedUser.password) {
                document.getElementById("msg").innerHTML =
                    `<div class="alert alert-success">Login successful! Redirecting...</div>`;
                setTimeout(() => {
                    window.location.href = "index.html"; // homepage or dashboard
                }, 1000);
            } else {
                document.getElementById("msg").innerHTML =
                    `<div class="alert alert-danger">Invalid email or password!</div>`;
            }
        });
    }
});
