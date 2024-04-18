import { Module } from '@nestjs/common';
import { ModelsModule } from './models/models.module';
import { ModelsController } from './models/models.controller';
import { ModelsService } from './models/models.service';


@Module({
  imports: [ModelsModule],
  controllers: [ModelsController],
  providers: [ModelsService],
})
export class AppModule {}
