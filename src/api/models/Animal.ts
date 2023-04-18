import { ID } from "./ID"

export interface Animal {
    id: ID
    name: string
    species: string
    breed: string
    filmography: ID[]
}