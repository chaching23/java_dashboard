const dahsboard = require('../controllers/controllers');

module.exports = (app) => {
    app.get("/", dahsboard.index)
    app.get("/view", dahsboard.view)
    app.post("/users", dahsboard.users)
};





