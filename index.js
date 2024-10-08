import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs");
})

app.get("/about", (req, res) => {
    res.render(__dirname + "/views/about.ejs");
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
})