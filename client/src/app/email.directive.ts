import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS  } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value.match('^.+@.+\..+$')) {
      return { 'notEmail' : false };
    } else {
      return { 'notEmail' : true };
    }

  }
}
