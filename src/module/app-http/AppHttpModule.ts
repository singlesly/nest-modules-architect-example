/**
 * @package
 * @author Artem Ilinykh devsinglesly@gmail.com
 * @class AppHttpModule
 */
import { Module } from "@nestjs/common";
import { BedHttpModule } from "../bed-http/BedHttpModule";
import { BedroomHttpModule } from "../bedroom-http/BedroomHttpModule";
import { ChairHttpModule } from "../chair-http/ChairHttpModule";
import { TableHttpModule } from "../table-http/TableHttpModule";

@Module({
    imports: [
        BedHttpModule,
        BedroomHttpModule,
        ChairHttpModule,
        TableHttpModule,
    ]
})
export class AppHttpModule {}
