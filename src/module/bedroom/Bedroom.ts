/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class Bed
 */
import { Chair } from "../chair/Chair";
import { Table } from "../table/Table";
import { Bed } from "../bed/Bed";

export class Bedroom {
    id: number;
    chairs: Chair[] = [];
    tables: Table[] = [];
    beds: Bed[] = [];

    constructor(id: number) {
        this.id = id;
    }

    public withChairs(chairs: Chair[]): this {
        this.chairs = chairs;
        return this;
    }

    public withTables(tables: Table[]): this {
        this.tables = tables;
        return this;
    }

    public withBeds(beds: Bed[]): this {
        this.beds = beds;
        return this;
    }
}
