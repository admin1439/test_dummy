const configService = require("../services/config.service");

exports.getConfig = (req, res) => {
    const config = configService.getConfig();
    res.json(config);
};

exports.updateConfig = (req, res) => {
    configService.updateConfig(req.body);
    res.json({ success: true });
};
