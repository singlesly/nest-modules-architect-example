/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class TableHttpModule
 */
import { Module } from "@nestjs/common";
import { TableController } from "./TableController";
import { TableModule } from "../table/TableModule";

@Module({
    imports: [
        TableModule
    ],
    controllers: [
        TableController
    ]
})
export class TableHttpModule {
}
