const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        // required: true,
    },
    role: {
        type: String,
        default: "doctor",
        enum: ["doctor"]
    },
    degree: {
        type: String,
        // required: true,
    },
    speciality: {
        type: String,
        // required: true,
    },
    hospitalName: {
        type: [String],
        // required: true,
    },
    hospitalContact: {
        type: String,
        // required: true,
    },
    hospitalAddress: {
        type: String,
        // required: true,
    },
    unavailable: {
        type: String,
        // required: true,
    },
    dayTime: {
        type: String,
        // required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    blockReason: {
        type: String,

    },
    verify: {
        type: Boolean,
        default: false,
    }

}, { timestamps: true })
module.exports = mongoose.models.doctor || mongoose.model("doctor", doctorSchema)
