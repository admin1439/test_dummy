const express = require("express");
const cors = require("cors");
require("dotenv").config();

const appConfig = require("./config/app.config");
const paths = require("./config/paths.config");

const configRoutes = require("./routes/config.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

/* PUBLIC FILES */
app.use(express.static(paths.publicPath));

/* API ROUTES */
app.use("/api/config", configRoutes);
app.use("/api/auth", authRoutes);

/* SERVER START */
app.listen(appConfig.port, () => {
    console.log(`Server running on port ${appConfig.port}`);
});
const path = require("path");

app.use((req, res) => {
    res.sendFile(
        path.join(__dirname, "../public/index.html")
    );
});


