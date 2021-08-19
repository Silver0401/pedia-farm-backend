const router = require("express").Router()
let Support = require("./../models/support.model.js")

// Register Support


router.route("/HelpRequest").post((req,res) => {

    const Name = req.body.Name
    const Email = req.body.Email
    const Message = req.body.Message
    
    const newSupport = new Support({
        Name : Name,
        Email : Email,
        Message : Message,
    })

    newSupport.save()
        .then(() => res.json("Support request succesfully placed"))
        .catch(err => res.status(400).json(`This is a BE ERROR: ${err}`))
      
})



module.exports = router