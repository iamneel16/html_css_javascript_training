import { Module } from '@nestjs/common';
import { VisitorService } from 'src/visitor.service';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';

@Module({
  controllers: [SalaryController],
  providers: [SalaryService,VisitorService],
})
export class SalaryModule {}