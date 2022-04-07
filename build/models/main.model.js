"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const motif_json_1 = __importDefault(require("../motif/motif.json"));
const clientSchema = new mongoose_1.default.Schema({
    nom: {
        type: String,
        required: true
    },
    prenoms: {
        type: String,
        required: true
    },
    numero_de_telephone: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 10
    },
    mail: {
        type: String,
        required: false
    },
    adresse_geographique: {
        type: String,
        required: true
    },
    reference_contrat: {
        type: String,
        maxLength: 9,
        minLength: 9,
        required: true
    },
    motifs: {
        type: motif_json_1.default,
        required: true
    },
    description: {
        type: String,
    },
}, { timestamps: true });
/*
|--------------------------------------------
| ADDITIONAL SCHEMAS APPEAR HERE
|--------------------------------------------
*/
exports.User = mongoose_1.default.model('mainCollection', clientSchema);
