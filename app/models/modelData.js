const { Schema } = require('mongoose');

const barriSchema = new Schema({
    id : {type: Number, required:true},
    "NOMBRE DEL BARRIO" : {type: String, required:true},
    formacionNum : {type: Number, required:true},
    paradosNum : {type: Number, required:true},
    rentaNum : {type: Number, required:true},
    pobMas65Num : {type: Number, required:true},
    indiceSobreEnvejecimientoNum : {type: Number, required:true},
});

module.exports = barriSchema;