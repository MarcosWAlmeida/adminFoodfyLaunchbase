const express = require('express')
const routes = express.Router() // faz com q a variavel routes seja reponsavel pelas rotas
const recipes = require('./controller/recipes')

routes.get("/", function(req , res){
    return res.redirect("recipes")
})

routes.get("/recipes", recipes.index)

routes.get("/recipes/create" , recipes.create)
routes.post("/recipes" , recipes.post)

module.exports = routes