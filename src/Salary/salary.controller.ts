import { Controller, Get } from '@nestjs/common';
import { SalaryService } from './salary.service';
@Controller()
export class SalaryController {
    constructor(private readonly salaryService: SalaryService) { }

    @Get('/employee/salary')
    getAllEmployee(): string {
        return this.salaryService.getSalary();
    }
}