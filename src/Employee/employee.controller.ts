import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
@Controller()
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get('/employee')
    getAllEmployee(): string {
        return this.employeeService.getAllEmployee();
    }
    @Get('/employee/add')
    addEmployee(): string {
        return this.employeeService.addEmployee();
    }
    @Get('/employee/edit')
    editEmployee(): string {
        return this.employeeService.editEmployee();
    }
    @Get('/employee/delete')
    deleteEmployee(): string {
        return this.employeeService.deleteEmployee();
    }
    
}