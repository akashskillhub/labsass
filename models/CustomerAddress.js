const mongoose = require("mongoose")

const customerAddressSchema = mongoose.Schema({
    customer: {
        type: mongoose.Types.ObjectId,
        ref: "customer",
    },
    // customer: {
    //     type: String,
    // required: true,
    // },
    location: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
})
module.exports = mongoose.models.customerAddress || mongoose.model("customerAddress", customerAddressSchema)