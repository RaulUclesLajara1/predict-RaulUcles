'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Prediction = new Schema({
    prediction_value : {type:Number, required: true},
    fecha : {type: Date, default: Date.now},
    features : { type: [Number]},
    //DataID : {type: Number}
}
)

module.exports = mongoose.model('Prediction', Prediction)