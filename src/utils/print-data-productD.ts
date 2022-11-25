import {TranslateService} from '../utils/TranslateService';
import {Content, ContentStack, ContentText, TableCell, TableCellProperties} from 'pdfmake/interfaces';

import * as Highcharts from 'highcharts';
import {Chart} from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import { ProductAnalysisDTO } from '../models/companyDocument';
import { CageFlux } from '../models/data.company';
import { processCageFlux } from './show-data-common';
import { pipeResolver } from 'src/utils/pdf-common';
import { AnalysisTO, InvoiceAnalysisTO, SpedAnalysisTO } from '../models/CompanyInfoAnalysisTO';
import { PrintProductA } from './print-data-productA';
import { HorizontalAnalysisTO, VerticalAnalysisTO } from '../models';


// Exporting(Highcharts);


export class PrintDataProductD {
  static charts: Array<Chart | undefined> = Highcharts.charts;

  static loadData(data: InvoiceAnalysisTO, spedAnalysis: SpedAnalysisTO,translate: TranslateService, toc: object, secondary: object, third: object, sectionsToPrint: {id: string; title: string;}[]): Content[] {
    const tableValues: Array<CageFlux> = processCageFlux(data);
    const header: any[] = tableValues.map(m => ({text: m.month + ' ' + m.year, style: 'text'}));
    const valueCageFlux = tableValues.length > 0 ? [
      [{text: translate.instant('learn3.cageFlux.rows.billing'), style: 'value'},
        ...tableValues.map(m => ({text: pipeResolver(m.billing, 'currency'), style: 'value'}))],
      [{text: translate.instant('learn3.cageFlux.rows.payment'), style: 'value'},
        ...tableValues.map(m => ({text: pipeResolver(m.payment, 'currency'), style: 'value'}))],
      [{text: translate.instant('learn3.cageFlux.rows.taxes'), style: 'value'},
        ...tableValues.map(m => ({text: pipeResolver(m.taxes, 'currency'), style: 'value'}))]
    ] : [[{text: translate.instant('common.blankData'), style: 'blank'}]];
    // sped Analisys
    const yearsHeaders: Array<ContentText & TableCellProperties> = [];
    const yearsSimple: Array<ContentText> = [];
    const mixYear: TableCell[] = [];
    const secondHeaders: TableCell[] = [];
    secondHeaders.push('');
    const horizontalValues: Array<any> = (spedAnalysis?.horizontalAnalysis && spedAnalysis?.horizontalAnalysis?.length > 0) ?
    spedAnalysis?.horizontalAnalysis.map((m: HorizontalAnalysisTO) => ([{text: m.codeDescription, style: 'value'}])) :
      (spedAnalysis?.analysis && spedAnalysis?.analysis?.length > 0) ?
        ( spedAnalysis?.analysis[0].verticalAnalysis ? (spedAnalysis?.analysis[0].verticalAnalysis.map((m: VerticalAnalysisTO) => ([{text: m.codeDescription, style: 'value'}]))) : [] ) : [];

      spedAnalysis?.analysis?.forEach((m: AnalysisTO) => {
      const year: number = new Date(m.date).getFullYear();
      secondHeaders.push({text: 'R$', field: year + 'V', style: 'text', alignment: 'center'});
      secondHeaders.push({text: '%', field: year + 'P', style: 'text', alignment: 'center'});

      m?.verticalAnalysis?.length > 0 ?
        m?.verticalAnalysis?.forEach((f: VerticalAnalysisTO, i: number) => {
          horizontalValues[i].push({text: pipeResolver(f.endValue, 'accountant'), style: 'value', alignment: 'center'});
          horizontalValues[i].push({text: pipeResolver(f.percent, 'accountant'), style: 'value', alignment: 'center'});
        }) :
        horizontalValues.forEach((f, i) => {
          horizontalValues[i].push({text: pipeResolver(0, 'accountant'), style: 'value', alignment: 'center'});
          horizontalValues[i].push({text: pipeResolver(0, 'accountant'), style: 'value', alignment: 'center'});
        });

      yearsHeaders.push({text: year.toString(), colSpan: 2, style: 'text', alignment: 'center'});
      yearsSimple.push({text: year.toString(), style: 'text', alignment: 'center'});
      yearsHeaders.push({text: ''});
    });

    if (yearsHeaders.length > 2) {
      if ((yearsHeaders.length / 2) === 3) {
        mixYear.push({text: yearsHeaders[0].text + '/' + yearsHeaders[2].text, style: 'text'});
        mixYear.push({text: yearsHeaders[2].text + '/' + yearsHeaders[4].text, style: 'text'});
        secondHeaders.push({text: '%', field: 'previousPeriod', style: 'text', alignment: 'center'});
        secondHeaders.push({text: '%', field: 'currentPeriod', style: 'text', alignment: 'center'});

        spedAnalysis?.horizontalAnalysis?.length > 0 ?
        spedAnalysis?.horizontalAnalysis.forEach((f, i) => {
            horizontalValues[i].push({text: pipeResolver(f.percentPreviousPeriod, 'accountant'), style: 'value', alignment: 'center'});
            horizontalValues[i].push({text: pipeResolver(f.percentCurrentPeriod, 'accountant'), style: 'value', alignment: 'center'});
          }) :
          horizontalValues.forEach((f, i) => {
            horizontalValues[i].push({text: pipeResolver(0, 'accountant'), style: 'value', alignment: 'center'});
            horizontalValues[i].push({text: pipeResolver(0, 'accountant'), style: 'value', alignment: 'center'});
          });
      } else {
        mixYear.push({text: yearsHeaders[0].text + '/' + yearsHeaders[2].text, style: 'text'});
        secondHeaders.push({text: '%', field: 'currentPeriod', style: 'text', alignment: 'center'});
        spedAnalysis?.horizontalAnalysis?.length > 0 ?
        spedAnalysis?.horizontalAnalysis.forEach((f, i) =>
            horizontalValues[i].push({text: pipeResolver(f.percentCurrentPeriod, 'accountant'), style: 'value', alignment: 'center'})
          ) :
          horizontalValues.forEach((f, i) => {
            horizontalValues[i].push({text: pipeResolver(0, 'accountant'), style: 'value', alignment: 'center'});
          });
      }
    }

    //@ts-ignore
    return [
      [
        {id: "evolutionCompositionBusinessDataSection", text: translate.instant('learn3.title'), style: 'title', ...toc},
        {
          stack: [
            {text: translate.instant('learn3.horizontalAnalysis.billing.title'), style: 'subHead', ...secondary},
            this.invoiceBillingChart(translate, third)
          ]
        },
        {
          stack: [
            {text: translate.instant('learn3.verticalAnalysis.billing.title'), style: 'subHead', ...secondary},
            this.invoicePayment(translate, third)
          ]
        },
        {
          stack: [
            {text: translate.instant('learn3.horizontalAnalysis.tax.title'), style: 'subHead', ...secondary},
            this.tax(translate, third)
          ]
        },
        {
          stack: [
            {
              text: translate.instant('learn3.horizontalAnalysis.payment.title'), style: 'subHead', ...secondary,
              pageBreak: 'before', pageOrientation: 'portrait'
            },
            this.billing(translate, third)
          ]
        },
        {
          stack: [
            {
              text: translate.instant('learn3.verticalAnalysis.payment.title'), style: 'subHead', ...secondary,
              pageBreak: 'before', pageOrientation: 'portrait'
            },
            this.payment(translate, third)
          ]
        },
        PrintProductA.employeeGrowths(translate, secondary),
        {
          stack: [
            {text: translate.instant('learn3.cageFlux.title'), style: 'subHead', ...secondary},
            {
              table: {
                headerRows: 1,
                widths: ['*', ...header.map(() => ('auto'))],
                body: [
                  [{text: '', style: 'text'}, ...header],
                  ...valueCageFlux
                ]
              }, layout: 'lightHorizontalLines'
            }
          ]
        },
        {
          stack: [
            {text: translate.instant('learn4.horizontalVertical.title'), style: 'subHead', ...secondary},
            {
              table: {
                widths: ['*', ...yearsHeaders.map(() => 'auto'), ...mixYear.map(() => 'auto')],
                body: [
                  [
                    {text: translate.instant('learn4.horizontalVertical.table.countData'), style: 'text', rowSpan: 2},
                    ...yearsHeaders, ...mixYear
                  ],
                  secondHeaders,
                  ...horizontalValues
                ]
              }, layout: 'lightHorizontalLines'
            }
          ]
        },
        {
          stack: spedAnalysis !== null ? [
            {text: translate.instant('learn4.other.title'), style: 'subHead', ...secondary},
            {
              table: {
                widths: ['*', '*', ...yearsSimple.map(() => 'auto')],
                body: [
                  ['', '', ...yearsSimple],
                  [
                    {text: translate.instant('learn4.other.analysis.dupont'), style: 'value', rowSpan: 4},
                    {text: translate.instant('learn4.other.analysis.netMargin'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.dupont?.mlResult, 'accountant', '%'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.assetTurnover'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.dupont?.gaResult, 'accountant', '%'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.levelAverage'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.dupont?.leverageResult, 'accountant', '%'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.roe'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.dupont?.roeResult, 'accountant', '%'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ],
                  [
                    {text: translate.instant('learn4.other.analysis.periodConversion'), style: 'value', rowSpan: 4},
                    {text: translate.instant('learn4.other.analysis.ime'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({text: m?.financialAnalysis?.cashConversion?.imeResult, style: 'value', alignment: 'center'}))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.pmr'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({text: m?.financialAnalysis?.cashConversion?.pmrResult, style: 'value', alignment: 'center'}))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.pmp'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({text: m?.financialAnalysis?.cashConversion?.pmpResult, style: 'value', alignment: 'center'}))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.ccc'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({text: m?.financialAnalysis?.cashConversion?.cccResult, style: 'value', alignment: 'center'}))
                  ],
                  [
                    {text: translate.instant('learn4.other.analysis.operatingMargin'), style: 'value'},
                    {text: translate.instant('learn4.other.analysis.operatingMargin'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.operationalMargin?.moResult, 'accountant', '%'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ],
                  [
                    {text: translate.instant('learn4.other.analysis.balance'), style: 'value', rowSpan: 5},
                    {text: translate.instant('learn4.other.analysis.balanceCcl'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.balance?.cclResult, 'accountant'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.debLiquid'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.balance?.dlResult, 'accountant'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.debLiquidNewOperation'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.balance?.dlNoResult, 'accountant'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.debLiquidOperationValue'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.balance?.dlRoResult, 'accountant', '%'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ],
                  ['',
                    {text: translate.instant('learn4.other.analysis.debLiquidOperationValue1'), style: 'value'},
                    ...spedAnalysis?.analysis.map(m => ({
                      text: pipeResolver(m?.financialAnalysis?.balance?.dlRoNoResult, 'accountant', '%'),
                      style: 'value',
                      alignment: 'center'
                    }))
                  ]
                ]
              }, layout: 'lightHorizontalLines'
            }
          ] : []
        }
      ]
    ].filter(array => sectionsToPrint.find(sec => sec.id === (array[0] as any).id));;
  }

  private static invoiceBillingChart(translate: TranslateService, third: object): ContentStack {
    const element = document.getElementById('invoiceBillingChart');
    const chart = this.charts.find(f => f?.userOptions?.chart?.renderTo === 'invoiceBillingChart');
    if (chart && element) {
      const graph = Highcharts.chart(element, chart.userOptions).getSVG({chart: {width: 710, height: 290}});
      return {
        stack: [
          {text: translate.instant('learn3.horizontalAnalysis.billing.title'), style: 'subHead3', ...third},
          {svg: graph}], unbreakable: true
      };
    }
    return {stack: []};
  }

  private static invoicePayment(translate: TranslateService, third: object): ContentStack {
    const element = document.getElementById('invoicePaymentChart');
    const chart = this.charts.find(f => f?.userOptions?.chart?.renderTo === 'invoicePaymentChart');
    if (chart && element) {
      const graph = Highcharts.chart(element, chart.userOptions).getSVG({chart: {width: 710, height: 290}});
      return {
        stack: [
          {text: translate.instant('learn3.horizontalAnalysis.payment.title'), style: 'subHead3', ...third},
          {svg: graph}], unbreakable: true
      };
    }
    return {stack: []};
  }

  private static tax(translate: TranslateService, third: object): ContentStack {
    const element = document.getElementById('taxChart');
    const chart = this.charts.find(f => f?.userOptions?.chart?.renderTo === 'taxChart');
    if (chart && element) {
      const graph = Highcharts.chart(element, chart.userOptions).getSVG({chart: {width: 710, height: 300}});
      return {
        stack: [
          {text: translate.instant('learn3.horizontalAnalysis.tax.title'), style: 'subHead3', ...third},
          {svg: graph}], unbreakable: true
      };
    }
    return {stack: []};
  }

  private static billing(translate: TranslateService, third: object): ContentStack {
    const element = document.getElementById('billingChart');
    const chart = this.charts.find(f => f?.userOptions?.chart?.renderTo === 'billingChart');
    if (chart && element) {
      const graph = Highcharts.chart(element, chart.userOptions).getSVG({chart: {width: 750, height: 350}});
      return {
        stack: [
          {text: translate.instant('learn3.verticalAnalysis.billing.title'), style: 'subHead3', ...third},
          {svg: graph}], unbreakable: true
      };
    }
    return {stack: []};
  }

  private static payment(translate: TranslateService, third: object): ContentStack {
    const element = document.getElementById('paymentChart');
    const chart = this.charts.find(f => f?.userOptions?.chart?.renderTo === 'paymentChart');
    if (chart && element) {
      const graph = Highcharts.chart(element, chart.userOptions).getSVG({chart: {width: 750, height: 350}});
      return {
        stack: [
          {text: translate.instant('learn3.verticalAnalysis.payment.title'), style: 'subHead3', ...third},
          {svg: graph}], unbreakable: true
      };
    }
    return {stack: []};
  }
}
