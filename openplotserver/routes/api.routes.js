const apiController = require("../controllers/api.controller")

module.exports = app => {
    app.get("/api/photoapi", apiController.photoAPI)
    app.get("/api/villagerapi", apiController.villagerAPI)
    app.get("/api",(req,res) => {res.json({message:"Hello World"})})
}