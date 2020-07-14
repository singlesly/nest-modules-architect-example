/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedroomRepository
 */
import { Bedroom } from "./Bedroom";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BedroomRepository {

    private readonly items: Bedroom[] = [];

    public get count(): number {
        return this.items.length;
    }

    public async save(bedroom: Bedroom): Promise<void> {
        this.items.push(bedroom);
    }

    public async get(id: number): Promise<Bedroom> {
        const item = this.items.find(i => i.id === id);
        if(!item) {
            throw new Error("Not found bedroom");
        }

        return item;
    }
}
