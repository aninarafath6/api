const fs = require("fs");

let launchers = require("../data/spacecraft_missions.json");

module.exports = async (req, res) => {
    try {
        res.send(launchers);
    } catch (error) {
        res.status(500);
        const response = error.response || {};
        res.send({
            message: error.message,
            response,
        });
    }
};
