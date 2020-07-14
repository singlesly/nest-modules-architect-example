/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedroomModule
 */
import { Module } from "@nestjs/common";
import { BedroomService } from "./BedroomService";
import { BedroomRepository } from "./BedroomRepository";
import { BedModule } from "../bed/BedModule";
import { ChairModule } from "../chair/ChairModule";
import { TableModule } from "../table/TableModule";

@Module({
    imports: [
        BedModule,
        ChairModule,
        TableModule,
    ],
    providers: [
        BedroomService,
        BedroomRepository
    ],
    exports: [
        BedroomRepository,
        BedroomService
    ]
})
export class BedroomModule {
}
