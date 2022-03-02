import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { StudentService } from './student.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly studentService: StudentService) {}

  @Get()
  Welcome():string{
    return this.studentService.Welcome()
  }
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get('/add')
  AddNewStudent():string{
    return this.studentService.AddNewStudent()
  }
  @Get('/edit')
  EditStudent():string{
    return this.studentService.EditStudent()
  }

  @Get('/delete')

  DeleteStudent():string{
    return this.studentService.DeleteStudent()
  }

  @Get('/all')
  GetAllStudent():string{
    return this.studentService.GetAllStudent()
  }


}
