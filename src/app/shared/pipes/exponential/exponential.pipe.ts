import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value, 2);
  }

  toImage(value: string):any{
    let result:string = "";
    if(value){
      result = "data:image/png;base64,"+value;
    }
    return result;
  }
}
