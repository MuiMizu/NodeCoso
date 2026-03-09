import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./routes/index.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(indexRoutes);

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
