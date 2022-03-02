import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { VendorController } from "./Vendor.controller";
import { VendorService } from "./Vendor.service";
import { VendorSchema } from "./Vendor.Schema";
@Module({
    imports :[MongooseModule.forFeature([{name:'Vendor',schema:VendorSchema}])], 
    controllers:[VendorController],
    providers:[VendorService]
})

export class VendorModule {};