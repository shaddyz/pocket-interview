import { Service, registerProvider } from "@tsed/di";
import { ID } from "../api/models/ID";
import { MovieRecord } from "./models/MovieRecord";
import { movieData } from "./Movie.data";

@Service()
export class MovieRepository {

    private readonly data: Map<ID, MovieRecord>;

    public constructor(backingStore: Map<ID, MovieRecord>) {
        this.data = backingStore;
    }

    public get(id: ID): MovieRecord | undefined {
        return this.data.get(id);
    }

    public scan(): IterableIterator<MovieRecord> {
        return this.data.values();
    }
}

registerProvider({
    provide: MovieRepository,
    useFactory: () => {
        console.log("movieData")
        return new MovieRepository(new Map<ID, MovieRecord>(
            movieData.map(record => [record.id, record])
        ))
    }
})