import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorModule } from './Vendor/Vendor.module';


@Module({
  imports: [VendorModule, MongooseModule.forRoot('mongodb://localhost:27017/Project')],
})
export class AppModule {}
