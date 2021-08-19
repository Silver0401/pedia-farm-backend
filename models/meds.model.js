const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MedsSchema = new Schema({
    QuemicalName: {
        type: String,
        required: true,
    },
    GenericName: {
        type: String,
        required: true,
    },
    Image:{
        type: String,
        required: true
    },
		Characteristics: {
			type: Object,
			required: true
		}

}, {
    timestamps: false
}
)
const Med = mongoose.model("Med", MedsSchema)

module.exports = Med