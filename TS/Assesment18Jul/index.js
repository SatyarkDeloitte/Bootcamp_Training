//var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
// const redirect = (url, asLink = true) =>
//   asLink ? (window.location.href = url) : window.location.replace(url);
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "abc" && password == "abc123") {
        alert("Login successfully");
        window.location.href = "index.html";
        ; // Redirecting to other page.
        return false;
    }
    else {
        alert("Wrong Id or Password");
        // Disabling fields after 3 attempts.
    }
}
// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
//const loginErrorMsg = document.getElementById("login-error-msg");
// (<HTMLInputElement>document.getElementById("login-form-submit")).addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = (<HTMLInputElement>document.getElementById("username")).value;
//     const password = (<HTMLInputElement>document.getElementById("password")).value;
//     if (username === "user" && password === "web_dev") {
//         alert("You have successfully logged in.");
//         redirect("C:\Users\satsharma\Documents\Bootcamp\DAY 3 TS\DELOITTEEXAMPLES\Assesment18Jul\index.html");
//     } else {
//         console.log("Invalid");
//     }
// })
