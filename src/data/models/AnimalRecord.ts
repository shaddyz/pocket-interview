import { ID } from "../../api/models/ID"

export interface AnimalRecord {
    id: ID
    name: string
    species: string
    breed: string
    filmography: ID[]
}