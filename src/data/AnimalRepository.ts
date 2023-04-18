import { Service, registerProvider } from "@tsed/di";
import { ID } from "../api/models/ID";
import { AnimalRecord } from "./models/AnimalRecord";
import { animalData } from "./Animal.data";

@Service()
export class AnimalRepository {

    private readonly data: Map<ID, AnimalRecord>;

    public constructor(backingStore: Map<ID, AnimalRecord>) {
        this.data = backingStore;
    }

    public get(id: ID): AnimalRecord | undefined {
        return this.data.get(id);
    }
}

registerProvider({
    provide: AnimalRepository,
    useFactory: () => {
        return new AnimalRepository(new Map<ID, AnimalRecord>(
            animalData.map(record => [record.id, record])
        ))
    }
})