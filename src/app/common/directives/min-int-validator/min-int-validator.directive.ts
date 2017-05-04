import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';

function validateIntFieldFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    let isValid = c.value >= 0;

    if (isValid) {
      return null;
    }
    else {
      return {
        minInt : {
          valid: false
        }
      }
    }
  }
}

@Directive({
  selector: '[minInt][ngModel]',
  providers: [
    {provide:NG_VALIDATORS, useExisting: MinIntValidator, multi: true}
  ]
})
export class MinIntValidator implements Validator {
  validator: ValidatorFn;

  constructor() { 
    this.validator = validateIntFieldFactory();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
