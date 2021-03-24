import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const minutes = value % 60;
    const hours = (value - minutes) / 60;
    return `${hours} h ${minutes} min`;
  }

}
