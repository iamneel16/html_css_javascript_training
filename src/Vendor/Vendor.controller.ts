import { Controller, Get, Param, Post, Body, Delete } from "@nestjs/common";
import { VendorService } from "./Vendor.service";
import { VendorDTO } from "./Vendor.DTO";
@Controller('/vendor')
export class VendorController{
    constructor(private vendorService : VendorService){}

    @Post()
    async create(@Body() createVendorDTO : VendorDTO) {
        this.vendorService.createVendor(createVendorDTO);
    }

    @Delete(':id')
    async deleteClient(@Param('id') id:string) {
        return this.vendorService.deleteVendor(id);
    }
    @Get()
    async getAllClient(){
        return this.vendorService.getAllVendor();
    }
    @Get(':vid')
    async getClient(@Param('vid') vid:string){
        return this.vendorService.getVendor(vid);
    }
}