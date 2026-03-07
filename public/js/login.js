/* =========================================
   APPLY LOGIN CONFIG
========================================= */

function applyLoginConfig() {

    if (!UI_CONFIG || !UI_CONFIG.auth) return;

    // LEFT PANEL
    const welcomeTitle = document.getElementById("welcomeTitle");
    const welcomeDesc = document.getElementById("welcomeDesc");

    if (welcomeTitle)
        welcomeTitle.innerText =
            UI_CONFIG.auth.welcomeTitle;

    if (welcomeDesc)
        welcomeDesc.innerText =
            UI_CONFIG.auth.welcomeDescription;

    // RIGHT PANEL
    const loginTitle = document.getElementById("loginTitle");
    if (loginTitle)
        loginTitle.innerText =
            UI_CONFIG.auth.loginTitle;

    const usernameInput =
        document.getElementById("usernameInput");

    if (usernameInput)
        usernameInput.placeholder =
            UI_CONFIG.auth.usernamePlaceholder;

    const passwordInput =
        document.getElementById("passwordInput");

    if (passwordInput)
        passwordInput.placeholder =
            UI_CONFIG.auth.passwordPlaceholder;

    const signInBtn =
        document.getElementById("signInBtn");

    if (signInBtn)
        signInBtn.innerText =
            UI_CONFIG.auth.loginButton;

    const createAccountText =
        document.getElementById("createAccountText");

    if (createAccountText) {
        createAccountText.innerText =
            UI_CONFIG.auth.createAccountText;

        createAccountText.onclick = openSignup;
    }

    // LEFT SIDE BUTTON
    const goToSignupBtn =
        document.getElementById("leftSignupBtn");

    if (goToSignupBtn) {
        goToSignupBtn.innerText =
            UI_CONFIG.auth.signupButton;

        goToSignupBtn.onclick = openSignup;
    }
}
