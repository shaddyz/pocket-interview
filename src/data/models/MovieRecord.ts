import { Genre } from "../../api/models/Genre"
import { ID } from "../../api/models/ID"

export interface MovieRecord {
    id: ID
    title: string
    genre: Genre
    minutesLong: number
    actors: string[]
}