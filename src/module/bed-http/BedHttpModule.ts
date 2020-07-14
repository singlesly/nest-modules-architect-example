/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedHttpModule
 */
import { Module } from "@nestjs/common";
import { BedModule } from "../bed/BedModule";
import { BedController } from "./BedController";

@Module({
    imports: [
        BedModule
    ],
    controllers: [
        BedController
    ]
})
export class BedHttpModule {
}
