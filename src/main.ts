import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

(async (): Promise<void> => {
	const applicationContext = await NestFactory.createApplicationContext(AppModule);

	applicationContext.enableShutdownHooks();

	await applicationContext.init();
})().catch((error: Error): void => {
	Logger.error(error);
});
