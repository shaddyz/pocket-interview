import { NotFound } from "@tsed/exceptions";
import { GetMovieInput } from "../api/envelopes/GetMovieInput";
import { GetMovieOutput } from "../api/envelopes/GetMovieOutput";
import { MovieRepository } from "../data/MovieRepository";
import { Service } from "@tsed/di";
import { MovieConverter } from "../data/converters/MovieConverter";

@Service()
export class GetMovieOperation {

    public constructor(
        private readonly repository: MovieRepository,
        private readonly converter: MovieConverter,
    ) {}

    public execute(input: GetMovieInput): GetMovieOutput {
        const record = this.repository.get(input.id)
        if (record == null) {
            throw new NotFound("Movie with ID = '" + input.id + "' not found")
        } else {
            return {
                movie: this.converter.toApi(record),
            }
        }
    }
}