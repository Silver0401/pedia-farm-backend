const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MedsSchema = new Schema({
    MedName: {
        type: String,
        required: true,
    },
    TherapeuticUse: {
        type: String,
        required: true,
    },
    AdverseEffects:{
        type: Object,
        required: true
    },
		RelativeMeds:{
			type: Object,
			required: true
		}

}, {
    timestamps: false
}
)
const Med = mongoose.model("Med", MedsSchema)

module.exports = Med