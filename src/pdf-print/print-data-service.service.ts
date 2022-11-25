// import {Inject, Injectable, LOCALE_ID} from '@angular/core';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {TranslateService} from '../utils/TranslateService';

import {Content} from 'pdfmake/interfaces';
import { PrintProductA } from '../utils/print-data-productA';
import { PrintDataProductD } from '../utils/print-data-productD';
import { environment } from 'src/environments/environment';
import { CompanyInfoAnalysisTO } from '../models/CompanyInfoAnalysisTO';
import { Inject, Injectable } from "@nestjs/common";

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

const whiteLogoLinkapital = 'data:image/png;base64,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';

const logo = 'data:image/png;base64,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';
const index_logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAOFSURBVGhD7ZrLTxNBHMf7L+ANAkcMCUnFR4waJcZYX7FX48EHEW5yk3hQUNPQqgWDiSAaDkRDjI8YwYjxiVFBIBobHxAEQmmIEAn4ICK23c76285k6U632wcz253INx8O7E53fp/tzE43uzY5heQ7WwvLfcXHfthPyiYAHUF3+XtbSfeGMRLI3d5gWtEGGJvoC+Q6GqijZB04m6Q4bXQEio76qQ9bBCiMlBgTWsCy1WPiHTQCFq8eQzksCghRPSbWgQhYcNYao85pIkDtFgIcRQAutNQ+IciLfgmKALVDFGCRFVsAUAQEHT+YAmerrbDCR20VCCjeVlyV/Z9rGQPTwEZtEo5lgWzz/wkEpsP86B0OU90lJW2BEM+MTy8LJIV0xSdmCOy5gBKxrxEFpkkpkPmFkLsjQrUxZnc9orpLStoCxuyq0zj8WQgdvylRbdjCWADY6UX+b0QA8jcYOnGHowN7AWCHF43FOEA8HbwcuAgADi8anSLV49Q/5OLASwDYdhaNTJLqcS4+Yu/AUQDY6kEDE6R6nEuPGTvwFQBKPWjqe5iUH03jE5YOfAXKWyJDXzXV4zSxc+AlAAtC14BO6Wqan7FxYC+w0YUuP5Xm5kmhaj4GwgD5J5qWFwwcGAtU3YhMztInfnYu5H0graqWN7nk92OavddeLdWBmcD+JtQ3ojNmbvdLpe7FXzjrz8jdQ5pmd/sVN7VBujAQ2FKL2rqlYJAUpObDePjQ1QjVGFh3Wn45qHFofyetqaGbpciSBFbXyHWd0swcfeJnfoXO3Tc6r+DQ9VnzKZjxsJFqlgqZCxxpiQxO6I2ZPs2YScTaU3KnTyKfiebNcHiDi26WlEwEHOfR8086pfv8+mMmESU18r23GoeeL/xvaGAN+vmb9KcGxozHcMwkoqRa45CdW8pbvSmNmUSANhwBH8psAbioH7ySxpgx4PprxcE8ARgz7vYlXb/jgUXNDAG43rf1SJtrMx8zBmRw45a2wIFmNmOGFWkLWI1lgWwj/iMm4R/yFTgFf8yaYy+jtgpEjv2w8qRe3GmgPKmHvzzR3rXBwPghAhBqnxDgEAHhvgT8rg2ECECKKsV55awy7pUzHCEcYquHaAQgFnegqofQAhDLOsRXD9ERgFhwTquzloq+AI4VfmXAIgtnkxSkFyMBHFiuwWRlhc+0BRs6gu6g0xX2MlJEosjyP90EDqZShuMuAAAAAElFTkSuQmCC'

@Injectable()
export class PrintDataServices {
  constructor(private translate: TranslateService) {
  }

