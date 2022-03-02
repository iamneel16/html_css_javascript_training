import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema } from 'mongoose';
import { VendorSchema } from "./Vendor.Schema";
import { VendorDTO } from "./Vendor.DTO";
@Injectable()
export class VendorService {
    constructor(@InjectModel('Vendor') private readonly vendorModel : Model<typeof VendorSchema>) { }

    async createVendor(vendorDto: VendorDTO)
    {
        return await this.vendorModel.create(vendorDto)
    }
    async getAllVendor() {
        const Result  = await this.vendorModel.find({},{_id:0,vendorname:1}).exec();
        console.log(Result[0]);
        return Result;
    }
    async getVendor(vid:string)
    {
        const Result = await this.vendorModel.findOne({_id:vid}).exec();
        return Result;
    }

    async deleteVendor(id:string)
    {
        const Result = await this.vendorModel.findByIdAndRemove({_id:id}).exec();
        return Result;
    }
    

   
}