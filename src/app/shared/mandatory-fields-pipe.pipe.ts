import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from '../meal/meal.model';

@Pipe({
  name: 'mandatoryFields',
  standalone: true,
})
export class MissingMandatoryFieldsPipe implements PipeTransform {
  transform(...fields: (string | number | undefined)[]): boolean {
    return fields.some((field) => !Boolean(field));
  }
}
