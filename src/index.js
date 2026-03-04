import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const port = process.env.PORT || 3000;

console.log(`_dirname: ${_dirname}`);

const app = express();

app.use(express.static(path.join(_dirname, "../public")));
app.set("views", path.join(_dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})


