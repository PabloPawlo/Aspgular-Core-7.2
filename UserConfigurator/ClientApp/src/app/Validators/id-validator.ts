import { AbstractControl } from '@angular/forms'

export function idValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  {
    const valid = /^\d+$/.test(control.value)
    return valid
      ? null
      : { invalidNumber: { valid: false, value: control.value } }
  }
}
