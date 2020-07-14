/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class TableModule
 */
import { Module } from "@nestjs/common";
import { TableService } from "./TableService";
import { TableRepository } from "./TableRepository";

@Module({
    providers: [
        TableService,
        TableRepository
    ],
    exports: [
        TableRepository,
        TableService
    ]
})
export class TableModule {
}
