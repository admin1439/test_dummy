let UI_CONFIG = {};
let CONFIG_READY = false;

/* ===============================
   LOAD CONFIG
================================ */

fetch("/api/config")
    .then(res => res.json())
    .then(config => {
        UI_CONFIG = config;
        CONFIG_READY = true;
        applyIndexConfig();
    })
    .catch(err => console.error("Config load error:", err));


/* ===============================
   APPLY INDEX CONFIG
================================ */

function applyIndexConfig() {

    if (!CONFIG_READY) return;

    if (document.getElementById("logo"))
        document.getElementById("logo").innerText =
            UI_CONFIG.app.logo;

    if (document.getElementById("heroTitle"))
        document.getElementById("heroTitle").innerText =
            UI_CONFIG.hero.title;

    if (document.getElementById("heroDesc"))
        document.getElementById("heroDesc").innerText =
            UI_CONFIG.hero.description;

    document.title = UI_CONFIG.app.title;

    renderHeaderButtons();
}


/* ===============================
   HEADER BUTTON RENDER
================================ */

function renderHeaderButtons() {

    const authContainer = document.getElementById("authButtons");
    if (!authContainer) return;

    const role = localStorage.getItem("userRole");
    const username = localStorage.getItem("username");

    // USER LOGGED IN
    if (role) {

        authContainer.innerHTML = `
            <div class="user-info">
                <span class="user-name">
                    ${UI_CONFIG.auth.welcomePrefix || "Welcome"}, ${username}
                </span>
                <button id="logoutBtn">
                    ${UI_CONFIG.auth.logoutButton || "Logout"}
                </button>
            </div>
        `;

        document.getElementById("logoutBtn")
            .addEventListener("click", logoutUser);

    } 
    // USER NOT LOGGED IN
    else {

        authContainer.innerHTML = `
            <button id="loginBtn">
                ${UI_CONFIG.auth.loginButton}
            </button>

            <button id="signupBtn">
                ${UI_CONFIG.auth.signupButton}
            </button>
        `;

        document.getElementById("loginBtn")
            .addEventListener("click", openLogin);

        document.getElementById("signupBtn")
            .addEventListener("click", openSignup);
    }
}


/* ===============================
   OPEN LOGIN MODAL
================================ */

function openLogin() {

    if (!CONFIG_READY) {
        console.log("Config not ready yet");
        return;
    }

    document.getElementById("authModal").style.display = "flex";
    loadAuthView();
}



/* ===============================
   OPEN SIGNUP MODAL
================================ */

function openSignup() {

    if (!CONFIG_READY) {
        console.log("Config not ready yet");
        return;
    }

    document.getElementById("authModal").style.display = "flex";

    fetch("/views/signup.html")
        .then(res => res.text())
        .then(html => {

            document.getElementById("modalContent").innerHTML = html;

            if (typeof applySignupConfig === "function") {
                applySignupConfig();
            }
        });
}



/* ===============================
   LOAD LOGIN VIEW
================================ */

function loadAuthView() {

    fetch("/views/login.html")
        .then(res => res.text())
        .then(html => {

            document.getElementById("modalContent").innerHTML = html;

            // apply login config AFTER HTML load
            if (typeof applyLoginConfig === "function") {
                applyLoginConfig();
            }
        });
}


/* ===============================
   LOGOUT
================================ */

function logoutUser() {

    localStorage.removeItem("userRole");
    localStorage.removeItem("username");

    renderHeaderButtons();

    location.reload();
}


/* ===============================
   CLOSE MODAL
================================ */

window.addEventListener("click", function (event) {

    const modal = document.getElementById("authModal");
    if (!modal) return;

    if (event.target === modal) {
        modal.style.display = "none";
    }
});
