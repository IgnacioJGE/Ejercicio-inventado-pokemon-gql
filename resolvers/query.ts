import { Modelopokemon } from "../db/pokemons.ts";
import { tipopokemon } from "../db/pokemons.ts";
import { Pokemon} from "../types.ts";
import getdatosapi from "../funtions.ts";

export const Query={
    getPokemonApi : async (_:unknown,
        args:{nombre:string}
    )=>{
try {
    const pokimon= await getdatosapi(args.nombre)
    const nuevopokemon= new Modelopokemon(pokimon)
    await nuevopokemon.save()
    return nuevopokemon
} catch (error) {
    if(error.message.startsWith("Pokemon")){
        const Pokemon= await Modelopokemon.findOne({nombre:args.nombre})
        return({
            nombre:Pokemon?.nombre,
            id:Pokemon?.id,
            URL:Pokemon?.URL,
            tipos:Pokemon?.tipos
        })
    }
    return new Error(error.message)
}
    },
    getPokemon: async (_:unknown,
        args:{id:string}
    )=>{
try {
    const Pokemon = await Modelopokemon.findById(args.id)
    return(Pokemon)
} catch (error) {
    return new Error("Pokemon no existe en la base de datos")
}
    },
    getPokemons: async ()=>{
        try {
            const pokemons= await Modelopokemon.find();
            if(pokemons.length==0){
                throw new Error("No hay pokemons en la base de datos")
            }
            return pokemons
        } catch (error) {
            return new Error (error.message)
        }
    }
}