import {
  DataValues,
  InvoiceIssuedTO,
  InvoiceTaxTO,
} from "../models";
import { ProductAnalysisDTO } from "../models/companyDocument";
import { InvoiceAnalysisTO, PersonTO } from "../models/CompanyInfoAnalysisTO";
import { PersonPartner } from "../models/CompanyTO";
import { CageFlux, DataLearn, typeDataValues } from "../models/data.company";

declare var jsbrasil: any;

/**
 * Transform a string to a CPF format
 */
 export function transformStringToCPF(value: string): string {
  return jsbrasil.maskBr.cpf(value);
}

export function getPersonPartnersTO(list: Array<PersonPartner> = [], spouses: boolean = false){
}

export function getPersonPartnerInfo(){
}

/**
 * Return list of DataLearn from learning session
 * @param list {@link Array<LightPersonTO>}
 * @param spouses boolean default false
 * @returns An object {@link DataLearn}
 */
export function getPersonPartners(list: Array<PersonTO> = [], spouses: boolean = false): Array<DataLearn> {
  return list.map((f: PersonTO) => {
    let otherAddresses: Array<DataValues> = [];
    f?.otherAddresses.forEach(a => {
      otherAddresses = [...otherAddresses,
        {
          title: 'learn1.partner.address.address1',
          show: true, class: 'col-12 md:col-6 lg:col-4',
          value: a?.address1
        },
        {
          title: 'learn1.partner.address.number',
          show: true, class: 'col-12 md:col-6 lg:col-4',
          value: a?.number
        },
        {
          title: 'learn1.partner.address.complement',
          show: true, class: 'col-12 md:col-6 lg:col-4',
          value: a?.address2
        },
        {
          title: 'learn1.partner.address.place',
          show: true, class: 'col-12 md:col-6 lg:col-4',
          value: a?.neighborhood
        },
        {
          title: 'learn1.partner.address.cep',
          show: true, class: 'col-12 md:col-6 lg:col-4',
          value: a?.zip, pipe: 'cep'
        },
        {
          title: 'learn1.partner.address.neighborhood',
          show: true, class: 'col-12 md:col-6 lg:col-4',
          value: a?.municipality
        },
        {
          title: 'learn1.partner.address.uf',
          show: true, class: 'col-12 md:col-6 lg:col-4',
          value: a?.uf
        }
      ];
    });

    return {
      subHead: [capitalizeString(f.name), transformStringToCPF(f.cpf)],
      hasData: true,
      children: [
        {
          title: 'learn2.spouses.spouse',
          show: spouses, class: 'col-12 md:col-6',
          value: ''//f?.spouse?.toString()
        },
        {
          title: 'learn2.spouses.marriageRegime',
          show: spouses, class: 'col-12 md:col-6',
          value: ''//f?.marriageRegime
        },
        {
          type: typeDataValues.lvl3,
          show: true, class: 'col-12',
          children: [
            {
              title: 'learn1.partner.registerDate.title',
              children: [
                {
                  value: 'learn1.partner.registerDate.dataInformation',
                  show: true, class: 'col-12 text-3xl text-center font-bold'
                },
                {
                  title: 'learn1.partner.registerDate.dateBorn',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.birthDate, pipe: 'date'
                },
                {
                  title: 'learn1.partner.registerDate.cpf',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.cpf, pipe: 'cpfCnpj'
                },
                {
                  title: 'learn1.partner.registerDate.name',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.name
                },
                {
                  title: 'learn1.partner.registerDate.age',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.age
                },
                {
                  title: 'learn1.partner.registerDate.sex',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.sex
                },
                {
                  title: 'learn1.partner.registerDate.email',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.email, pipe: 'email'
                },
                {
                  title: 'learn1.partner.registerDate.telephone',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.phones.toString()
                },
                {
                  title: 'learn1.partner.registerDate.instruction',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.educationLevel
                },
                {
                  title: 'learn1.partner.registerDate.nationality',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.originCountry
                },
                {
                  title: 'learn1.partner.registerDate.deficiency',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.deficiency, terna: ['SIM', 'NÃO']
                },
                {
                  title: 'learn1.partner.registerDate.deficiencyType',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.deficiencyType
                },
                {
                  title: 'learn1.partner.registerDate.pis',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.socialInscription
                },
                {
                  title: 'learn1.partner.registerDate.situationCpf',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.situationCpf
                },
                {
                  title: 'learn1.partner.registerDate.inscriptionCpfDate',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.inscriptionCpfDate
                },
                {
                  title: 'learn1.partner.registerDate.motherName',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.motherName
                },
                {
                  title: 'learn1.partner.registerDate.motherCpf',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.motherCpf, pipe: 'cpfCnpj'
                },
                {
                  title: 'learn1.partner.registerDate.fatherName',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.fatherName
                },
                {
                  title: 'learn1.partner.registerDate.conjugeName',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  // @ts-ignore
                  value: spouses ? f?.spouse : f?.spouse?.spouse
                },
                {
                  title: 'learn1.partner.registerDate.cns',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.cns
                },
                {
                  title: 'learn1.partner.registerDate.nis',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.nis
                },
                {
                  title: 'learn1.partner.registerDate.pgfnDau',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.debitPgfnDauValue
                },
                {
                  value: 'learn1.partner.address.title',
                  show: true, class: 'col-12 text-3xl text-center font-bold'
                },
                {
                  title: 'learn1.partner.address.address1',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.mainAddress?.address1
                },
                {
                  title: 'learn1.partner.address.number',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.mainAddress?.number
                },
                {
                  title: 'learn1.partner.address.complement',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.mainAddress?.address2
                },
                {
                  title: 'learn1.partner.address.place',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.mainAddress?.neighborhood
                },
                {
                  title: 'learn1.partner.address.cep',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.mainAddress?.zip, pipe: 'cep'
                },
                {
                  title: 'learn1.partner.address.neighborhood',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.mainAddress?.municipality
                },
                {
                  title: 'learn1.partner.address.telephoneNumber',
                  show: true, class: 'col-12 md:col-6 lg:col-4',
                  value: f?.mainAddress?.rfPhones.toString()
                },
                ...otherAddresses
              ]
            },
            {
              title: 'learn1.partner.fiscalLegalConsult.title',
              children: [
                {
                  type: typeDataValues.lvl4,
                  show: true, class: 'col-12',
                  value: [
                    {
                      title: 'learn1.partner.fiscalLegalConsult.debitList.title',
                      show: f?.debitPgfnDau?.debitPgfns.length > 0, class: '',
                      value: [{
                        type: typeDataValues.table,
                        show: f?.debitPgfnDau?.debitPgfns.length > 0,
                        class: 'col-12',
                        value: {
                          headers: [
                            {header: 'learn1.partner.fiscalLegalConsult.debitList.nature', field: 'nature'},
                            {header: 'learn1.partner.fiscalLegalConsult.debitList.inscriptionNumber', field: 'inscriptionNumber'},
                            {
                              header: 'learn1.partner.fiscalLegalConsult.debitList.debitValue',
                              field: 'debitValue', pipe: 'currency', class: 'text-center'
                            }
                          ],
                          rows: f?.debitPgfnDau ? [...f?.debitPgfnDau?.debitPgfns?.map(d => ({
                            nature: d.nature,
                            inscriptionNumber: d.inscriptionNumber,
                            debitValue: d.debit
                          })),
                            {
                              nature: '',
                              inscriptionNumber: 'learn1.partner.fiscalLegalConsult.debitList.debitTotal',
                              debitValue: f?.debitPgfnDau?.totalDebits
                            }
                          ] : []
                        }
                      }]
                    },
                    {
                      title: 'learn1.partner.fiscalLegalConsult.negativeDebit.title',
                      show: f?.debitMte?.processes.length > 0, class: '',
                      value: [
                        {
                          title: 'learn1.partner.fiscalLegalConsult.negativeDebit.code',
                          show: true, class: 'col-12 md:col-6',
                          value: f?.debitMte?.code
                        },
                        {
                          title: 'learn1.partner.fiscalLegalConsult.negativeDebit.emissionDate',
                          show: true, class: 'col-12 md:col-6',
                          value: f?.debitMte?.emissionDate
                        },
                        {
                          title: 'learn1.partner.fiscalLegalConsult.negativeDebit.debitSituation',
                          show: true, class: 'col-12 md:col-6',
                          value: f?.debitMte?.debitSituation
                        },
                        {
                          title: 'learn1.partner.fiscalLegalConsult.negativeDebit.certificateType',
                          show: true, class: 'col-12 md:col-6',
                          value: f?.debitMte?.certificateType
                        },
                        {
                          type: typeDataValues.table,
                          show: f?.debitMte?.processes.length > 0,
                          class: 'col-12',
                          value: {
                            headers: [
                              {
                                header: 'learn1.partner.fiscalLegalConsult.negativeDebit.infringementCapitulation',
                                field: 'infringementCapitulation'
                              },
                              {header: 'learn1.partner.fiscalLegalConsult.negativeDebit.infringementCategory', field: 'infringementCategory'},
                              {header: 'learn1.partner.fiscalLegalConsult.negativeDebit.processNumber', field: 'processNumber'},
                              {header: 'learn1.partner.fiscalLegalConsult.negativeDebit.processSituation', field: 'processSituation'}
                            ],
                            rows: f?.debitMte?.processes.map(d => ({
                              infringementCapitulation: d.infringementCapitulation,
                              infringementCategory: d.infringementCategory,
                              processNumber: d.number,
                              processSituation: d.situation
                            }))
                          }
                        }
                      ]
                    },
                    {
                      title: 'learn1.partner.fiscalLegalConsult.judicialProcess.title',
                      show: f?.judicialProcess?.judicialProcessQuantities.length > 0, class: '',
                      value: [
                        {
                          title: 'learn1.partner.fiscalLegalConsult.judicialProcess.processActive',
                          show: true, class: 'col-12 md:col-6 lg:col-3',
                          value: f?.judicialProcess?.totalActiveValue, pipe: 'currency'
                        },
                        {
                          title: 'learn1.partner.fiscalLegalConsult.judicialProcess.processOthers',
                          show: true, class: 'col-12 md:col-6 lg:col-3',
                          value: f?.judicialProcess?.totalOthersValue, pipe: 'currency'
                        },
                        {
                          title: 'learn1.partner.fiscalLegalConsult.judicialProcess.processPassivePart',
                          show: true, class: 'col-12 md:col-6 lg:col-3',
                          value: f?.judicialProcess?.totalPassiveValue, pipe: 'currency'
                        },
                        {
                          title: 'learn1.partner.fiscalLegalConsult.judicialProcess.total',
                          show: true, class: 'col-12 md:col-6 lg:col-3',
                          value: f?.judicialProcess?.totalValue, pipe: 'currency'
                        },
                        {
                          type: typeDataValues.table,
                          show: f?.judicialProcess?.judicialProcessQuantities.length > 0,
                          class: 'col-12',
                          value: {
                            headers: [
                              {header: 'learn1.partner.fiscalLegalConsult.judicialProcess.processType', field: 'processType'},
                              {
                                header: 'learn1.partner.fiscalLegalConsult.judicialProcess.processActive',
                                field: 'processActive',
                                class: 'text-center'
                              },
                              {
                                header: 'learn1.partner.fiscalLegalConsult.judicialProcess.processOthers',
                                field: 'processOthers',
                                class: 'text-center'
                              },
                              {
                                header: 'learn1.partner.fiscalLegalConsult.judicialProcess.processActivePart',
                                field: 'processActivePart',
                                class: 'text-center'
                              },
                              {
                                header: 'learn1.partner.fiscalLegalConsult.judicialProcess.processPassivePart',
                                field: 'processPassivePart', class: 'text-center'
                              }
                            ],
                            rows: f?.judicialProcess?.judicialProcessQuantities.map(d => ({
                              processActive: d.quantityActive,
                              processOthers: d.quantityOthers,
                              processActivePart: d.quantityActivePart,
                              processPassivePart: d.quantityPassivePart,
                              processType: d.type
                            }))
                          }
                        }]
                    }
                  ]
                }
              ]
            },
            {
              title: 'learn1.partner.relationsSociety.title',
              children: [{
                type: typeDataValues.lvl4,
                show: true, class: 'col-12',
                value: f?.corporatesParticipation?.map(c => {
                  return {
                    show: true, class: '',
                    title: c.socialReason,
                    value: [
                      {
                        title: 'learn1.partner.relationsSociety.socialReason',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.socialReason
                      },
                      {
                        title: 'learn1.partner.relationsSociety.cnpj',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.cnpj, pipe: 'cpfCnpj'
                      },
                      {
                        title: 'learn1.partner.relationsSociety.qualification',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.qualification
                      },
                      {
                        title: 'learn1.partner.relationsSociety.qualificationRf',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.qualificationRF
                      },
                      {
                        title: 'learn1.partner.relationsSociety.preparationLevel',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.levelPreparation
                      },
                      {
                        title: 'learn1.partner.relationsSociety.preparationLevelRf',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.levelPreparationRF
                      },
                      {
                        title: 'learn1.partner.relationsSociety.participation',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.participation
                      },
                      {
                        title: 'learn1.partner.relationsSociety.participationRf',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.participationRF
                      },
                      {
                        title: 'learn1.partner.relationsSociety.participationCapitalSocial',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.participationSocialCapital
                      },
                      {
                        title: 'learn1.partner.relationsSociety.participationCapitalSocialRf',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.participationSocialCapitalRF
                      },
                      {
                        title: 'learn1.partner.relationsSociety.entryDate',
                        show: true, class: 'col-12 md:col-6 lg:col-4',
                        value: c?.openingDate, pipe: 'date'
                      }
                    ]
                  };
                })
              }]
            }
          ]
        }
      ]
    };
  });
}

