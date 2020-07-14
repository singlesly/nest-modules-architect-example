/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class ChairHttpModule
 */
import { Module } from "@nestjs/common";
import { ChairController } from "./ChairController";
import { ChairModule } from "../chair/ChairModule";

@Module({
    imports: [
        ChairModule
    ],
    controllers: [
        ChairController
    ]
})
export class ChairHttpModule {
}
