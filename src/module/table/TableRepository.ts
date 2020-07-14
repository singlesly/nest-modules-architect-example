/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class TableRepository
 */
import { Table } from "./Table";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TableRepository {

    private readonly items: Table[] = [];

    public get count(): number {
        return this.items.length;
    }

    public async save(table: Table): Promise<void> {
        this.items.push(table);
    }

    public async get(id: number): Promise<Table> {
        const item = this.items.find(i => i.id === id);
        if(!item) {
            throw new Error("Not found table");
        }

        return item;
    }
}
