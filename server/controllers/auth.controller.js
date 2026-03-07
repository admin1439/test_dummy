const authService = require("../services/auth.service");

exports.login = (req, res) => {
    const { username, password } = req.body;
    const result = authService.login(username, password);
    res.json(result);
};

exports.signup = (req, res) => {
    const result = authService.signup(req.body);
    res.json(result);
};
