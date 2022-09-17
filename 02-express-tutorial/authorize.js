const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === "Godsent") {
        req.user = { name: "Godsent", id: 3 };
        next();
    } else {
        res.status(401).send("unauthorized");
    }
};

module.exports = authorize;