import mongoose from "mongoose";
import motif from "../motif/motif.json"

const clientSchema = new mongoose.Schema({
    nom: {
        type: String,
        required:true
    },
    prenoms:{
        type: String,
        required:true
    },
   numero_de_telephone:{
       type: String,
       required: true,
       minLength: 10,
       maxLength:10
   },
   mail:{
       type: String,
       required: false
   },
   adresse_geographique:{
       type: String,
       required: true

   },
   reference_contrat:{
       type: String,
       maxLength:9,
       minLength:9,
       required:true
       

   },

   motifs: {
       type:motif,
       required:true
   },

   description:{
       type: String,


   },


},
{timestamps: true});

/*
|--------------------------------------------
| ADDITIONAL SCHEMAS APPEAR HERE
|--------------------------------------------
*/
export const User = mongoose.model('mainCollection', clientSchema);

