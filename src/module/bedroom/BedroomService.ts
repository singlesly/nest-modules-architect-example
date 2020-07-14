/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedroomService
 */
import { BedroomRepository } from "./BedroomRepository";
import { Bedroom } from "./Bedroom";
import { Injectable } from "@nestjs/common";
import { CreateBedroomData } from "./CreateBedroomData";
import { BedService } from "../bed/BedService";
import { TableService } from "../table/TableService";
import { ChairService } from "../chair/ChairService";

@Injectable()
export class BedroomService {
    constructor (
        private readonly bedroomRepository: BedroomRepository,
        private readonly bedService: BedService,
        private readonly tableService: TableService,
        private readonly chairService: ChairService
    ) {}

    public async create(data: CreateBedroomData): Promise<Bedroom> {
        const [chair, table, bed] = await Promise.all([
            this.chairService.get(data.chairId),
            this.tableService.get(data.tableId),
            this.bedService.get(data.bedId)
        ]);
        const id = this.bedroomRepository.count + 1;
        const bedroom = new Bedroom(id)
            .withBeds([bed])
            .withChairs([chair])
            .withTables([table]);

        await this.bedroomRepository.save(bedroom);

        return bedroom;
    }

    public async get(id: number): Promise<Bedroom> {
        return await this.bedroomRepository.get(id);
    }
}
