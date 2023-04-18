import { Genre } from "../models/Genre"
import { ID } from "../models/ID"

export interface CreateMovieInput {
    id: ID
    title: string
    genre: Genre
    minutesLong: number
    actors: ID[]
}