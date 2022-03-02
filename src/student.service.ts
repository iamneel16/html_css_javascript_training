import { Injectable } from "@nestjs/common";

@Injectable()
export class StudentService{
    Welcome():string{
        return("Welcome To Dashboard")
    }
    AddNewStudent():string{
        return("Student has been Added")
    }
    EditStudent():string{
        return("Student has been edited")
    }
    DeleteStudent():string{
        return("Delete has been deleted")
    }
    GetAllStudent():any{
        return(['Raj Singh','Mohit Sharma','Aditee Singh'])
    }
}