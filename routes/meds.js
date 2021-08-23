const router = require("express").Router()
let Med = require("./../models/meds.model.js")

// Register Med

router.route("/AddMed").post((req,res) => {

    const GenericName = req.body.GenericName
    const QuemicalName = req.body.QuemicalName
    const Image = req.body.Image
    const Characteristics = req.body.Characteristics

    
    const newOrder = new Med({
			GenericName: GenericName,
			QuemicalName: QuemicalName,
			Image: Image,
			Characteristics: Characteristics
    })

    newOrder.save()
        .then((data) => res.json(data))
        .catch(err => res.status(400).json(`This is a Backend Flaw, ERROR: ${err}`))
        
    // })
})

router.route("/Meds").get((req,res) => {
	Med.find().then((meds) => {
		res.json(meds)
	})
})

// router.route("/RetrieveAndSend/:id").get((req,res) => {

//     Med.findById(req.params.id)
//         .then(OrderFound => res.json(OrderFound))
//         .catch(err => console.log(err))

// })


module.exports = router