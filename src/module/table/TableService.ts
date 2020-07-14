/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class TableService
 */
import { TableRepository } from "./TableRepository";
import { Table } from "./Table";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TableService {
    constructor (
        private readonly tableRepository: TableRepository
    ) {}

    public async create(size: number): Promise<Table> {
        const id = this.tableRepository.count + 1;
        const bed = new Table(id, size);

        await this.tableRepository.save(bed);

        return bed;
    }

    public async get(id: number): Promise<Table> {
        return await this.tableRepository.get(id);
    }
}
