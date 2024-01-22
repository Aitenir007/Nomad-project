import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sumOfEven(){
    const arr =[1,2,3,4,5,6,7]
    const sum = arr.reduce((accum,curEL)=>{
      if(curEL % 2 == 0 )accum+=curEL;
      return accum;
    },0)
    return sum
  }
}
