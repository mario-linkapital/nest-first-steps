import {Pipe, PipeTransform} from '@angular/core';

declare var jsbrasil: any;

@Pipe({
  name: 'cnae'
})
export class CnaePipe implements PipeTransform {

  /**
   * Transform input value in CNAE format
   * @param value string or number
   * @return An string in format 0546-3/91
   */
  transform(value: any): string {
    return jsbrasil.maskBr.cnae(value);
  }

}
