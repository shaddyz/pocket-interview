import { Genre } from "../api/models/Genre";
import { MovieRecord } from "./models/MovieRecord";

export const movieData: MovieRecord[] = [
    {
        id: "turner-and-hooch",
        title: "Turner & Hooch",
        genre: Genre.COMEDY,
        minutesLong: 97,
        actors: [
            "beasley",
        ]
    },
    {
        id: "flipper",
        title: "Flipper",
        genre: Genre.ADVENTURE,
        minutesLong: 87,
        actors: [
            "susie",
            "patty",
            "squirt",
            "scotty",
            "kathy",
            "clown",
        ]
    },
    {
        id: "air-bud",
        title: "Air Bud",
        genre: Genre.COMEDY,
        minutesLong: 98,
        actors: [
            "buddy",
        ]
    },
    {
        id: "the-bear",
        title: "The Bear",
        genre: Genre.ADVENTURE,
        minutesLong: 96,
        actors: [
            "bart",
        ]
    },
    {
        id: "the-edge",
        title: "The Edge",
        genre: Genre.ACTION,
        minutesLong: 117,
        actors: [
            "bart",
        ]
    },
    {
        id: "the-great-outdoors",
        title: "The Great Outdoors",
        genre: Genre.ACTION,
        minutesLong: 91,
        actors: [
            "bart",
        ]
    },
    {
        id: "legends-of-the-fall",
        title: "Legends of the Fall",
        genre: Genre.ROMANCE,
        minutesLong: 133,
        actors: [
            "bart",
        ]
    },
]