  makePrint(data: CompanyInfoAnalysisTO, sectionsToPrint: {id: string; title: string;}[]): void {
    // common styles
    const styles: any = {
      index: {
        color: '#616161',
        fontSize: 20,
        bold: true,
        alignment: 'start',
        margin: [10, 30, 0, 10]
      },
      title: {
        fontSize: 18,
        bold: true,
        color: 'grey',
        margin: [10, 10, 0, 0]
      },
      subHead: {
        fontSize: 14,
        bold: true,
        color: 'grey',
        margin: [20, 10, 0, 5]
      },
      subHead3: {
        fontSize: 12,
        bold: true,
        color: 'grey',
        margin: [30, 10, 0, 5]
      },
      text: {
        fontSize: 11,
        bold: true,
        color: '#2E7BFF',
        margin: [0, 5, 0, 0]
      },
      blank: {
        fontSize: 11,
        bold: true,
        color: 'grey',
        alignment: 'center',
        margin: [0, 5, 0, 0]
      },
      value: {
        fontSize: 9,
        color: '#2E7BFF',
        margin: [2, 5]
      },
      map: {
        margin: [2, 5]
      },
      mapDesc: {
        alignment: 'center'
      }
    };
    // principal Toc
    const tocStyles: any = {
      tocItem: true,
      tocMargin: [10, 10, 0, 10],
      pageBreak: 'before',
      tocStyle: {color: '#616161', bold: true, fontSize: 14, fontFamily: 'Inter'},
      tocNumberStyle: {color: '#616161'}
    };
    // secondary Toc
    const secondaryTocStyles: any = {
      tocItem: true,
      tocMargin: [10, 0, 0, 0],
      tocStyle: {color: '#616161', fontSize: 12, fontFamily: 'Inter'},
      tocNumberStyle: {color: '#616161'}
    };
    // third Toc
    const thirdTocStyles: any = {
      tocItem: true,
      tocMargin: [10, 0, 0, 0],
      tocStyle: {color: '#616161', fontSize: 10, fontFamily: 'Inter', italics: true},
      tocNumberStyle: {color: '#616161'}
    };
    const lat = data?.baseInfo?.address?.latitude;
    const lng = data?.baseInfo?.address?.longitude;
    const marker = `markers=color:red%7C${lat}, ${lng}`;
    const imagesMap: any = {
      googleMapViewFromLocation: `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=15&size=500x350&${marker}&key=${environment.apiKey}`,
      satelliteViewFromLocation: `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=20&size=500x350&maptype=satellite&${marker}&key=${environment.apiKey}`,
      streetViewFromLocation: `https://maps.googleapis.com/maps/api/streetview?fov=90&location=${lat},${lng}&size=500x350&heading=90&pitch=-0.76&key=${environment.apiKey}`,
      streetViewFacadeFromLocation: `https://maps.googleapis.com/maps/api/streetview?fov=90&location=${lat},${lng}&size=500x350&source=outdoor&key=${environment.apiKey}`
    };

    const content: Content = [
      { // first page
        alignment: 'justify',
        columns: [
          {text: '', width: 100},
          {
            stack: [
              {image: whiteLogoLinkapital, fit: [300, 250], alignment: 'center', margin: [0, 100, 0, 0]},
              {text: `\n\n\n\n\n${data?.baseInfo?.socialReason}\n`, alignment: 'center', color: '#ffffff', fontSize: 32},
              {text: this.translate.instant('print.subTitle'), alignment: 'center', color: '#ffffff'},
              {text: new Date().toLocaleDateString(), alignment: 'center', pageBreak: 'after', color: '#ffffff', absolutePosition: {y: 1050}}
            ], width: '*'
          },
          {text: '', width: 100}
        ]
      },
      { // add index
        toc: {
          title: {text: this.translate.instant('print.index'), style: 'index'}
        }
      },
      ...PrintProductA.loadData(data.baseInfo, this.translate, tocStyles, secondaryTocStyles, thirdTocStyles, 'en-US', sectionsToPrint),
      ...(data.invoiceAnalysis !== null ?
        PrintDataProductD.loadData(data.invoiceAnalysis, data.spedAnalysis, this.translate, tocStyles, secondaryTocStyles, thirdTocStyles, sectionsToPrint) : []),
    ];

    // Size |   72 PPI	|   96 PPI	 |   150 PPI	 |   300 PPI
    // A4	  | 595 x 842	| 794 x 1123 | 1240 x 1754 | 2480 x 3508
    // @ts-ignore
    const print = createPdf({
      pageSize: {width: 794, height: 1123},
      pageMargins: [40, 50, 40, 40],
      content, styles,
      images: {
        ...imagesMap,
        logo,
        index_logo
      },
      defaultStyle: {
        color: '#2E7BFF'
      },
      background: (page, pageSize) => page === 1 ? [{canvas: [{type: 'rect', x: 0, y: 0, w: pageSize.width, h: pageSize.height, color: '#2E7BFF'}]}] : [],
      pageBreakBefore: (currentNode, followingNodesOnPage) => {
        return currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0;
      },
      // @ts-ignore
      header: (currentPage, pageCount, pageSize) => {
        if (currentPage === 2) {
          return [
            {
              stack: [
                {
                  columns: [
                    {image: 'index_logo', fit: [30, 30], width: 20, margin: [50, 20, 0, 0]},
                    {text: data.baseInfo.socialReason, alignment: 'left', fontSize: 12, color: '#616161',
                    bold: true, fontFamily: 'Inter', margin: [70, 23, 0, 0]},
                    {text: this.translate.instant('print.subTitle'), alignment: 'left', fontSize: 10, color: '#616161', bold: true, fontFamily: 'Inter', margin: [-317, 37, 0, 0]}]
                }
              ]
            },
          ];
        }
        if ((sectionsToPrint.length < 8 && currentPage > 2) || (sectionsToPrint.length > 8 && currentPage > 3)) {
          return [
            {
              margin: [20, 20, 20, 10],
              columns: [
                {image: 'logo', fit: [70, 60], width: 100},
                {text: this.translate.instant('print.subTitle'), alignment: 'center', width: '*', fontSize: 10, bold: true},
                {text: 'Data ' + new Date().toLocaleDateString(), alignment: 'right', width: 100, fontSize: 8}
              ]
            },
            {canvas: [{type: 'line', x1: 100, y1: -17, x2: (pageSize.width - 20), y2: -17, lineWidth: 1, lineColor: '#2E7BFF'}]}
          ];
        }
        return [];
      },
      // @ts-ignore
      footer: (currentPage, pageCount, pageSize) => {
        const width = (pageSize.width - 60) / 2;
        if ((sectionsToPrint.length > 8 && currentPage > 3) || (sectionsToPrint.length < 8 && currentPage > 2)) {
          return [
            {text: currentPage + '', alignment: 'center', fontSize: 10, margin: [0, 15, 0, 0]},
            {
              canvas: [
                {type: 'line', x1: 20, y1: -5, x2: (width + 20), y2: -5, lineWidth: 1, lineColor: '#2E7BFF'},
                {type: 'line', x1: (width + 40), y1: -5, x2: (pageSize.width - 20), y2: -5, lineWidth: 1, lineColor: '#2E7BFF'}
              ]
            }
          ];
        }
        return [];
      }
    });
    print.open();
  }
}
