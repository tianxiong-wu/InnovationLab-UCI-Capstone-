const tutorial  = require('./tutorial.model');
const pharmacist = require('./pharmacist.model');
const event = require('./event.model');
const notification = require('./notification.model');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// patient
const patientSchema = new Schema({

    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
  
    },
    password: {
        type: String
    },
    phoneNumber: {
        type: String,
        trim: true,
   
    },
    email: {
        type: String,
        trime: true,
        required: true,
    },
    birthday: {
        type: Date,
    },
    role: {
        type: String,
        default: 'patient',
        emun: ['patient', 'pharmacist', 'admin']
    },
    infusionArray: {
        type: [tutorial.schema],
        default: []

    },
    password: {
        type: String
    },
    notification: {
        type: [notification.schema],
        default: []
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'others'],
    },
    recentCheckIn: {
        type: Date,
    },
    nextCheckIn: {
        type: Date,
    },
    notificationType: {
        type: String,
        enum: ['text', 'email', 'both', 'none'],
        default: 'both'
    },
    assignedPharmacist: {
        type: [pharmacist.schema],
        default: []
    },
    events: {
        type: [event.schema],
        default: []
    },
    infusionType: {
        type: Array,
        default: []
    }
}, {
    timestamps: true,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;