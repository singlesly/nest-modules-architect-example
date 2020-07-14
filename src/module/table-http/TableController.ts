/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class TableController
 */
import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { Table } from "../table/Table";
import { TableService } from "../table/TableService";

@Controller()
export class TableController {
    constructor(
        private readonly tableService: TableService
    ) {}

    @Post("/table")
    public async create(@Body() size: number): Promise<Table> {
        return this.tableService.create(size);
    }

    @Get("/table/:id")
    public async find(@Param("id", ParseIntPipe) id: number): Promise<Table> {
        return this.tableService.get(id)
    }
}
