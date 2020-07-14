/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class BedroomHttpModule
 */
import { Module } from "@nestjs/common";
import { BedroomController } from "./BedroomController";
import { BedroomModule } from "../bedroom/BedroomModule";

@Module({
    imports: [
        BedroomModule
    ],
    controllers: [
        BedroomController
    ]
})
export class BedroomHttpModule {
}
