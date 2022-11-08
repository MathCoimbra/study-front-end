import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyBy'
})
export class MultiplyByPipe implements PipeTransform {

  transform(value: number, multiply: number): unknown {
    return value * multiply;
  }

}
