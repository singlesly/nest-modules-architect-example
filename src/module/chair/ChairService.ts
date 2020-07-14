/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class ChairService
 */
import { ChairRepository } from "./ChairRepository";
import { Chair } from "./Chair";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ChairService {
    constructor (
        private readonly chairRepository: ChairRepository
    ) {}

    public async create(size: number): Promise<Chair> {
        const id = this.chairRepository.count + 1;
        const bed = new Chair(id, size);

        await this.chairRepository.save(bed);

        return bed;
    }

    public async get(id: number): Promise<Chair> {
        return await this.chairRepository.get(id);
    }
}
