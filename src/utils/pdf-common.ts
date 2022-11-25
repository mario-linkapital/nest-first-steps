
import {ContentStack} from 'pdfmake/interfaces';
import {DecimalPipe} from '@angular/common';
import { CnaePipe } from '../pipes/cnae.pipe';

declare var jsbrasil: any;

/**
 * Select width all products
 */
 export function getAllAreas(): {value: number, name: string}[] {
  return [
    {value: 1, name: 'common.selectLearn.learn1'},
    {value: 2, name: 'common.selectLearn.learn2'},
    {value: 3, name: 'common.selectLearn.learn3'},
    {value: 4, name: 'common.selectLearn.learn4'}
  ];
}

/**
 * Base64 to blob convert
 */
export function b64toBlob(b64Data: string, contentType = '', sliceSize = 512): Blob {

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, {type: contentType});
}

/**
 * Paint lines whit canvas
 * @param listSize number[]
 * @param paperWidth number default 572
 * @param gapCol number
 */
export function lineCalculator(listSize: number[] = [], paperWidth: number = 714, gapCol: number = 10): ContentStack {
  const lines: any = {stack: []};
  let cursor = 0;
  listSize.forEach(z => {
    const width = paperWidth * (z / 100) - gapCol;
    lines.stack.push({
      canvas: [{type: 'line', x1: cursor, y1: 0, x2: (cursor + width), y2: 0, lineWidth: .7}]
    });
    cursor += gapCol + width;
  });
  return lines;
}

export function pipeResolver(value: any, pipe: string, locale?: string): any {
  switch (pipe) {
    case 'cpfCnpj':
      // return value?.length === 11 ? jsbrasil.maskBr.cpf(value) : jsbrasil.maskBr.cnpj(value);
      return value;
    case 'date':
      if (value) {
        const date = new Date(value);
        return date.toLocaleDateString();
      }
      return;
    case 'cep':
      return /*jsbrasil.maskBr.cep(*/value/*)*/;
    case 'currency':
      return /*jsbrasil.maskBr.currency(*/value/*)*/;
    case 'tel':
      return /*jsbrasil.maskBr.celular(*/value/*)*/;
    case 'cnae':
      return /*new CnaePipe().transform(*/value/*)*/;
    case 'number':
      return /*new DecimalPipe(locale ? locale : '').transform(*/value?.toString()/*)*/;
    case 'millions':
      return /*new DecimalPipe(locale ? locale : '').transform(*/value / 1000000/*, '1.0-2')*/;
  }
}
