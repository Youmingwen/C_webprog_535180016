const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
    res.json({
        message: "akses API",
    });
});

app.listen(3000, () => console.log(`server berjalan pada port 3000`));