import { Module } from '@nestjs/common';
import { VisitorService } from 'src/visitor.service';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService,VisitorService],
})
export class EmployeeModule {}