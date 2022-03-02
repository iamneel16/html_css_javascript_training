import { Injectable } from '@nestjs/common';
import { SalaryDTO } from './salary.dto';
import { VisitorService } from 'src/visitor.service';

@Injectable()
export class SalaryService {
    constructor(private readonly visiterService : VisitorService) {}

    salary: SalaryDTO = {
        empid: '101',
        salary: 40000,
        workingdays: 28,
    }

    getSalary(): any {
        this.visiterService.VisitorLog('getsalary ',' salary ')
        return ('Salary of EMP ID -> ' + this.salary.empid + " is "  + this.salary.salary + " ₹ in " + this.salary.workingdays + " working days")
    }

}
