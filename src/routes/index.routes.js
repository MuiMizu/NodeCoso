import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/about", (req, res) => {
    res.render("about");
});

router.get("/blog", (req, res) => {
    res.render("blog");
});

router.get("/causes", (req, res) => {
    res.render("causes");
});

router.get("/contact", (req, res) => {
    res.render("contact");
});

router.get("/donation", (req, res) => {
    res.render("donation");
});

router.get("/events", (req, res) => {
    res.render("events");
});

router.get("/gallery", (req, res) => {
    res.render("gallery");
});

router.get("/service", (req, res) => {
    res.render("service");
});

router.get("/volunteer", (req, res) => {
    res.render("volunteer");
});

export default router;
