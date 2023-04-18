import { Genre } from "./Genre"
import { ID } from "./ID"

export interface Movie {
    id: ID
    title: string
    genre: Genre
    minutesLong: number
    actors: ID[]
}