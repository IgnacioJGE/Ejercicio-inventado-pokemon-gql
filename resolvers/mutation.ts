import { Modelopokemon } from "../db/pokemons.ts";


export const Mutation={

    deletePokemon:async(_:unknown,
        args:{id:string}
    )=>{
        try {
           const poke= await Modelopokemon.findByIdAndDelete(args.id)
            if(poke==null){
                throw new Error()
            }
            return true
        } catch (error) {
            return false
        }
    }
}