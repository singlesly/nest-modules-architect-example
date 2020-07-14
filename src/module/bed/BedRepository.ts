/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedRepository
 */
import { Bed } from "./Bed";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BedRepository {

    private readonly items: Bed[] = [];

    public get count(): number {
        return this.items.length;
    }

    public async save(bed: Bed): Promise<void> {
        this.items.push(bed);
    }

    public async get(id: number): Promise<Bed> {
        const item = this.items.find(i => i.id === id);
        if(!item) {
            throw new Error("Not found bed");
        }

        return item;
    }
}
