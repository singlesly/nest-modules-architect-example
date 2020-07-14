/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedroomController
 */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateBedroomData } from "../bedroom/CreateBedroomData";
import { BedroomService } from "../bedroom/BedroomService";
import { Bedroom } from "../bedroom/Bedroom";

@Controller()
export class BedroomController {
    constructor(
        private readonly bedroomService: BedroomService
    ) {}

    @Post("/bedroom")
    public async create(@Body() data: CreateBedroomData): Promise<Bedroom> {
        return this.bedroomService.create(data);
    }

    @Get("/bedroom/:id")
    public async find(@Param("id", ParseIntPipe) id: number): Promise<Bedroom> {
        return this.bedroomService.get(id)
    }
}
