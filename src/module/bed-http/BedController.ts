/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedController
 */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { BedService } from "../bed/BedService";
import { Bed } from "../bed/Bed";

@Controller()
export class BedController {
    constructor(
        private readonly bedService: BedService
    ) {}

    @Post("/bed")
    public async create(@Body() size: number): Promise<Bed> {
        return this.bedService.create(size);
    }

    @Get("/bed/:id")
    public async find(@Param("id", ParseIntPipe) id: number): Promise<Bed> {
        return this.bedService.get(id)
    }
}
