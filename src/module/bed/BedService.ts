/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedService
 */
import { BedRepository } from "./BedRepository";
import { Bed } from "./Bed";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BedService {
    constructor (
        private readonly bedRepository: BedRepository
    ) {}

    public async create(size: number): Promise<Bed> {
        const id = this.bedRepository.count + 1;
        const bed = new Bed(id, size);

        await this.bedRepository.save(bed);

        return bed;
    }

    public async get(id: number): Promise<Bed> {
        return await this.bedRepository.get(id);
    }
}
