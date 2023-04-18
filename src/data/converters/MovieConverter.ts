import { Service } from "@tsed/di";
import { MovieRecord } from "../models/MovieRecord";
import { Movie } from "../../api/models/Movie";

@Service()
export class MovieConverter {

    public toApi(record: MovieRecord): Movie {
        return {
            id: record.id,
            title: record.title,
            minutesLong: record.minutesLong,
            genre: record.genre,
            actors: record.actors,
        }
    }
}