"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const cors = require('cors');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors({
        origin: '*'
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Demo')
        .setDescription('The demo API description')
        .setVersion('1.0')
        .addTag('customers')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('documentation', app, document);
    await app.listen(3020);
}
bootstrap();
//# sourceMappingURL=main.js.map