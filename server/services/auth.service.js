const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "../storage/users.json");

function getUsers() {
    return JSON.parse(fs.readFileSync(usersPath));
}

function saveUsers(users) {
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}

/* ======================
   LOGIN
====================== */

exports.login = (username, password) => {

    const users = getUsers();

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return { success: false };
    }

    return {
        success: true,
        role: user.role
    };
};


/* ======================
   SIGNUP
====================== */

exports.signup = (data) => {

    const users = getUsers();

    // check existing user
    const exists = users.find(u => u.username === data.username);

    if (exists) {
        return {
            success: false,
            message: "User already exists"
        };
    }

    const newUser = {
        username: data.username,
        password: data.password,
        role: "user"
    };

    users.push(newUser);

    saveUsers(users);

    return {
        success: true
    };
};
