/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class ChairModule
 */
import { Module } from "@nestjs/common";
import { ChairService } from "./ChairService";
import { ChairRepository } from "./ChairRepository";

@Module({
    providers: [
        ChairService,
        ChairRepository
    ],
    exports: [
        ChairRepository,
        ChairService
    ]
})
export class ChairModule {
}
