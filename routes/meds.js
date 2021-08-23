const router = require("express").Router()
let Med = require("./../models/meds.model.js")

// Register Med

router.route("/AddMed").post((req,res) => {

    const MedName = req.body.MedName
    const TherapeuticUse = req.body.TherapeuticUse
    const AdverseEffects = req.body.AdverseEffects
    const Dosification = req.body.Dosification

    
    const newOrder = new Med({
			MedName: MedName,
			TherapeuticUse: TherapeuticUse,
			AdverseEffects: AdverseEffects,
			Dosification: Dosification
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