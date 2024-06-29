export const typeDefs=`#graphql
type Pokemon{
nombre:String!,
id:Int!,
URL:String!,
tipos:[String!]!
}
type Query{
getPokemon(id:ID!):Pokemon!
getPokemonApi(nombre:String!):Pokemon!
getPokemons:[Pokemon!]!
}
type Mutation{
deletePokemon(id:ID!):Boolean!
}
`