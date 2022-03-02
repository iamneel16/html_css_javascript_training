import { Injectable } from '@nestjs/common';
import { VisitorService } from 'src/visitor.service';
import { EmployeeDTO } from './employee.dto';

@Injectable()
export class EmployeeService {

    constructor(private readonly visiterService : VisitorService) {}
    employee: EmployeeDTO = {
        empname: 'Neel',
        designation: 'Developer',
        salary: 3000,
    }
    mod_name : string = 'employee';
    
    getAllEmployee(): any {
        this.visiterService.VisitorLog(EmployeeAction.emplist,this.mod_name)
        return ([this.employee.empname,this.employee.designation,this.employee.salary])
        
    }
    addEmployee():string{
        this.visiterService.VisitorLog(EmployeeAction.empadd,this.mod_name)
        return(this.employee.empname + ' has been added')
    }
    
    editEmployee():string{
        this.visiterService.VisitorLog(EmployeeAction.empedit,this.mod_name)
        return(this.employee.empname + ' has been edited')
    }
    deleteEmployee():string{
        this.visiterService.VisitorLog(EmployeeAction.empdelete,this.mod_name)
        return(this.employee.empname + ' has been deleted')
    }

}

enum EmployeeAction {emplist='list', empadd='add', empedit='edit', empdelete='delete'} 
