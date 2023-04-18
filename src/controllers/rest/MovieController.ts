import { Controller } from "@tsed/di";
import { ContentType, Get } from "@tsed/schema";
import { GetMovieOperation } from "../../operations/GetMovieOperation";
import { PathParams } from "@tsed/common";
import { GetMovieOutput } from "../../api/envelopes/GetMovieOutput";

@Controller("/movies")
export class MovieController {

    public constructor(
        private readonly getOp: GetMovieOperation
    ) {}
    
  @Get("/:id")
  @ContentType("json")
  get(@PathParams("id") id: string): GetMovieOutput {
    return this.getOp.execute({
        id: id,
    })
  }
}
