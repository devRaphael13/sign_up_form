const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const matching = document.getElementById("matching");

password.addEventListener("keyup", () => showColor());
confirmPassword.addEventListener("keyup", () => showColor());

function showColor() {
    if (password.value && confirmPassword.value) {
        if (password.value == confirmPassword.value) {
            matching.textContent = "Passwords match";
            matching.style.color = "#18A816";
        } else {
            matching.textContent = "Passwords do not match";
            matching.style.color = "#A71618";
        }
    }
}
