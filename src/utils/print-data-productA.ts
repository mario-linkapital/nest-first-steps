import { TranslateService } from "./TranslateService";
import { Content, ContentStack } from "pdfmake/interfaces";
import { cloneDeep, flatMap, map, sumBy } from "lodash";
import * as Highcharts from "highcharts";
import { Chart } from "highcharts";
import * as HighchartsStock from "highcharts/highstock";
import Exporting from "highcharts/modules/exporting";
import { lineCalculator, pipeResolver } from "src/utils/pdf-common";
import { BankOperationTO, CompanyTO, PhysicalProductionTO } from "../models/CompanyInfoAnalysisTO";
import { CreditInformationMethodKSummaryTO, PropertyBaseTO } from "../models";

// Exporting(Highcharts);
// Exporting(HighchartsStock);

/**
 * @description
 * Process the data from the print-data-struct1
 */
export class PrintProductA {
  static charts: Array<Chart | undefined> = Highcharts.charts;
  static stock: Array<Chart | undefined> = HighchartsStock.charts;

  static loadData(data: CompanyTO, translate: TranslateService, toc: object, secondary: object, third: object, locale: string, sectionsToPrint: { id: string; title: string; }[]): Content[] {

    const partners: any = data?.partners?.length > 0 ? data?.partners.map((m) => {
      return [
        { text: m?.name, style: "value" },
        { text: m.qualification, style: "value", alignment: "center" },
        { text: pipeResolver(m?.document, "cpfCnpj"), style: "value", alignment: "center" },
        { text: m.participation, style: "value", alignment: "center" }
      ];
    }) : [[{ colSpan: 4, text: translate.instant("common.blankData"), style: "blank" }]];
    const beneficiaries: any = data?.beneficiaries?.length > 0 ? data?.beneficiaries.map((m) => {
      return [
        { text: m?.name, style: "value" },
        { text: pipeResolver(m?.document, "cpfCnpj"), style: "value", alignment: "center" },
        { text: m.participation, style: "value", alignment: "center" }
      ];
    }) : [[{ colSpan: 3, text: translate.instant("common.blankData"), style: "blank" }]];
    const relations: any = data?.companiesRelated?.length > 0 ? data?.companiesRelated.map((o) => {
      return [
        { text: o?.socialReason, style: "value" },
        { text: pipeResolver(o?.openingDate, "date"), style: "value", alignment: "center" },
        { text: pipeResolver(o?.cnpj, "cpfCnpj"), style: "value" }
      ];
    }) : [[{ colSpan: 3, text: translate.instant("common.blankData"), style: "blank" }]];

    const imports: any = data?.imports?.length > 0 ? cloneDeep(data?.imports).sort((a, b) => b.year - a.year).slice(0, 5).map(i => ([{
        text: i.year,
        style: "value"
      }, { text: i.value, style: "value" }])) :
      [[{ colSpan: 2, text: translate.instant("common.blankData"), style: "blank" }]];
    const exports: any = data?.exports.length > 0 ? cloneDeep(data?.exports).sort((a, b) => b.year - a.year).slice(0, 5).map(i => ([{
        text: i.year,
        style: "value"
      }, { text: i.value, style: "value" }])) :
      [[{ colSpan: 2, text: translate.instant("common.blankData"), style: "blank" }]];
    const taxHealth: any = data?.taxHealth?.cnds?.length > 0 ? data?.taxHealth.cnds.map((m) => ([
        { text: m?.emitterName, style: "value" },
        { text: pipeResolver(m?.emissionDate, "date"), style: "value" },
        { text: m?.situation, style: "value" }
      ])) :
      [[{ colSpan: 3, text: translate.instant("common.blankData"), style: "blank" }]];

    const cnjcnias: any = data?.cnjCnias?.length > 0 ? data?.cnjCnias.map(c => ([
      { text: c.relatedIssues.toString(), style: "value" },
      { text: pipeResolver(c.registrationDate, "date"), style: "value" },
      { text: c.sphere, style: "value" },
      { text: c.processNumber, style: "value" },
      { text: c.descriptionEntity, style: "value" },
      { text: c.uf, style: "value" },
      { text: pipeResolver(c.value, "currency"), style: "value" }
    ])) : [[{ colSpan: 7, text: translate.instant("common.blankData"), style: "blank" }]];
    const crsfns = data?.crsfns?.length > 0 ? data?.crsfns.map(c => ([
      { text: c.agreedNumber, style: "value" },
      { text: c.processNumber, style: "value" },
      { text: c.resourceNumber, style: "value" },
      { text: c.part, style: "value" },
      { text: c.resourceType, style: "value" }
    ])) : [[{ colSpan: 5, text: translate.instant("common.blankData"), style: "blank" }]];
    const workMtes = data?.workMtes?.length > 0 ? data?.workMtes.map(w => ([
      { text: pipeResolver(w.provenanceDecisionDate, "date"), style: "value" },
      { text: w.fiscalActionYear, style: "value", alignment: "center" },
      { text: w.quantityWorkers, style: "value" },
      { text: w.municipality, style: "value" },
      { text: w.uf, style: "value", alignment: "center" }
    ])) : [[{ colSpan: 5, text: translate.instant("common.blankData"), style: "blank" }]];
    const ceis = data?.ceis?.length > 0 ? data?.ceis.map(c => ([
      { text: c.organComplement, style: "value" },
      { text: pipeResolver(c.initSanctionDate, "date"), style: "value" },
      { text: pipeResolver(c.endSanctionDate, "date"), style: "value" },
      { text: c.legalSubstantiation, style: "value" },
      { text: c.processNumber, style: "value" },
      { text: c.sanctioningEntity, style: "value" },
      { text: c.sanction, style: "value" },
      { text: c.ufSanctioningEntity, style: "value" }
    ])) : [[{ colSpan: 8, text: translate.instant("common.blankData"), style: "blank" }]];
    const cneps = data?.cneps?.length > 0 ? data?.cneps.map(c => ([
      { text: pipeResolver(c.initSanctionDate, "date"), style: "value" },
      { text: pipeResolver(c.endSanctionDate, "date"), style: "value" },
      { text: c.processNumber, style: "value" },
      { text: c.sanctioningEntity, style: "value" },
      { text: c.sanction, style: "value" },
      { text: c.ufSanctioningEntity, style: "value" },
      { text: pipeResolver(c.penaltyValue, "currency"), style: "value" }
    ])) : [[{ colSpan: 7, text: translate.instant("common.blankData"), style: "blank" }]];
    const international = data?.internationalLists?.length > 0 ? data?.internationalLists.map(i => ([
      { text: i.name, style: "value" },
      { text: pipeResolver(i.queryDate, "date"), style: "value" }
    ])) : [[{ colSpan: 2, text: translate.instant("common.blankData"), style: "blank" }]];
    const proconProcess = data?.procon?.proconProcesses.length > 0 ? data?.procon?.proconProcesses.map(p => ([
      { text: p.processNumber, style: "value" },
      { text: p.status, style: "value" },
      { text: pipeResolver(p.penaltyValue, "currency"), style: "value" }
    ])) : [[{ colSpan: 3, text: translate.instant("common.blankData"), style: "blank" }]];
    const proconGroup = data?.procon?.proconGroups.length > 0 ? data?.procon?.proconGroups.map(p => ([
      { text: pipeResolver(p.cnpj, "cpfCnpj"), style: "value" },
      { text: pipeResolver(p.totalPenaltyValue, "currency"), style: "value" }
    ])) : [[{ colSpan: 2, text: translate.instant("common.blankData"), style: "blank" }]];

    const debitPgfnDau: any = data?.debitPgfnDau !== null ? data?.debitPgfnDau?.debitPgfns.map((m) => ([
        { text: m?.inscriptionNumber, style: "value" },
        { text: pipeResolver(m?.debit, "currency"), style: "value" },
        { text: m?.nature, style: "value" }
      ])) :
      [[{ colSpan: 3, text: translate.instant("common.blankData"), style: "blank" }]];
    const protestArea: any = data?.protestInformation?.analysis?.protestsByArea?.length > 0 ?
      data?.protestInformation?.analysis?.protestsByArea.map(p => ([
        { text: p.area, style: "value" },
        { text: p.amount, style: "value" },
        { text: p.percent, style: "value" },
        { text: pipeResolver(p.value, "currency"), style: "value" }
      ])) : [[{ colSpan: 4, text: translate.instant("common.blankData"), style: "blank" }]];
    const protestState: any = data?.protestInformation?.analysis?.activesByState ?
      map(data?.protestInformation?.analysis?.activesByState, (p, k) => ([{
        text: k,
        style: "value",
        alignment: "center"
      }, {
        text: p,
        style: "value",
        alignment: "center"
      }])) :
      [[{ colSpan: 2, text: translate.instant("common.blankData"), style: "blank" }]];
    const protestYear: any = data?.protestInformation?.analysis?.protestEvolutionByYears?.length > 0 ?
      data?.protestInformation?.analysis?.protestEvolutionByYears.map((p) => ([
        { text: p.date, style: "value" }, {
          text: pipeResolver(parseFloat(p.value), "currency"),
          style: "value"
        }, { text: p.percent, style: "value" }])) :
      [[{ colSpan: 3, text: translate.instant("common.blankData"), style: "blank" }]];
    const protestList: any = data?.protestInformation?.protestRegistries?.length > 0 ?
      flatMap(data?.protestInformation?.protestRegistries.map(m => m.protests.map(p => ([
        { text: m.uf + " - " + m.city, style: "value" },
        { text: m.name, style: "value" },
        { text: p.assignorName + " - " + p.presenterName, style: "value" },
        { text: pipeResolver(p.consultDate, "date") + "\n" + pipeResolver(p.value, "currency"), style: "value" }
      ])))) :
      [[{ colSpan: 4, text: translate.instant("common.blankData"), style: "blank" }]];
    const judicial = data?.judicialProcess?.judicialProcessQuantities?.length > 0 ?
      data?.judicialProcess?.judicialProcessQuantities.map(j => ([
        { text: j.type, style: "value" },
        { text: j.quantityActive, style: "value", alignment: "center" },
        { text: j.quantityOthers, style: "value", alignment: "center" },
        { text: j.quantityActivePart, style: "value", alignment: "center" },
        { text: j.quantityPassivePart, style: "value", alignment: "center" }
      ])) : [[{ colSpan: 5, text: translate.instant("common.blankData"), style: "blank" }]];

    const propertyCity = data?.properties?.length > 0 ? data?.properties.map(p => ([
      { text: p.buildingData || "", style: "value" },
      { text: p.groundArea || 0, style: "value", alignment: "center" },
      { text: p.builtArea || 0, style: "value", alignment: "center" },
      {
        text: `${p.street || ""} ${p.neighborhoodNumber || ""}, ${p.complement ? (p.complement + ",") : ""} ${pipeResolver(p.zip, "cep")}, ${p.neighborhood ? (p.neighborhood + ",") : ""} ${p.municipality ? (p.municipality + ",") : ""} - ${p.uf || ""}`,
        style: "value"
      },
      { text: pipeResolver(p.evaluationValue, "currency", locale), style: "value" },
      { text: p.registryNumber || "", style: "value" }
    ])) : [[{ colSpan: 6, text: translate.instant("common.blankData"), style: "blank" }]];
    const propertyRural = data?.cafir?.propertiesRural?.length > 0 ? data?.cafir?.propertiesRural.map(p => ([
      { text: "", style: "value" },
      { text: "", style: "value" },
      { text: "", style: "value" },
      { text: `${p.name || ""}, ${p.municipality || ""} - ${p.uf || ""}`, style: "value" },
      { text: "", style: "value" },
      { text: p.nirf || "", style: "value" }
    ])) : [[{ colSpan: 6, text: translate.instant("common.blankData"), style: "blank" }]];
    const totalVehicles = data?.heavyVehicleInfo ? [[
      { text: data.heavyVehicleInfo.over10, style: "value" },
      { text: data.heavyVehicleInfo.upto1, style: "value" },
      { text: data.heavyVehicleInfo.between2And5, style: "value" },
      { text: data.heavyVehicleInfo.between5And10, style: "value" }
    ]] : [[{ colSpan: 4, text: translate.instant("common.blankData"), style: "blank" }]];
    const heavyVehicles = data?.heavyVehicleInfo?.vehicles?.length > 0 ? data?.heavyVehicleInfo?.vehicles.map(v => ([
      { text: v.productionYear, style: "value" },
      { text: v.fuel, style: "value" },
      { text: v.antt ? translate.instant("common.yes") : translate.instant("common.no"), style: "value" },
      { text: v.model, style: "value" },
      { text: v.carPlate, style: "value" },
      { text: v.renavam, style: "value" },
      { text: v.type, style: "value" },
      { text: v.uf, style: "value" },
      { text: null, style: "value" }
    ])) : [[{ colSpan: 9, text: translate.instant("common.blankData"), style: "blank" }]];
    const partnerPropertiesData: PropertyBaseTO[] = [];
    data.personPartners.forEach(pp => {
      if (pp.properties.length) {
        partnerPropertiesData.push(...pp.properties);
      }
    });
    const partnerProperties = partnerPropertiesData.length > 0 ? partnerPropertiesData.map(p => ([
      { text: p.buildingData || "", style: "value" },
      { text: p.builtArea || 0, style: "value", alignment: "center" },
      { text: p.groundArea || 0, style: "value", alignment: "center" },
      {
        text: `${p.street || ""} ${p.neighborhoodNumber || ""}, ${p.complement ? (p.complement + ",") : ""} ${pipeResolver(p.zip, "cep")}, ${p.neighborhood ? (p.neighborhood + ",") : ""} ${p.municipality ? (p.municipality + ",") : ""} - ${p.uf || ""}`,
        style: "value"
      },
      { text: pipeResolver(p.evaluationValue, "currency", locale), style: "value" },
      { text: p.registryNumber || "", style: "value" }
    ])) : [[{ colSpan: 6, text: translate.instant("common.blankData"), style: "blank" }]];

    const [bankOperationsActiveTotal, bankOperationsActive] =
      this.tableBankOperations(data?.bankOperations.filter(item => item.status === "ACTIVE"), translate);
    const [bankOperationsLiquidatedTotal, bankOperationsLiquidated] =
      this.tableBankOperations(data?.bankOperations.filter(item => item.status === "LIQUIDATED"), translate);
    const [bankOperationsOthersTotal, bankOperationsOthers] =
      this.tableBankOperations(data?.bankOperations.filter(item => item.status !== "ACTIVE" && item.status !== "LIQUIDATED"), translate);
    const { consultDate, amountInstitutions, amountOperations, expiredVolume, sumaries } =
      data?.creditsInformationMethodK?.length > 0 ? data?.creditsInformationMethodK[0] :
        { consultDate: "", amountInstitutions: 0, amountOperations: 0, expiredVolume: 0, sumaries: [] };
    const dataSCR = sumaries?.length > 0 ? sumaries.map((m: CreditInformationMethodKSummaryTO) => ([
      { text: m.productName, style: "value" },
      { text: pipeResolver(m.totalLessThan90d, "millions", locale), style: "value" },
      { text: pipeResolver(m.totalBetween91and180d, "millions", locale), style: "value" },
      { text: pipeResolver(m.totalBetween181and360d, "millions", locale), style: "value" },
      { text: pipeResolver(m.totalBetween361and720d, "millions", locale), style: "value" },
      { text: pipeResolver(m.totalGreaterThan720d, "millions", locale), style: "value" },
      { text: pipeResolver(m.total, "millions", locale), style: "value" }
    ])) : [[{ colSpan: 7, text: translate.instant("common.blankData"), style: "blank" }]];
    //@ts-ignore
    return [
      [
        {
          id: "companyDataSection",
          text: translate.instant("learn1.data.title"),
          style: "title", ...toc,
          headlineLevel: 1
        },
        {
          stack: [
            { text: translate.instant("learn1.data.company.title"), style: "subHead", ...secondary },
            {
              columns: [{
                stack: [translate.instant("learn1.data.reason.text"), { text: data?.socialReason, style: "value" }],
                width: "75%", style: "text"
              }]
            },
            lineCalculator([75]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.data.name.text"), { text: data?.fantasyName, style: "value" }],
                  width: "75%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.cnpj.text"), {
                    text: pipeResolver(data?.cnpj, "cpfCnpj"),
                    style: "value"
                  }],
                  width: "25%", style: "text"
                }
              ]
            },
            lineCalculator([75, 25]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.data.size.text"), {
                    text: data?.companySize === "BIGGER" ? "DEMAIS" : data?.companySize,
                    style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.legal.code.text"), {
                    text: data?.legalNatureCode,
                    style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.legal.description.text"), {
                    text: data?.legalNatureDescription,
                    style: "value"
                  }],
                  width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([25, 25, 50]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.data.opening.text"), {
                    text: pipeResolver(data?.openingDate, "date"),
                    style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.age.text"), { text: data?.age, style: "value" }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.register.text"), {
                    text: pipeResolver(data?.dateRegistrationSituation, "date"),
                    style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.register.situation.text"), {
                    text: data?.registrationSituation,
                    style: "value"
                  }],
                  width: "25%", style: "text"
                }
              ]
            },
            lineCalculator([25, 25, 25, 25])
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.data.address.title"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  stack: [translate.instant("learn1.data.address.address1.text"), {
                    text: data?.address?.address1,
                    style: "value"
                  }],
                  width: "50%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.number.text"), {
                    text: data?.address?.number,
                    style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.address.address2.text"), {
                    text: data?.address?.address2,
                    style: "value"
                  }],
                  width: "25%", style: "text"
                }
              ]
            },
            lineCalculator([50, 25, 25]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.data.zip.text"), {
                    text: pipeResolver(data?.address?.zip, "cep"),
                    style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.municipality.text"), {
                    text: data?.address?.municipality, style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.neighborhood.text"), {
                    text: data?.address?.neighborhood,
                    style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.uf.text"), { text: data?.address?.uf, style: "value" }],
                  width: "25%", style: "text"
                }
              ]
            },
            lineCalculator([25, 25, 25, 25]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.data.originalNeighborhood.text"), {
                    text: data?.address?.originalNeighborhood, style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.region.text"), {
                    text: data?.address?.region,
                    style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.borderMunicipality.text"), {
                    text: data?.address?.borderMunicipality,
                    style: "value"
                  }],
                  width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.collectiveBuilding.text"), {
                    text: data?.address?.collectiveBuilding ? translate.instant("common.yes") : translate.instant("common.no"),
                    style: "value"
                  }],
                  width: "25%", style: "text"
                }
              ]
            },
            lineCalculator([25, 25, 25, 25]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.data.rfEmail.text"), { text: data?.rfEmail, style: "value" }],
                  width: "50%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.data.rfPhones.text"), {
                    text: data?.address?.rfPhones.map(m => pipeResolver(m, "")).join("/ "),
                    style: "value"
                  }],
                  width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50, 50])
          ]
        },
        {
          stack: [
            { text: translate.instant("print.map.title"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  stack: [
                    { image: "googleMapViewFromLocation", fit: [350, 350] },
                    { text: translate.instant("print.map.googleMapViewFromLocation"), style: ["value", "mapDesc"] }
                  ]
                  , width: "50%", style: "map"
                },
                {
                  stack: [
                    { image: "satelliteViewFromLocation", fit: [350, 350] },
                    { text: translate.instant("print.map.satelliteViewFromLocation"), style: ["value", "mapDesc"] }
                  ], width: "50%", style: "map"
                }]
            },
            {
              columns: [
                {
                  stack: [
                    { image: "streetViewFromLocation", fit: [350, 350] },
                    { text: translate.instant("print.map.streetViewFromLocation"), style: ["value", "mapDesc"] }
                  ], width: "50%", style: "map"
                },
                {
                  stack: [
                    { image: "streetViewFacadeFromLocation", fit: [350, 350] },
                    { text: translate.instant("print.map.streetViewFacadeFromLocation"), style: ["value", "mapDesc"] }
                  ], width: "50%", style: "map"
                }
              ]
            }
          ], unbreakable: true
        }
      ],
      [
        {
          id: "corporateDataSection",
          text: translate.instant("learn1.corporate.title"),
          style: "title", ...toc,
          headlineLevel: 1
        },
        {
          stack: [
            { text: translate.instant("learn1.corporate.partner.title"), style: "subHead", ...secondary },
            {
              table: {
                headerRows: 1,
                widths: ["*", "auto", "auto", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.corporate.table.name"), style: "text" },
                    {
                      text: translate.instant("learn1.corporate.table.qualification"),
                      style: "text",
                      alignment: "center"
                    },
                    { text: translate.instant("learn1.corporate.table.cpfCnpj"), style: "text", alignment: "center" },
                    {
                      text: translate.instant("learn1.corporate.table.participation"),
                      style: "text",
                      alignment: "center"
                    }
                  ],
                  ...partners
                ]
              },
              layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.corporate.beneficiaries.title"), style: "subHead", ...secondary },
            {
              table: {
                headerRows: 1,
                widths: ["*", "*", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.corporate.table.name"), style: "text" },
                    { text: translate.instant("learn1.corporate.table.cpfCnpj"), style: "text", alignment: "center" },
                    {
                      text: translate.instant("learn1.corporate.table.participation"),
                      style: "text",
                      alignment: "center"
                    }
                  ],
                  ...beneficiaries
                ]
              },
              layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.corporate.relationsSociety.title"), style: "subHead", ...secondary },
            {
              table: {
                headerRows: 1,
                widths: ["*", "auto", "auto"],
                body: [
                  [
                    { text: translate.instant("learn1.corporate.table.name"), style: "text" },
                    { text: translate.instant("learn1.corporate.table.openingDate"), style: "text" },
                    { text: translate.instant("learn1.corporate.table.cnpj"), style: "text", alignment: "center" }
                  ],
                  ...relations
                ]
              },
              layout: "lightHorizontalLines"
            }
          ]
        }
      ],
      [
        {
          id: "economicDataSection",
          text: translate.instant("learn1.cnae.title"),
          style: "title", ...toc,
          headlineLevel: 1
        },
        {
          stack: [
            { text: translate.instant("learn1.cnae.subTitle"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  stack: [translate.instant("learn1.cnae.code.text"), {
                    text: pipeResolver(data?.mainCnae?.code, "cnae"),
                    style: "value"
                  }],
                  width: "20%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.cnae.sector.text"), {
                    text: data?.mainCnae?.sector,
                    style: "value"
                  }],
                  width: "30%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.cnae.businessActivity.text"), {
                    text: data?.mainCnae?.businessActivity,
                    style: "value"
                  }],
                  width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([20, 30, 50]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.cnae.description.text"), {
                    text: data?.mainCnae?.description,
                    style: "value"
                  }],
                  width: "100%", style: "text"
                }
              ]
            },
            lineCalculator([100]),
            {
              margin: [0, 10, 0, 0],
              table: {
                headerRows: 1,
                widths: ["auto", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.cnae.table.code"), style: "text" },
                    { text: translate.instant("learn1.cnae.table.description"), style: "text" }
                  ],
                  ...(data?.cnaes.map((m) => ([{
                    text: pipeResolver(m.code, "cnae"),
                    style: "value"
                  }, { text: m.description, style: "value" }])))
                ]
              },
              layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.cnae.indice.text"), style: "subHead", ...secondary },
            this.physicalProductions(data?.mainCnae?.physicalProductions)
          ], unbreakable: true
        },
        this.physicalProductionsChart(translate, secondary)
      ],
      [
        {
          id: "billingDataSection",
          text: translate.instant("learn1.billing.title"),
          style: "title", ...toc,
          headlineLevel: 1
        },
        {
          columns: [
            {
              stack: [
                { text: translate.instant("print.billing.socialCapital"), style: "subHead", ...secondary },
                { text: translate.instant("learn1.billing.socialCapital.text"), style: "text" },
                { text: pipeResolver(data?.socialCapital, "currency"), style: "value" }
              ], width: "50%"
            },
            {
              stack: [
                {
                  text: translate.instant("companyViewInfo.billingDataSection.grossBilling.text"),
                  style: "subHead", ...secondary
                },
                { text: translate.instant("companyViewInfo.billingDataSection.grossBilling.tooltip"), style: "text" },
                { text: pipeResolver(data?.grossBilling, "currency"), style: "value" }
              ], width: "50%"
            }
          ]
        },
        lineCalculator([50, 50]),
        {
          stack: [
            { text: translate.instant("print.billing.graph"), style: "subHead", ...secondary },
            {
              columnGap: 30,
              columns: [
                {
                  stack: [
                    { text: translate.instant("learn1.billing.table.import"), style: "text" },
                    {
                      margin: [0, 10, 0, 0],
                      table: {
                        headerRows: 1,
                        widths: ["auto", "*"],
                        body: [
                          [
                            { text: translate.instant("learn1.billing.table.year"), style: "text" },
                            { text: translate.instant("learn1.billing.table.value"), style: "text" }
                          ],
                          ...imports
                        ]
                      },
                      layout: "lightHorizontalLines"
                    }
                  ], width: "47%"
                },
                {
                  stack: [
                    { text: translate.instant("learn1.billing.table.export"), style: "text" },
                    {
                      margin: [0, 10, 0, 0],
                      table: {
                        headerRows: 1,
                        widths: ["auto", "*"],
                        body: [
                          [
                            { text: translate.instant("learn1.billing.table.year"), style: "text" },
                            { text: translate.instant("learn1.billing.table.value"), style: "text" }
                          ],
                          ...exports
                        ]
                      },
                      layout: "lightHorizontalLines"
                    }
                  ], width: "47%"
                }
              ]
            }
          ]
        },
        this.employeeGrowths(translate, secondary),
        {
          stack: [
            {
              text: translate.instant("learn1.functionaryEvolution.geographicStatistics.title"),
              style: "subHead", ...secondary
            },
            {
              text: translate.instant("learn1.functionaryEvolution.geographicStatistics.population"),
              style: "subHead3"
            },
            {
              columns: [
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.geographicStatistics.estimatedProduction",
                      { value: data?.ibge?.geographicStatistics.estimatedPopulationYear }),
                    {
                      text: pipeResolver(data?.ibge?.geographicStatistics.estimatedPopulation, "number", locale) + " " +
                        translate.instant("learn1.functionaryEvolution.geographicStatistics.persons"),
                      style: "value"
                    }
                  ], width: "50%", style: "text"
                },
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.geographicStatistics.lastProduction",
                      { value: data?.ibge?.geographicStatistics.estimatedPopulationLastCensusYear }),
                    {
                      text: pipeResolver(data?.ibge?.geographicStatistics.estimatedPopulationLastCensus, "number", locale) + " " +
                        translate.instant("learn1.functionaryEvolution.geographicStatistics.persons"),
                      style: "value"
                    }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50, 50]),
            {
              columns: [
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.geographicStatistics.demographDensity",
                      { value: data?.ibge?.geographicStatistics.demographicDensityYear }),
                    {
                      text: pipeResolver(data?.ibge?.geographicStatistics.demographicDensity, "number", locale) + " hab/km²",
                      style: "value"
                    }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50])
          ], unbreakable: true
        },
        {
          stack: [
            { text: translate.instant("learn1.functionaryEvolution.economicStatistics.title"), style: "subHead3" },
            {
              columns: [
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.economicStatistics.estimatedProduction",
                      { value: data?.ibge?.economicStatistics.pibYear }),
                    { text: pipeResolver(data?.ibge?.economicStatistics.pib, "currency"), style: "value" }
                  ], width: "50%", style: "text"
                },
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.economicStatistics.percentageRevenueSources",
                      { value: data?.ibge?.economicStatistics.percentageRevenueSourcesYear }),
                    {
                      text: pipeResolver(data?.ibge?.economicStatistics.percentageRevenueSources, "number", locale) + " %",
                      style: "value"
                    }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50, 50]),
            {
              columns: [
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.economicStatistics.idhm",
                      { value: data?.ibge?.economicStatistics.idhmYear }),
                    { text: pipeResolver(data?.ibge?.economicStatistics.idhm, "number", locale), style: "value" }
                  ], width: "50%", style: "text"
                },
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.economicStatistics.totalRevenue",
                      { value: data?.ibge?.economicStatistics.totalRevenueYear }),
                    {
                      text: pipeResolver(data?.ibge?.economicStatistics.totalRevenue, "currency") + " (×1000)",
                      style: "value"
                    }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50, 50]),
            {
              columns: [
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.economicStatistics.totalExpenses",
                      { value: data?.ibge?.economicStatistics.totalExpensesYear }),
                    {
                      text: pipeResolver(data?.ibge?.economicStatistics.totalExpenses, "currency") + " (×1000)",
                      style: "value"
                    }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50])
          ], unbreakable: true
        },
        {
          stack: [
            {
              text: translate.instant("learn1.functionaryEvolution.workPerformanceStatistics.title"),
              style: "subHead3"
            },
            {
              columns: [
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.workPerformanceStatistics.averageSalary",
                      { value: data?.ibge?.workPerformanceStatistics.averageSalaryYear }),
                    {
                      text: pipeResolver(data?.ibge?.workPerformanceStatistics.averageSalary, "number", locale) +
                        translate.instant("learn1.functionaryEvolution.workPerformanceStatistics.averageSalarySub"),
                      style: "value"
                    }
                  ], width: "50%", style: "text"
                },
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.workPerformanceStatistics.busyPeople",
                      { value: data?.ibge?.workPerformanceStatistics.busyPeopleYear }),
                    {
                      text: pipeResolver(data?.ibge?.workPerformanceStatistics.busyPeople, "number", locale) +
                        translate.instant("learn1.functionaryEvolution.geographicStatistics.persons"), style: "value"
                    }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50, 50]),
            {
              columns: [
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.workPerformanceStatistics.occupiedPopulation",
                      { value: data?.ibge?.workPerformanceStatistics.occupiedPopulationYear }),
                    {
                      text: pipeResolver(data?.ibge?.workPerformanceStatistics.occupiedPopulation, "number", locale) + " %",
                      style: "value"
                    }
                  ], width: "50%", style: "text"
                },
                {
                  stack: [
                    translate.instant("learn1.functionaryEvolution.workPerformanceStatistics.populationIncomeMonthlyNominal",
                      { value: data?.ibge?.workPerformanceStatistics.populationIncomeMonthlyNominalYear }),
                    {
                      text: pipeResolver(data?.ibge?.workPerformanceStatistics.populationIncomeMonthlyNominal, "number", locale) + " %",
                      style: "value"
                    }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50, 50])
          ], unbreakable: true
        }
      ],
      [
        { id: "changesHistoryDataSection", text: "Histórico de Alterações", style: "title", ...toc }
      ],
      [
        {
          id: "fiscalConsultsDataSection",
          text: translate.instant("learn1.fiscalConsult.title"),
          style: "title", ...toc,
          headlineLevel: 1
        },
        {
          stack: [
            { text: translate.instant("learn1.fiscalConsult.cnd.title"), style: "subHead", ...secondary },
            {
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.fiscalConsult.cnd.table.emitterName"), style: "text" },
                    { text: translate.instant("learn1.fiscalConsult.cnd.table.emissionDate"), style: "text" },
                    { text: translate.instant("learn1.fiscalConsult.cnd.table.situation"), style: "text" }
                  ],
                  ...taxHealth
                ]
              },
              layout: "lightHorizontalLines"
            }
          ]
        },
        { text: translate.instant("print.legal"), style: "subHead", ...secondary },
        {
          stack: [
            { text: translate.instant("learn1.legal.cnjCnias.title"), style: "subHead3", ...third },
            {
              table: {
                headerRows: 1,
                widths: ["*", "auto", "auto", "auto", "auto", "auto", "auto"],
                body: [
                  [
                    { text: translate.instant("learn1.legal.cnjCnias.relatedIssues"), style: "text" },
                    { text: translate.instant("learn1.legal.cnjCnias.registrationDate"), style: "text" },
                    { text: translate.instant("learn1.legal.cnjCnias.sphere"), style: "text" },
                    { text: translate.instant("learn1.legal.cnjCnias.processNumber"), style: "text" },
                    { text: translate.instant("learn1.legal.cnjCnias.descriptionEntity"), style: "text" },
                    { text: translate.instant("learn1.legal.cnjCnias.uf"), style: "text" },
                    { text: translate.instant("learn1.legal.cnjCnias.value"), style: "text" }
                  ],
                  ...cnjcnias
                ]
              },
              layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.legal.crsfns.title"), style: "subHead3", ...third },
            {
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "auto", "auto", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.legal.crsfns.agreedNumber"), style: "text" },
                    { text: translate.instant("learn1.legal.crsfns.processNumber"), style: "text" },
                    { text: translate.instant("learn1.legal.crsfns.resourceNumber"), style: "text" },
                    { text: translate.instant("learn1.legal.crsfns.part"), style: "text" },
                    { text: translate.instant("learn1.legal.crsfns.resourceType"), style: "text" }
                  ],
                  ...crsfns
                ]
              },
              layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.legal.workMtes.title"), style: "subHead3", ...third },
            {
              table: {
                headerRows: 1,
                widths: ["*", "*", "*", "*", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.legal.workMtes.provenanceDecisionDate"), style: "text" },
                    {
                      text: translate.instant("learn1.legal.workMtes.fiscalActionYear"),
                      style: "text",
                      alignment: "center"
                    },
                    { text: translate.instant("learn1.legal.workMtes.quantityWorkers"), style: "text" },
                    { text: translate.instant("learn1.legal.workMtes.municipality"), style: "text" },
                    { text: translate.instant("learn1.legal.workMtes.uf"), style: "text", alignment: "center" }
                  ],
                  ...workMtes
                ]
              },
              layout: "lightHorizontalLines"
            }
          ]
        },
        { text: translate.instant("print.restrictions"), style: "subHead", ...secondary },
        {
          stack: [
            { text: translate.instant("learn1.restrictions.ceis.title"), style: "subHead3", ...third },
            {
              table: {
                headerRows: 1,
                widths: ["*", "auto", "auto", "auto", "auto", "auto", "auto", "auto"],
                body: [
                  [
                    { text: translate.instant("learn1.restrictions.ceis.organComplement"), style: "text" },
                    { text: translate.instant("learn1.restrictions.ceis.initSanctionDate"), style: "text" },
                    { text: translate.instant("learn1.restrictions.ceis.endSanctionDate"), style: "text" },
                    { text: translate.instant("learn1.restrictions.ceis.legalSubstantiation"), style: "text" },
                    { text: translate.instant("learn1.restrictions.ceis.processNumber"), style: "text" },
                    { text: translate.instant("learn1.restrictions.ceis.sanctioningEntity"), style: "text" },
                    { text: translate.instant("learn1.restrictions.ceis.sanction"), style: "text" },
                    { text: translate.instant("learn1.restrictions.ceis.ufSanctioningEntity"), style: "text" }
                  ],
                  ...ceis
                ]
              }, layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.restrictions.cneps.title"), style: "subHead3", ...third },
            {
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "*", "*", "auto", "auto", "auto"],
                body: [
                  [
                    { text: translate.instant("learn1.restrictions.cneps.initSanctionDate"), style: "text" },
                    { text: translate.instant("learn1.restrictions.cneps.endSanctionDate"), style: "text" },
                    { text: translate.instant("learn1.restrictions.cneps.processNumber"), style: "text" },
                    { text: translate.instant("learn1.restrictions.cneps.sanctioningEntity"), style: "text" },
                    { text: translate.instant("learn1.restrictions.cneps.sanction"), style: "text" },
                    { text: translate.instant("learn1.restrictions.cneps.ufSanctioningEntity"), style: "text" },
                    { text: translate.instant("learn1.restrictions.cneps.penaltyValue"), style: "text" }
                  ],
                  ...cneps
                ]
              }, layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.restrictions.internationalLists.title"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  table: {
                    headerRows: 1,
                    widths: ["*", "*"],
                    body: [
                      [
                        { text: translate.instant("learn1.restrictions.internationalLists.name"), style: "text" },
                        { text: translate.instant("learn1.restrictions.internationalLists.queryDate"), style: "text" }
                      ],
                      ...international
                    ]
                  }, layout: "lightHorizontalLines", width: "50%"
                }
              ]
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.restrictions.financialActivity.title"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  stack: [translate.instant("learn1.restrictions.financialActivity.enablementDate"),
                    { text: pipeResolver(data?.financialActivity?.enablementDate, "date"), style: "value" }
                  ], width: "50%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.restrictions.financialActivity.enablementNumber"),
                    { text: data?.financialActivity?.enablementNumber, style: "value" }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50, 50]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.restrictions.financialActivity.segment"),
                    { text: data?.financialActivity?.segment, style: "value" }
                  ], width: "50%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.restrictions.financialActivity.enablementSituation"),
                    { text: data?.financialActivity?.enablementSituation, style: "value" }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50, 50]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.restrictions.financialActivity.queryDate"),
                    { text: pipeResolver(data?.financialActivity?.queryDate, "date"), style: "value" }
                  ], width: "50%", style: "text"
                }
              ]
            },
            lineCalculator([50])
          ], unbreakable: true
        },
        {
          stack: [
            { text: translate.instant("learn1.legal.procon.title"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  stack: [translate.instant("learn1.legal.procon.name"),
                    { text: data?.procon?.name, style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.legal.procon.updateDate"),
                    { text: pipeResolver(data?.procon?.updateDate, "date"), style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.legal.procon.debitTotal"),
                    { text: pipeResolver(data?.procon?.totalPenaltyValue, "currency"), style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.legal.procon.debitGroupTotal"),
                    { text: pipeResolver(data?.procon?.groupPenaltyValue, "currency"), style: "value" }
                  ], width: "25%", style: "text"
                }
              ]
            },
            lineCalculator([25, 25, 25, 25]),
            {
              margin: [0, 10, 0, 0],
              columnGap: 20,
              columns: [
                {
                  table: {
                    widths: ["*", "auto", "auto"],
                    body: [
                      [
                        { text: translate.instant("learn1.legal.procon.processNumber"), style: "text" },
                        { text: translate.instant("learn1.legal.procon.status"), style: "text" },
                        { text: translate.instant("learn1.legal.procon.penaltyValue"), style: "text" }
                      ],
                      ...proconProcess
                    ]
                  }, layout: "lightHorizontalLines", width: "65%"
                },
                {
                  table: {
                    widths: ["*", "auto"],
                    body: [
                      [
                        { text: translate.instant("learn1.legal.procon.cnpj"), style: "text" },
                        { text: translate.instant("learn1.legal.procon.totalPenaltyValue"), style: "text" }
                      ],
                      ...proconGroup
                    ]
                  }, layout: "lightHorizontalLines", width: "35%"
                }
              ]
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.fiscalConsult.debitList.title"), style: "subHead", ...secondary },
            {
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.fiscalConsult.cnd.table.inscriptionNumber"), style: "text" },
                    { text: translate.instant("learn1.fiscalConsult.cnd.table.debit"), style: "text" },
                    { text: translate.instant("learn1.fiscalConsult.cnd.table.nature"), style: "text" }
                  ],
                  ...debitPgfnDau
                ]
              },
              layout: "lightHorizontalLines"
            }
          ]
        }
      ],
      [
        {
          id: "protestsDataSection",
          text: translate.instant("learn1.protests.protestsTitle"),
          style: "title", ...toc,
          headlineLevel: 1
        },
        {
          stack: [
            { text: translate.instant("learn1.protests.company.title"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  stack: [translate.instant("learn1.protests.company.totalValue"),
                    { text: pipeResolver(data?.protestInformation?.analysis?.totalValue, "currency"), style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.protests.company.maxValue"),
                    {
                      text: pipeResolver(data?.protestInformation?.analysis?.higherValueProtest?.value, "currency"),
                      style: "value"
                    }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.protests.company.firstValue"),
                    {
                      text: pipeResolver(data?.protestInformation?.analysis?.firstProtest?.value, "currency"),
                      style: "value"
                    }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.protests.company.quantityRegistryOffices"),
                    {
                      text: data?.protestInformation ?
                        data?.protestInformation?.analysis?.amountProtest + " / " + data?.protestInformation?.analysis?.amountRegistry : ""
                      , style: "value"
                    }
                  ], width: "25%", style: "text"
                }
              ]
            },
            lineCalculator([25, 25, 25, 25])
          ]
        },
        {
          columnGap: 10,
          columns: [
            {
              stack: [
                { text: translate.instant("learn1.protests.area.title"), style: "subHead", ...secondary },
                {
                  table: {
                    headerRows: 1,
                    widths: ["*", "auto", "auto", "auto"],
                    body: [
                      [
                        { text: translate.instant("learn1.protests.area.area"), style: "text" },
                        { text: translate.instant("learn1.protests.area.quantity"), style: "text" },
                        { text: translate.instant("learn1.protests.area.percent"), style: "text" },
                        { text: translate.instant("learn1.protests.area.value"), style: "text" }
                      ],
                      ...protestArea
                    ]
                  },
                  layout: "lightHorizontalLines"
                }
              ], width: "45%"
            },
            {
              stack: [
                { text: translate.instant("learn1.protests.state"), style: "subHead", ...secondary },
                {
                  table: {
                    headerRows: 1,
                    widths: ["*", "*"],
                    body: [
                      [
                        { text: translate.instant("learn1.protests.area.area"), style: "text", alignment: "center" },
                        { text: translate.instant("learn1.protests.area.quantity"), style: "text", alignment: "center" }
                      ],
                      ...protestState
                    ]
                  },
                  layout: "lightHorizontalLines"
                }
              ], width: "25%"
            },
            {
              stack: [
                { text: translate.instant("learn1.protests.year"), style: "subHead", ...secondary },
                {
                  table: {
                    headerRows: 1,
                    widths: ["25%", "*", "25%"],
                    body: [
                      [
                        { text: translate.instant("learn1.protests.evolution.year"), style: "text" },
                        { text: translate.instant("learn1.protests.evolution.value"), style: "text" },
                        { text: translate.instant("learn1.protests.evolution.percent"), style: "text" }
                      ],
                      ...protestYear
                    ]
                  },
                  layout: "lightHorizontalLines"
                }
              ], width: "30%"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.protests.latestByArea.title"), style: "subHead", ...secondary },
            {
              table: {
                headerRows: 1,
                widths: ["13%", "*", "*", "13%"],
                body: [
                  [
                    {
                      text: translate.instant("learn1.protests.latestByArea.uf") + " - " +
                        translate.instant("learn1.protests.latestByArea.city"), style: "text"
                    },
                    { text: translate.instant("learn1.protests.latestByArea.registry"), style: "text" },
                    {
                      text: translate.instant("learn1.protests.latestByArea.assignorName") + " - " +
                        translate.instant("learn1.protests.latestByArea.origin"), style: "text"
                    },
                    {
                      text: translate.instant("learn1.protests.latestByArea.date") + " - " +
                        translate.instant("learn1.protests.latestByArea.value"), style: "text"
                    }
                  ],
                  ...protestList
                ]
              }, layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.legal.judicialProcess.title"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  stack: [translate.instant("learn1.legal.judicialProcess.active"),
                    { text: pipeResolver(data?.judicialProcess?.totalActiveValue, "currency"), style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.legal.judicialProcess.others"),
                    { text: pipeResolver(data?.judicialProcess?.totalOthersValue, "currency"), style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.legal.judicialProcess.passivePart"),
                    { text: pipeResolver(data?.judicialProcess?.totalPassiveValue, "currency"), style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.legal.judicialProcess.total"),
                    { text: pipeResolver(data?.judicialProcess?.totalValue, "currency"), style: "value" }
                  ], width: "25%", style: "text"
                }
              ]
            },
            lineCalculator([25, 25, 25, 25]),
            {
              margin: [0, 10, 0, 0],
              table: {
                headerRows: 1,
                widths: ["*", "*", "*", "*", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.legal.judicialProcess.type"), style: "text" },
                    {
                      text: translate.instant("learn1.legal.judicialProcess.active"),
                      style: "text",
                      alignment: "center"
                    },
                    {
                      text: translate.instant("learn1.legal.judicialProcess.others"),
                      style: "text",
                      alignment: "center"
                    },
                    {
                      text: translate.instant("learn1.legal.judicialProcess.activePart"),
                      style: "text",
                      alignment: "center"
                    },
                    {
                      text: translate.instant("learn1.legal.judicialProcess.passivePart"),
                      style: "text",
                      alignment: "center"
                    }
                  ],
                  ...judicial
                ]
              }, layout: "lightHorizontalLines"
            }
          ], unbreakable: true
        }
      ],
      [
        { id: "relationsDataSection", text: translate.instant("learn1.relations.title"), style: "title", ...toc },
        {
          stack: [
            { text: translate.instant("learn1.relations.bndes.bndesTitle"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  stack: [translate.instant("learn1.relations.bndes.bankOperationsActive"),
                    { text: bankOperationsActiveTotal > 0 ? bankOperationsActive?.length : 0, style: "value" }
                  ], width: "33%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.relations.bndes.bankOperationsActiveTotal"),
                    { text: pipeResolver(bankOperationsActiveTotal, "currency"), style: "value" }
                  ], width: "33%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.relations.bndes.bankOperationsLiquidated"),
                    { text: bankOperationsLiquidatedTotal ? bankOperationsLiquidated?.length : 0, style: "value" }
                  ], width: "33%", style: "text"
                }
              ]
            },
            lineCalculator([33, 33, 34]),
            {
              columns: [
                {
                  stack: [translate.instant("learn1.relations.bndes.bankOperationsLiquidatedTotal"),
                    { text: pipeResolver(bankOperationsLiquidatedTotal, "currency"), style: "value" }
                  ], width: "33%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.relations.bndes.bankOperationsOthers"),
                    { text: bankOperationsOthersTotal ? bankOperationsOthers?.length : 0, style: "value" }
                  ], width: "33%", style: "text"
                },
                {
                  stack: [translate.instant("learn1.relations.bndes.bankOperationsOthers"),
                    { text: pipeResolver(bankOperationsOthersTotal, "currency"), style: "value" }
                  ], width: "33%", style: "text"
                }
              ]
            },
            lineCalculator([33, 33, 34]),
            bankOperationsActiveTotal > 0 ? {
              stack: [
                {
                  text: translate.instant("learn1.relations.bndes.tabs.active"),
                  style: "text",
                  alignment: "center",
                  margin: [0, 10, 0, 0]
                },
                lineCalculator([100]),
                {
                  table: {
                    headerRows: 1,
                    widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "*"],
                    body: [[
                      { text: translate.instant("learn1.relations.bndes.table.type"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.product"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.contractedDate"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.contractedValue"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.tax"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.gracePeriod"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.amortizationPeriod"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.financialCost"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.uf"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.financialAgent"), style: "text" }
                    ], ...bankOperationsActive]
                  }, layout: "lightHorizontalLines"
                }
              ]
            } : { stack: [] },
            bankOperationsLiquidatedTotal > 0 ? {
              stack: [
                {
                  text: translate.instant("learn1.relations.bndes.tabs.liquidated"),
                  style: "text",
                  alignment: "center",
                  margin: [0, 10, 0, 0]
                },
                lineCalculator([100]),
                {
                  table: {
                    headerRows: 1,
                    widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "*"],
                    body: [[
                      { text: translate.instant("learn1.relations.bndes.table.type"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.product"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.contractedDate"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.contractedValue"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.tax"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.gracePeriod"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.amortizationPeriod"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.financialCost"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.uf"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.financialAgent"), style: "text" }
                    ], ...bankOperationsLiquidated]
                  }, layout: "lightHorizontalLines"
                }
              ], unbreakable: true
            } : { stack: [] },
            bankOperationsOthersTotal > 0 ? {
              stack: [
                {
                  text: translate.instant("learn1.relations.bndes.tabs.others"),
                  style: "text",
                  alignment: "center",
                  margin: [0, 10, 0, 0]
                },
                lineCalculator([100]),
                {
                  table: {
                    headerRows: 1,
                    widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "*"],
                    body: [[
                      { text: translate.instant("learn1.relations.bndes.table.type"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.product"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.contractedDate"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.contractedValue"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.tax"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.gracePeriod"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.amortizationPeriod"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.financialCost"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.uf"), style: "text" },
                      { text: translate.instant("learn1.relations.bndes.table.financialAgent"), style: "text" }
                    ], ...bankOperationsOthers]
                  }, layout: "lightHorizontalLines"
                }
              ], unbreakable: true
            } : { stack: [] }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.relations.bankRelations.title"), style: "subHead", ...secondary },
            {
              columns: [
                {
                  stack: ["BACEN <-> (R$ M)",
                    { text: consultDate, style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("methodK.countInstitution"),
                    { text: amountInstitutions, style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("methodK.countOperation"),
                    { text: amountOperations, style: "value" }
                  ], width: "25%", style: "text"
                },
                {
                  stack: [translate.instant("methodK.expiredVolume"),
                    { text: pipeResolver(expiredVolume, "currency"), style: "value" }
                  ], width: "25%", style: "text"
                }
              ]
            },
            lineCalculator([25, 25, 25, 25]),
            {
              margin: [0, 10, 0, 0],
              table: {
                headerRows: 1,
                widths: ["*", "auto", "auto", "auto", "auto", "auto", "auto"],
                body: [
                  [
                    { text: translate.instant("methodK.product"), style: "text" },
                    { text: "<90d", style: "text" },
                    { text: "91-180d", style: "text" },
                    { text: "181-360d", style: "text" },
                    { text: "361-720d", style: "text" },
                    { text: "<720d", style: "text" },
                    { text: translate.instant("methodK.total"), style: "text" }
                  ],
                  ...dataSCR
                ]
              }, layout: "lightHorizontalLines"
            },
            this.scrChartGraph()
          ]
        }
      ],
      [
        {
          id: "companyPropertiesDataSection",
          text: translate.instant("learn1.propertiesCompany.title"),
          style: "title", ...toc
        },
        {
          stack: [
            { text: translate.instant("learn1.propertiesCompany.properties.title"), style: "subHead", ...secondary },
            {
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "auto", "*", "auto", "auto"],
                body: [
                  [
                    { text: translate.instant("learn1.propertiesCompany.properties.buildingData"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.builtArea"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.groundArea"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.address"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.evaluationValue"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.registryNumber"), style: "text" }
                  ],
                  ...propertyCity
                ]
              }, layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.propertiesCompany.rural.title"), style: "subHead", ...secondary },
            {
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "auto", "*", "auto", "auto"],
                body: [
                  [
                    { text: translate.instant("learn1.propertiesCompany.properties.buildingData"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.builtArea"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.groundArea"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.address"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.evaluationValue"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.registryNumber"), style: "text" }
                  ],
                  ...propertyRural
                ]
              }, layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.propertiesCompany.vehicle.title"), style: "subHead", ...secondary },
            { text: translate.instant("learn1.propertiesCompany.vehicle.totalTitle"), style: "subHead3", ...third },
            {
              margin: [0, 10, 0, 0],
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "auto", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.propertiesCompany.vehicle.over10"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.vehicle.upto1"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.vehicle.between2And5"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.vehicle.between5And10"), style: "text" }
                  ],
                  ...totalVehicles
                ]
              }, layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            { text: translate.instant("learn1.propertiesCompany.vehicle.subtitle"), style: "subHead3", ...third },
            {
              margin: [0, 10, 0, 0],
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "auto", "auto", "auto", "auto", "auto", "auto", "*"],
                body: [
                  [
                    { text: translate.instant("learn1.propertiesCompany.vehicle.productionYear"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.vehicle.fuel"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.vehicle.antt"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.vehicle.model"), style: "text" },
                    {
                      text: translate.instant("learn1.propertiesCompany.vehicle.carPlate"),
                      style: "text",
                      alignment: "center"
                    },
                    { text: translate.instant("learn1.propertiesCompany.vehicle.renavam"), style: "text" },
                    {
                      text: translate.instant("learn1.propertiesCompany.vehicle.type"),
                      style: "text",
                      alignment: "center"
                    },
                    { text: translate.instant("learn1.propertiesCompany.vehicle.uf"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.vehicle.situation"), style: "text" }
                  ],
                  ...heavyVehicles
                ]
              }, layout: "lightHorizontalLines"
            }
          ]
        },
        {
          stack: [
            {
              text: translate.instant("learn1.propertiesCompany.propertiesPartners.title"),
              style: "subHead", ...secondary
            },
            {
              text: translate.instant("learn1.propertiesCompany.propertiesPartners.subtitle"),
              style: "subHead3", ...third
            },
            {
              table: {
                headerRows: 1,
                widths: ["auto", "auto", "auto", "*", "auto", "auto"],
                body: [
                  [
                    { text: translate.instant("learn1.propertiesCompany.properties.buildingData"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.builtArea"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.groundArea"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.address"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.evaluationValue"), style: "text" },
                    { text: translate.instant("learn1.propertiesCompany.properties.registryNumber"), style: "text" }
                  ],
                  ...partnerProperties
                ]
              }, layout: "lightHorizontalLines"
            }
          ]
        }
      ]
    ].filter(array => sectionsToPrint.find(sec => sec.id === (array[0] as any).id));
  }

  private static
  physicalProductionsChart(translate: TranslateService, secondary: object): ContentStack {
    // const element = document.getElementById("industrialPhysicalProduction1");
    // const chart = this.stock.find(f => f?.userOptions?.chart?.renderTo === "industrialPhysicalProduction");
    if (secondary     ) {
      // @ts-ignore
      const series = [chart.userOptions.series[0]];
      // const graph = Highcharts.chart(element, {...chart.userOptions, series}).getSVG({chart: {width: 710, height: 420}});
      //Include the exporter module
      const exporter = require("highcharts-export-server");

      //Export settings
      let graph = null;
      var exportSettings = {
        type: "png",
        options: {
          title: {
            text: "My Chart"
          },
          xAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "Mar", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          },
          series: [
            {
              type: "line",
              data: [1, 3, 2, 4]
            },
            {
              type: "line",
              data: [5, 3, 4, 2]
            }
          ]
        }
      };

      //Set up a pool of PhantomJS workers
      exporter.initPool();

      //Perform an export
      /*
          Export settings corresponds to the available CLI arguments described
          above.
      */
      exporter.export(exportSettings, function(err, res) {
        //The export result is now in res.
        //If the output is not PDF or SVG, it will be base64 encoded (res.data).
        //If the output is a PDF or SVG, it will contain a filename (res.filename).
        graph = res.data;
        //Kill the pool when we're done with it, and exit the application
        exporter.killPool();
        process.exit(1);
      });
      return {
        stack: [
          { text: translate.instant("print.cnaeGraph"), style: "subHead", ...secondary },
          { svg: graph }], unbreakable: true
      };
    }
    return { stack: [] };
  }

  public static employeeGrowths(translate: TranslateService, secondary: object): ContentStack {
    const element = document.getElementById("employLineChart");
    const chart = this.charts.find(f => f?.userOptions?.chart?.renderTo === "employLineChart");
    if (chart && element) {
      const graph = Highcharts.chart(element, chart.userOptions).getSVG({ chart: { width: 710, height: 420 } });
      return {
        stack: [
          {
            text: translate.instant("learn1.functionaryEvolution.evolutionGraphic.title"),
            style: "subHead", ...secondary
          },
          { svg: graph }
        ], unbreakable: true
      };
    }
    return { stack: [] };
  }

  private static tableBankOperations(bankOperationTOS: BankOperationTO[] = [], translate: TranslateService): [number, any] {
    return bankOperationTOS.length > 0 ?
      [sumBy(bankOperationTOS, "contractedValue"),
        bankOperationTOS.map(b => ([
          { text: b.type, style: "value" },
          { text: b.product, style: "value" },
          { text: pipeResolver(b.contractedDate, "date"), style: "value" },
          { text: pipeResolver(b.contractedValue, "currency"), style: "value" },
          { text: b.tax, style: "value" },
          { text: b.gracePeriod, style: "value" },
          { text: b.amortizationPeriod, style: "value" },
          { text: b.financialCost, style: "value" },
          { text: b.uf, style: "value" },
          { text: b.financialAgent, style: "value" }
        ]))]
      : [0, [[{ colSpan: 10, text: translate.instant("common.blankData"), style: "blank" }]]];
  }

  private static scrChartGraph(): ContentStack {
    const element = document.getElementById("scrChartGraph1");
    const chart = this.stock.find(f => f?.userOptions?.chart?.renderTo === "scrChartGraph");
    if (chart && element) {
      const graph = Highcharts.chart(element, chart.userOptions).getSVG({ chart: { width: 710, height: 400 } });
      return {
        stack: [
          { svg: graph }], unbreakable: true
      };
    }
    return { stack: [] };
  }

  private static physicalProductions(physicalProductions: Array<PhysicalProductionTO> = []): Content {
    if (physicalProductions.length === 0) {
      return [];
    }
    const data = physicalProductions[0];
    const {
      fixedBaseIndexWithoutSeasonalAdjustment, monthlyIndex, yearToDateIndex, indexAccumulatedLast12Months,
      monthlyPercentageChange, percentageChangeAccumulatedYear, percentageChangeAccumulatedLast12Months
    } = data;

    return [
      {
        columns: [
          {
            stack: [fixedBaseIndexWithoutSeasonalAdjustment.name, {
              text: fixedBaseIndexWithoutSeasonalAdjustment.value + " " + fixedBaseIndexWithoutSeasonalAdjustment.measureUnit,
              style: "value"
            }],
            width: "50%", style: "text"
          },
          {
            stack: [monthlyIndex.name, { text: monthlyIndex.value + " " + monthlyIndex.measureUnit, style: "value" }],
            width: "50%", style: "text"
          }
        ]
      },
      lineCalculator([50, 50]),
      {
        columns: [
          {
            stack: [yearToDateIndex.name, {
              text: yearToDateIndex.value + " " + yearToDateIndex.measureUnit,
              style: "value"
            }],
            width: "50%", style: "text"
          },
          {
            stack: [indexAccumulatedLast12Months.name, {
              text: indexAccumulatedLast12Months.value + " " + indexAccumulatedLast12Months.measureUnit, style: "value"
            }],
            width: "50%", style: "text"
          }
        ]
      },
      lineCalculator([50, 50]),
      {
        columns: [
          {
            stack: [monthlyPercentageChange.name, {
              text: monthlyPercentageChange.value + " " + monthlyPercentageChange.measureUnit,
              style: "value"
            }],
            width: "50%", style: "text"
          },
          {
            stack: [percentageChangeAccumulatedYear.name, {
              text: percentageChangeAccumulatedYear.value + " " + percentageChangeAccumulatedYear.measureUnit,
              style: "value"
            }],
            width: "50%", style: "text"
          }
        ]
      },
      lineCalculator([50, 50]),
      {
        columns: [
          {
            stack: [percentageChangeAccumulatedLast12Months.name, {
              text: percentageChangeAccumulatedLast12Months.value + " " + percentageChangeAccumulatedLast12Months.measureUnit,
              style: "value"
            }],
            width: "50%", style: "text"
          }
        ]
      },
      lineCalculator([50])
    ];
  }
}
