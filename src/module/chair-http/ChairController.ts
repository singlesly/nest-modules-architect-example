/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class ChairController
 */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ChairService } from "../chair/ChairService";
import { Chair } from "../chair/Chair";

@Controller()
export class ChairController {
    constructor(
        private readonly chairService: ChairService
    ) {}

    @Post("/chair")
    public async create(@Body() size: number): Promise<Chair> {
        return this.chairService.create(size);
    }

    @Get("/chair/:id")
    public async find(@Param("id", ParseIntPipe) id: number): Promise<Chair> {
        return this.chairService.get(id)
    }
}
