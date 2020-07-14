import { NestFactory } from "@nestjs/core";
import { AppHttpModule } from "./module/app-http/AppHttpModule";

(async function main() {
    const app = await NestFactory.create(AppHttpModule);

    await app.listenAsync(3000);
})()
