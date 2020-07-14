/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedModule
 */
import { Module } from "@nestjs/common";
import { BedService } from "./BedService";
import { BedRepository } from "./BedRepository";

@Module({
    providers: [
        BedService,
        BedRepository
    ],
    exports: [
        BedRepository,
        BedService
    ]
})
export class BedModule {
}
