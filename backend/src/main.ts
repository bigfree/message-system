import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(
        AppModule,
    );

    app.useGlobalPipes(new ValidationPipe({
        transform: true,
    }));

    app.enableCors();

    await app.listen(4000);

    console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
