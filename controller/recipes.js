const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res){
    return res.render("recipes/index" , {recipes: data.recipes})
}

// create 

exports.create = function(req , res){
    return res.render("recipes/create")
}

exports.post = function(req , res){
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "") {
            return res.send("Please , fill all fields")
        }
    }

    let {url_img , recipes_add , recipes_prep , additional_inf} = req.body

    const id = Number(data.recipes.length + 1)

    data.recipes.push({
        id,
        url_img , 
        recipes_add, 
        recipes_prep, 
        additional_inf
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/recipes")
    })
}
