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
    return pokimon
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
    }
}