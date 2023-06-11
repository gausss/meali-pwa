import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mandatoryFields',
  standalone: true,
})
export class MandatoryFieldsPipe implements PipeTransform {
  transform(...fields: (string | number | undefined)[]): boolean {
    return fields.some((field) => !Boolean(field));
  }
}
