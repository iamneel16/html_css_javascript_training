import { Controller, Get} from "@nestjs/common";
@Controller('/product')
export class ProductController{
    constructor(){}
   
    @Get()
    async getAllProduct(){
        return "product controller";
    }   
}