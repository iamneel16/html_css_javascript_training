import { Injectable } from '@nestjs/common';
@Injectable()
export class VisitorService {

    VisitorLog(action,module)
    {
        console.log(action + " action performed in " + module + "module");
    }
}