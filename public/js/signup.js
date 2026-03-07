function applySignupConfig() {

    if (!UI_CONFIG || !UI_CONFIG.auth) return;

    document.getElementById("welcomeTitle").innerText =
        UI_CONFIG.auth.welcomeTitle;

    document.getElementById("welcomeDesc").innerText =
        UI_CONFIG.auth.welcomeDescription;

    document.getElementById("signupTitle").innerText =
        UI_CONFIG.auth.signupTitle;

    document.getElementById("signupName").placeholder =
        UI_CONFIG.auth.usernamePlaceholder;

    document.getElementById("signupEmail").placeholder =
        UI_CONFIG.auth.emailPlaceholder;

    document.getElementById("signupPassword").placeholder =
        UI_CONFIG.auth.passwordPlaceholder;

    document.getElementById("signupSubmitBtn").innerText =
        UI_CONFIG.auth.signupSubmitButton;

    document.getElementById("alreadyAccountText").innerText =
        UI_CONFIG.auth.alreadyAccountText;

    document.getElementById("goToLoginBtn").innerText =
        UI_CONFIG.auth.loginButton;

    // SWITCH TO LOGIN
    document.getElementById("alreadyAccountText")
        .onclick = loadAuthView;

    document.getElementById("goToLoginBtn")
        .onclick = loadAuthView;

    document.getElementById("signupSubmitBtn")
        .onclick = signupUser;
}

function signupUser() {

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("userRole", "USER");
    localStorage.setItem("username", name);

    document.getElementById("authModal").style.display = "none";

    if (typeof renderHeaderButtons === "function") {
        renderHeaderButtons();
    }
}
