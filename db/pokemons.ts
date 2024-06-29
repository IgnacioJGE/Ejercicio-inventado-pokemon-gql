import mongoose from 'mongoose';
import { Pokemon } from "../types.ts";



const Schema= mongoose.Schema;


const pokemonSchema= new Schema({
    nombre:{type:String,required:true},
    id:{type:Number,required:true},
    URL:{type:String,required:true},
    tipos:{type:[String],required:true},
})


export type tipopokemon= mongoose.Document & (Pokemon)

pokemonSchema.pre("save", async function(next){
    const existe= await mongoose.models.Pokemons.findOne({nombre:this.nombre})
    if(existe){
        next( new Error("Pokemon ya existe en la base de datos"))
    }
    next()
})

export const Modelopokemon= mongoose.model<tipopokemon>("Pokemons",pokemonSchema)