/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class ChairRepository
 */
import { Chair } from "./Chair";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ChairRepository {

    private readonly items: Chair[] = [];

    public get count(): number {
        return this.items.length;
    }

    public async save(chair: Chair): Promise<void> {
        this.items.push(chair);
    }

    public async get(id: number): Promise<Chair> {
        const item = this.items.find(i => i.id === id);
        if(!item) {
            throw new Error("Not found chair");
        }

        return item;
    }
}
