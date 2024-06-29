import axios from "npm:axios";

export default async function getdatosapi(nombre: string) {
    try {
        const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const tipos: string[] = [];
        respuesta.data.types.map((char) => tipos.push(char.type.name));
        return {
            nombre: nombre,
            id: respuesta.data.id,
            URL: respuesta.data.sprites.front_default,
            tipos: tipos
        };
    } catch (error) {
        throw new Error("Nombre de pokemon incorrecto");
    }
}
