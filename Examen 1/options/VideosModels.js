//const { time } = require("console");
const { Schema, model } = require("mongoose");

const SchemaVideos = Schema(
{
    titulo: 
    {
        type: String,
    },
    
    descripcion: 
    {
        type: String
    },
    
    duracion: 
    {
        type: String
    },
    
    autor: 
    {
        type: String
    },

    enlacevideo:
    {
        type: String
    },

    fechaexacta:
    {
        type: Date
    },
    
    activo: 
    {
        type: Boolean,
        default: true
    }

});

module.exports = model("Videos", SchemaVideos);