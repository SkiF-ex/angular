import {AbstractControl, ValidationErrors} from '@angular/forms';

export class CustomValidators {
  static range(control: AbstractControl): ValidationErrors | null {
    if (control.value !== '') {
      if (control.value < 1 || control.value > 600 || isNaN(control.value)) {
        return {
          range: 'error',
        };
      }
    }
    return null;
  }
}
