const fs = require("fs");
const paths = require("../config/paths.config");

exports.getConfig = () => {
    const data = fs.readFileSync(paths.configFile);
    return JSON.parse(data);
};

exports.updateConfig = (data) => {
    fs.writeFileSync(
        paths.configFile,
        JSON.stringify(data, null, 2)
    );
};
