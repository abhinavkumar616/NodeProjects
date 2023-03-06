const mongoose = require("mongoose")

const docModelSchema = new mongoose.Schema({

    email: {
        type: String
    },
    password: {
        type: Number
    },
    licenceNo: {
        type: String
    },
    name: {
        type: String
    },
    contact: {
        type: String
    },
    specialization: {
        type: String
    },
    qualification: {
        type: String
    },
    language: {
        type: Array
    },
    passwordChangedforb2b: {
        type: Boolean
    },
    licenceCerti: {
        type: String
    },
    signature: {
        type: String,
        default:"https://sanketdoc.blob.core.windows.net/shivam/NUJLJNm3BsPmDzqHlDB5dCK..."
    },
    activeConsults: {
        type: Array
    },
    selectedDay: {
        type: Array
    },
    timeslot_out: {
        type: Date,
        default: Date.now,
    },
    timeslot_in: {
        type: Date,
        default: Date.now()
    },
    slots: {
        type: Array
    },
    access: {
        type: Boolean
    },
    createdTs: {
        type: Date,
        default:new Date(),
    },
    isSubscribed: {
        type: Boolean
    },
    aboutMe: {
        type: String
    },
    designation: {
        type: String
    },
    experience: {
        type: String
    },
    totalPatients: {
        type: String
    },
    picture: {
        type: String,
        default:"https://sanketblob.blob.core.windows.net/abf/doctor.png"
    },
    totalReview: {
        type: String
    },
    rating: {
        type: String
    },
    accountUpdatedAt: {
        type: Date,
        default:new Date()
    }


})

const docModel = new mongoose.model("docModel", docModelSchema)
module.exports = docModel