/**
 * Capitalize some string
 * @param word string
 * @return An string
 */
export function capitalizeString(word: string): string {
  return word.split(' ').map(l => l.charAt(0).toUpperCase() + l.slice(1).toLowerCase()).join(' ');
}

/**
 * Return class css for table SCR
 * @param index number
 * @return An string with class css
 */
export function getClassSCR(index: number): string {
  if (index < 3) {
    return 'bg-red-300 text-white align-middle text-center';
  } else if (index >= 3 && index < 15) {
    return 'bg-yellow-300 text-white align-middle text-center';
  } else if (index >= 15 && index < 27) {
    return 'bg-blue-300 text-white align-middle text-center';
  } else {
    return 'bg-green-300 text-white align-middle text-center';
  }
}

/**
 * Process all data for CageFlux table
 * @param data {@link ProductAnalysisDTO}
 * @return An CageFlux[]
 */
export function processCageFlux(data: InvoiceAnalysisTO): Array<CageFlux> {
  const table: Array<CageFlux> = [];
  data?.horizontalAnalysisTO?.invoiceBilling.forEach((e: InvoiceIssuedTO) => {
    table.push({year: e.year, month: e.month, billing: e.total, taxes: 0, payment: 0});
  });
  data?.horizontalAnalysisTO?.invoiceTax.forEach((e: InvoiceTaxTO) => {
    const i = table.find((f: CageFlux) => f.year === e.year && f.month === e.month);
    const tax = parseFloat((e.ipi + e.pis + e.cofins + e.icms).toFixed(2));
    i ? i.taxes = tax : table.push({year: e.year, month: e.month, billing: 0, taxes: tax, payment: 0});
  });
  data?.horizontalAnalysisTO?.invoicePayment.forEach((e: InvoiceIssuedTO) => {
    const i = table.find((f: CageFlux) => f.year === e.year && f.month === e.month);
    i ? i.payment = e.total : table.push({year: e.year, month: e.month, billing: 0, taxes: 0, payment: e.total});
  });
  return table;
}
