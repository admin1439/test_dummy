let UI_CONFIG = null;

/* =========================================
   INIT AUTH UI
========================================= */

async function initAuthUI() {

    const res = await fetch("/config/ui-config.json");
    UI_CONFIG = await res.json();

    // IMPORTANT FIX:
    // wait until login/signup HTML is fully rendered
    setTimeout(applyAuthConfig, 0);
}


/* =========================================
   APPLY CONFIG TO UI
========================================= */

function applyAuthConfig() {

    if (!UI_CONFIG || !UI_CONFIG.auth) return;

    /* ---------- LEFT PANEL ---------- */

    const welcomeTitle = document.getElementById("welcomeTitle");
    const welcomeDesc = document.getElementById("welcomeDesc");
    const leftSignupBtn = document.getElementById("leftSignupBtn");

    if (welcomeTitle)
        welcomeTitle.innerText = UI_CONFIG.auth.signupWelcomeTitle;

    if (welcomeDesc)
        welcomeDesc.innerText = UI_CONFIG.auth.welcomeDescription;

    if (leftSignupBtn)
        leftSignupBtn.innerText = UI_CONFIG.auth.leftSignupButton;


    /* ---------- LOGIN FORM ---------- */

    const loginTitle = document.getElementById("loginTitle");
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");
    const signInBtn = document.getElementById("signInBtn");
    const createAccountText = document.getElementById("createAccountText");

    if (loginTitle)
        loginTitle.innerText = UI_CONFIG.auth.loginTitle;

    if (usernameInput)
        usernameInput.placeholder = UI_CONFIG.auth.usernamePlaceholder;

    if (passwordInput)
        passwordInput.placeholder = UI_CONFIG.auth.passwordPlaceholder;

    if (signInBtn)
        signInBtn.innerText = UI_CONFIG.auth.signInButton;

    if (createAccountText)
        createAccountText.innerText = UI_CONFIG.auth.createAccountText;


    /* ---------- SIGNUP FORM ---------- */

    const signupTitle = document.getElementById("signupTitle");
    const signupName = document.getElementById("signupName");
    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");
    const signupSubmitBtn = document.getElementById("signupSubmitBtn");
    const alreadyAccountText = document.getElementById("alreadyAccountText");

    if (signupTitle)
        signupTitle.innerText = UI_CONFIG.auth.signupTitle;

    if (signupName)
        signupName.placeholder = UI_CONFIG.auth.usernamePlaceholder;

    if (signupEmail)
        signupEmail.placeholder = UI_CONFIG.auth.emailPlaceholder;

    if (signupPassword)
        signupPassword.placeholder = UI_CONFIG.auth.passwordPlaceholder;

    if (signupSubmitBtn)
        signupSubmitBtn.innerText = UI_CONFIG.auth.signupSubmitButton;

    if (alreadyAccountText)
        alreadyAccountText.innerText = UI_CONFIG.auth.alreadyAccountText;


    attachAuthSwitchEvents();
}


/* =========================================
   SWITCH LOGIN <-> SIGNUP
========================================= */

function attachAuthSwitchEvents() {

    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const createAccountText =
        document.getElementById("createAccountText");

    const alreadyAccountText =
        document.getElementById("alreadyAccountText");

    const leftSignupBtn =
        document.getElementById("leftSignupBtn");

    if (createAccountText) {
        createAccountText.onclick = () => {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        };
    }

    if (alreadyAccountText) {
        alreadyAccountText.onclick = () => {
            signupForm.style.display = "none";
            loginForm.style.display = "block";
        };
    }

    if (leftSignupBtn) {
        leftSignupBtn.onclick = () => {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        };
    }
}
