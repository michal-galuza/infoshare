import { BackendProductModule } from '@app/backend/product';
import { Module } from '@nestjs/common';


@Module({
  imports: [BackendProductModule],

})
export class AppModule {}
