import { PartnerBank } from './companyUserClientTO';
import { VerticalAnalysisTO } from './CompanyTO';
import { ProductAnalysisDTO, ProductAnalysisRTO } from './companyDocument';
import { MenuItem } from './primeng-api';
import { AddressTO } from './UserAuthenticated';
import { areaProtestAreaTO, commentAreaEnum, commissionCampaignAttributeAttributeType, companyClosingPropensityEnum, companySizeEnum, directoryType, learningSessionEnum, ownerTypePropertyGuarantee, registrationSituationCompanyMainInfoTO, sectorCnaeTO, stateIndicativeOfferTO, stateOfferTO, statusBankOperationTO, typeCommissionInstallmentTO, typeCriCraDebentureTO, typeDataLearn, typePropertyGuarantee, typeScoreAnalysisTO } from '../enums';
import { DataLearnTable } from './data-learn-table';

export interface DataCompany {
  productAnalysisA: ProductAnalysisATO;
  productAnalysisD: ProductAnalysisDTO;
  productAnalysisI: ProductAnalysisITO;
  productAnalysisR: ProductAnalysisRTO;
}

export interface ProductAnalysisATO {
  address: AddressTO;
  affiliates: Array<AffiliatedCompanyTO>;
  age: number;
  bankOperations: Array<BankOperationTO>;
  beneficiaries: Array<CompanyBeneficiaryTO>;
  cafir: CafirTO;
  ceis: Array<CeisTO>;
  cnaes: Array<CnaeTO>;
  cneps: Array<CnepTO>;
  cnjCnias: Array<CnjCniaTO>;
  cnpj: string;
  companiesRelated: Array<CompanyRelatedTO>;
  companyClosingPropensity: companyClosingPropensityEnum;
  companySize: companySizeEnum;
  creditsInformation: Array<CreditInformationTO>;
  creditsInformationMethodK: Array<CreditInformationMethodKTO>;
  criCraDebentures: Array<CriCraDebentureTO>;
  crsfns: Array<CrsfnTO>;
  dateRegistrationSituation: string;
  dateSpecialSituation: string;
  debitPgfnDau: DebitPgfnDauTO;
  debtDocuments: Array<DirectoryTO>;
  deliveryPropensity: string;
  ecommercePropensity: string;
  employeeGrowths: Array<EmployeeGrowthTO>;
  employees: Array<CompanyEmployeeTO>;
  exEmployees: Array<CompanyEmployeeTO>;
  exports: Array<CompanyExportTO>;
  fantasyName: string;
  financialActivity: FinancialActivityTO;
  grossBilling: number;
  heavyVehicleInfo: HeavyVehicleInfoTO;
  ibge: IbgeTO;
  id: number;
  imports: Array<CompanyExportTO>;
  internationalLists: Array<InternationalListTO>;
  documents: Array<DirectoryTO>;
  judicialProcess: JudicialProcessTO;
  legalNatureCode: string;
  legalNatureDescription: string;
  mainCnae: MainCnaeTO;
  openingDate: string;
  partners: Array<CompanyPartnersTO>;
  passiveIISS: boolean;
  personPartners: Array<LightPersonTO>;
  procon: ProconTO;
  properties: Array<PropertyBaseTO>;
  protestInformation: ProtestInformationTO;
  registrationSituation: registrationSituationCompanyMainInfoTO;
  registrationSituationReason: string;
  rfEmail: string;
  simpleNational: SimpleNationalTO;
  sintegraInscriptions: Array<SintegraInscriptionTO>;
  socialCapital: number;
  socialReason: string;
  specialSituation: string;
  suframa: SuframaTO;
  taxHealth: TaxHealthTO;
  workMtes: Array<WorkMteTO>;
}

export interface AffiliatedCompanyTO {
  cnpj: string;
  id: number;
  municipality: string;
  openingDate: string;
  registrationSituation: registrationSituationCompanyMainInfoTO;
  socialReason: string;
  uf: string;
}

export interface BankOperationTO {
  amortizationPeriod: number;
  contractedDate: string;
  contractedValue: number;
  financialAgent: string;
  financialCost: string;
  gracePeriod: number;
  id: number;
  modified: string;
  product: string;
  status: statusBankOperationTO;
  tax: number;
  type: string;
  uf: string;
}

export interface CompanyBeneficiaryTO {
  dead: boolean;
  document: string;
  grade: number;
  gradeQsa: number;
  id: number;
  name: string;
  participation: number;
  participationQsa: number;
}

export interface CafirTO {
  propertiesRural: Array<PropertyRuralTO>;
  quantityCondominiums: number;
  quantityHolder: number;
  totalArea: number;
}

export interface PropertyRuralTO {
  condominium: string;
  municipality: string;
  name: string;
  nirf: string;
  type: string;
  uf: string;
}

export interface CeisTO {
  endSanctionDate: string;
  id: number;
  informationDate: string;
  informationEntity: string;
  initSanctionDate: string;
  legalSubstantiation: string;
  organComplement: string;
  processNumber: string;
  sanction: string;
  sanctioningEntity: string;
  ufSanctioningEntity: string;
}

export interface CnaeTO {
  businessActivity: string;
  code: string;
  description: string;
  id: number;
  sector: sectorCnaeTO;
}

export interface CnepTO {
  endSanctionDate: string;
  id: number;
  initSanctionDate: string;
  penaltyValue: number;
  processNumber: string;
  sanction: string;
  sanctioningEntity: string;
  ufSanctioningEntity: string;
}

export interface CnjCniaTO {
  descriptionEntity: string;
  processNumber: string;
  registrationDate: string;
  relatedIssues: Array<string>;
  sphere: string;
  uf: string;
  value: number;
}

export interface CompanyRelatedTO {
  cnpj: string;
  descriptionCnae: string;
  id: number;
  municipality: string;
  openingDate: string;
  socialReason: string;
  uf: string;
}

export interface CreditInformationTO {
  assumedObligation: number;
  cnpjIfRequester: string;
  consultDate: string;
  countInstitution: number;
  countOperation: number;
  countOperationDisagreement: number;
  countOperationSubJudice: number;
  created: string;
  find: boolean;
  id: number;
  operations: Array<ResumeOperationTO>;
  percentDocumentProcessed: number;
  percentVolumeProcessed: number;
  responsibilityTotalDisagreement: number;
  responsibilityTotalSubJudice: number;
  startRelationshipDate: string;
  vendorIndirectRisk: number;
}

export interface ResumeOperationTO {
  earnings: Array<EarningsTO>;
  exchangeVariation: string;
  id: number;
  modality: string;
}

export interface EarningsTO {
  code: string;
  id: number;
  value: number;
}

export interface CriCraDebentureTO {
  code: string;
  debtorIssuer: string;
  dueDate: string;
  id: number;
  indicativeValue: number;
  insuranceSector: string;
  issueDate: string;
  puParDebenture: number;
  remuneration: string;
  seriesIssue: string;
  seriesVolumeOnIssueDate: number;
  type: typeCriCraDebentureTO;
}

export interface CrsfnTO {
  agreedNumber: string;
  part: string;
  processNumber: string;
  resourceNumber: string;
  resourceType: string;
}

export interface EmployeeGrowthTO {
  employeeGrowth: number;
  growth: number;
  id: number;
  year: number;
}

export interface CompanyEmployeeTO {
  admissionDate: string;
  birthDate: string;
  cpf: string;
  id: number;
  name: string;
  resignationYear: string;
}

export interface CompanyExportTO {
  id: number;
  value: string;
  year: number;
}

export interface FinancialActivityTO {
  enablementDate: string;
  enablementNumber: string;
  enablementSituation: string;
  id: number;
  queryDate: string;
  segment: string;
}

export interface HeavyVehicleInfoTO {
  between2And5: number;
  between5And10: number;
  groupBetween2And5: number;
  groupBetween5And10: number;
  groupOver10: number;
  groupUpTo1: number;
  heavyVehicles: number;
  heavyVehiclesGroup: number;
  id: number;
  over10: number;
  upto1: number;
  vehicles: Array<HeavyVehicleTO>;
}

export interface HeavyVehicleTO {
  antt: boolean;
  carPlate: string;
  fuel: string;
  id: number;
  model: string;
  productionYear: number;
  renavam: string;
  type: string;
  uf: string;
}

export interface IbgeTO {
  id: number;
  economicStatistics: EconomicStatisticsTO;
  geographicStatistics: GeographicStatisticsTO;
  workPerformanceStatistics: WorkPerformanceStatisticsTO;
}

export interface EconomicStatisticsTO {
  id: number;
  idhm: number;
  idhmYear: number;
  percentageRevenueSources: number;
  percentageRevenueSourcesYear: number;
  pib: number;
  pibYear: number;
  totalExpenses: number;
  totalExpensesYear: number;
  totalRevenue: number;
  totalRevenueYear: number;
}

export interface GeographicStatisticsTO {
  demographicDensity: number;
  demographicDensityYear: number;
  estimatedPopulation: number;
  estimatedPopulationLastCensus: number;
  estimatedPopulationLastCensusYear: number;
  estimatedPopulationYear: number;
  id: number;
}

export interface WorkPerformanceStatisticsTO {
  averageSalary: number;
  averageSalaryYear: number;
  busyPeople: number;
  busyPeopleYear: number;
  id: number;
  occupiedPopulation: number;
  occupiedPopulationYear: number;
  populationIncomeMonthlyNominal: number;
  populationIncomeMonthlyNominalYear: number;
}

/**
 * @deprecated or changed
 */
export interface IndicativeOfferTO {
  comments: Array<any>; // CommentTO
  deadline: string;
  id: number;
  offers: Array<OfferTO>;
  precision: number;
  state: stateIndicativeOfferTO;
  tax: number;
  type: number;
  volume: number;
}

export interface OfferTO {
  accepted: boolean;
  amountInstallments: number;
  cnpj: string;
  comments: Array<CommentTO>;
  commission: CommissionTO;
  commissionInstallments: Array<CommissionInstallmentTO>;
  contractDate: string;
  created: string;
  description: string;
  discount: number;
  documents: Array<DirectoryTO>;
  id: number;
  installments: Array<OfferInstallmentTO>;
  iof: number;
  monthCet: number;
  nextStepDescription: string;
  offerStateLogs: Array<OfferStateLogsTO>;
  partnerBank: PartnerBank;
  payByInstallment: number;
  registrationFee: number;
  rejectedReason: string;
  responseTime: string;
  state: stateOfferTO;
  taxPercent: number;
  taxValue: number;
  total: number;
  type: number;
  volume: number;
  yearCet: number;
}

export interface CommissionInstallmentTO extends CommissionInstallmentLightTO {
  commissionInstallmentNF: CommissionInstallmentNFLightTO;
}

export interface CommissionInstallmentNFLightTO {
  commissionInstallments: Array<CommissionInstallmentLightTO>;
  created: string;
  document: Array<DirectoryTO>;
  hasPaid: boolean;
  id: number;
  paidDate: string;
}

export interface CommissionInstallmentLightTO {
  created: string;
  id: number;
  paymentDate: string;
  total: number;
  totalBase: number;
  type: typeCommissionInstallmentTO;
}

export interface OfferStateLogsTO {
  created: string;
  id: number;
  notification: string;
  offerState: stateOfferTO;
}

export interface OfferInstallmentTO {
  commissionInstallment: CommissionInstallmentTO;
  created: string;
  document: Array<DirectoryTO>;
  expiration: string;
  hasPaid: boolean;
  id: number;
  total: number;
}

export interface CommissionTO {
  amortization: number;
  campaign: CommissionCampaign;
  disbursement: number;
  id: number;
  installmentsNF: Array<CommissionInstallmentNFTO>;
  liquidation: number;
  releaseDate: string;
  total: number;
}

export interface CommissionInstallmentNFTO {
  commissionInstallments: Array<CommissionInstallmentTO>;
  document: Array<DirectoryTO>;
  hasPaid: boolean;
  id: number;
  paidDate: string;
}

export interface CommissionCampaign {
  id: number;
  title: string;
  active: boolean;
  usageLimit: number;
  usageLimitPerUser: number;
  paymentPercent: PaymentPercentCommissionCampaign;
  percents: Array<PercentsCommissionCampaign>;
  conditions: Array<ConditionsCommissionCampaign>;
}

export interface PaymentPercentCommissionCampaign {
  id: number;
  amortization: number;
  disbursement: number;
  liquidation: number;
}

export interface PercentsCommissionCampaign {
  id: number;
  monthMax: number;
  monthMin: number;
  percent: number;
}

export interface ConditionsCommissionCampaign {
  id: number;
  value: string;
  operator: string;
  connector: string;
  campaignAttribute: CommissionCampaignAttributeTO;
}
export interface CommissionCampaignAttributeTO {
  id: number;
  name: string;
  attributeType: commissionCampaignAttributeAttributeType;
}

export interface InternationalListTO {
  id: number;
  name: string;
  queryDate: string;
}

export interface CommentTO {
  attachments: Array<DirectoryTO>;
  comment: string;
  commentArea: commentAreaEnum;
  created: string;
  id: number;
  learningNumber: number;
  learningSession: learningSessionEnum;
  user: LightUserTO;
  usersViews: Array<number>;
}

export interface LightUserTO {
  id: number;
  codeCountryPhone: string;
  email: string;
  name: string;
  phone: string;
  roleName: string;
}

export interface MainCnaeTO {
  businessActivity: string;
  code: string;
  description: string;
  id: number;
  physicalProductions: Array<PhysicalProductionTO>;
  sector: sectorCnaeTO;
}

export interface ChartData {
  title: string;
  name?: string;
  subtitle: string;
  yAxis: string;
  data: Array<any>;
}

export interface SubChartData {
  category: string;
  data: any;
}

export interface ScoreAnalysisTO {
  id: number;
  operations: Array<ScoreOperationTO>;
  total: number;
  type: typeScoreAnalysisTO;
  year: number;
}

export interface ScoreOperationTO {
  id: number;
  description: string;
  value: number;
}

export interface PhysicalProductionTO {
  codeDescription: string;
  date: string;
  id: number;
  territorialLevel: string;
  monthlyIndex: PhysicalProductionVariableTO;
  yearToDateIndex: PhysicalProductionVariableTO;
  monthlyPercentageChange: PhysicalProductionVariableTO;
  indexAccumulatedLast12Months: PhysicalProductionVariableTO;
  percentageChangeAccumulatedYear: PhysicalProductionVariableTO;
  fixedBaseIndexWithoutSeasonalAdjustment: PhysicalProductionVariableTO;
  percentageChangeAccumulatedLast12Months: PhysicalProductionVariableTO;
}
export interface PhysicalProductionVariableTO {
  id: number;
  measureUnit: string;
  name: string;
  value: number;
}

export interface CompanyPartnersTO {
  criminalProcess: Array<string>;
  dead: boolean;
  document: string;
  id: number;
  levelPreparation: string;
  levelPreparationRF: string;
  name: string;
  participation: number;
  participationRF: number;
  participationSocialCapital: number;
  participationSocialCapitalRF: number;
  qualification: string;
  qualificationRF: string;
}
export interface DataLearns {
  title: string;
  type?: typeDataLearn;
  children: Array<DataLearn>;
}

export interface DataLearn {
  subHead: Array<string>;
  hasData: boolean;
  class?: string;
  actions?: MenuItem;
  children: Array<DataValues | LvlValues>;
}
export interface LvlValues {
  show: boolean;
  class: string;
  children: Array<SubLvlValues>;
  type?: typeDataValues;
}

export interface SubLvlValues {
  title: string;
  children: Array<DataValues>;
}

export interface TabValues {
  show: boolean;
  class: string;
  children: Array<DataTabValues>;
  type?: typeDataValues;
}

export enum typeDataValues {
  text = 'text',
  graph = 'graph',
  stock = 'stock',
  table = 'table',
  map = 'map',
  files = 'files',
  scr = 'scr',
  criCra = 'criCra',
  tableSpeed = 'tableSpeed',
  lvl3 = 'lvl3',
  lvl4 = 'lvl4',
  /** @deprecated */
  tabs = 'tabs',
  /** @deprecated */
  accordion = 'accordion',
}

export interface DataTabValues {
  title: string;
  children: Array<DataValues>;
}

export interface DataValues {
  show: boolean;
  value: string | number | boolean | object | DataLearnTable | DataLearnMap | Array<DirectoryTO> |
    Array<DataValues> | DataLearnSCR | DataCriCra | Array<AnalysisTO> | undefined;
  class: string;
  icon?: string;
  type?: typeDataValues;
  pipe?: string;
  // custom values for plain data
  title?: string;
  tooltip?: string;
  argument?: string | number;
  // custom values for show-value component
  mix?: boolean;
  left?: string;
  terna?: Array<string>;
  right?: string;
  newRow?: boolean;
  colSpan?: number;
}

export interface DataLearnSCR {
  creditsInformation: Array<CreditInformationTO>;
  creditsInformationMethodK: Array<CreditInformationMethodKTO>;
  cnpj: string;
}


export interface DataCriCra {
  cnpj: string;
  criCraDebentures: Array<CriCraDebentureTO>;
}

export interface DataLearnMap {
  center?: {
    lat?: number;
    lng?: number;
  };
  address?: string;
}

export interface LightPersonTO extends PersonTO {
  cafir: CafirTO;
  properties: Array<PropertyBaseTO>;
  spouse: string;
}

export interface LightSpouseTO {
  cafir: CafirTO;
  properties: Array<PropertyBaseTO>;
}

export interface ProconTO {
  groupPenaltyValue: number;
  name: string;
  proconGroups: Array<ProconGroupTO>;
  proconProcesses: Array<ProconProcessTO>;
  totalPenaltyValue: number;
  updateDate: string;
}

export interface ProconGroupTO {
  cnpj: string;
  totalPenaltyValue: string;
}

export interface ProconProcessTO {
  penaltyValue: number;
  processNumber: string;
  status: string;
}

export interface ProtestInformationTO {
  analysis: ProtestAnalysisTO;
  created: string;
  document: string;
  id: number;
  protestRegistries: Array<ProtestRegistryTO>;
  total: number;
  totalError: number;
}

export interface ProtestAnalysisTO {
  activesByState: object;
  activesByYear: object;
  amountProtest: number;
  amountRegistry: number;
  firstProtest: ProtestLightTO;
  higherValueProtest: ProtestLightTO;
  protestEvolutionByMonths: Array<ProtestEvolutionTO>;
  protestEvolutionByYears: Array<ProtestEvolutionTO>;
  protestsByArea: Array<ProtestAreaTO>;
  totalValue: number;
}

export interface ProtestLightTO {
  assignorName: string;
  consultDate: string;
  value: number;
}

export interface ProtestEvolutionTO {
  date: string;
  percent: string;
  value: string;
}

export interface ProtestAreaTO {
  amount: number;
  area: areaProtestAreaTO;
  percent: string;
  value: number;
}

export interface ProtestRegistryTO {
  address: string;
  amount: number;
  city: string;
  cityCode: string;
  cityCodeIbge: string;
  code: number;
  id: number;
  municipality: string;
  name: string;
  neighborhood: string;
  phone: string;
  protests: Array<ProtestTO>;
  searchPeriod: string;
  uf: string;
  updateDate: string;
}

export interface ProtestTO {
  area: areaProtestAreaTO;
  assignorName: string;
  consultDate: string;
  dueDate: string;
  hasConsent: boolean;
  id: number;
  key: string;
  presenterName: string;
  value: number;
}

export interface SimpleNationalTO {
  id: number;
  simei: boolean;
  simeiDate: string;
  simple: boolean;
  simpleDate: string;
  simpleIrregular: boolean;
}

export interface SintegraInscriptionTO {
  email: string;
  id: number;
  phone: string;
  regime: string;
  registrationNumber: string;
  registrationSituation: string;
  registrationSituationDate: string;
  uf: string;
}

export interface SuframaTO {
  expirationDate: string;
  icms: string;
  id: number;
  ipi: string;
  pisCofins: string;
  registrationNumber: string;
  registrationSituation: string;
}

export interface TaxHealthTO {
  cnds: Array<CndsTO>;
  id: number;
  taxHealth: string;
}

export interface CndsTO {
  certificateNumber: string;
  document: DirectoryTO;
  emissionDate: string;
  emitterName: string;
  expirationDate: string;
  id: number;
  situation: string;
}

export interface WorkMteTO {
  complement: string;
  fiscalActionYear: number;
  municipality: string;
  neighborhood: string;
  provenanceDecisionDate: string;
  quantityWorkers: number;
  uf: string;
}

export interface ProductAnalysisITO {
  cnpj: string;
  personPartners: Array<LightPersonSpouseTO>;
  personSpouses: Array<LightPersonSpouseTO>;
  properties: Array<PropertyGuaranteeTO>;
  propertiesRural: Array<PropertyGuaranteeTO>;
  propertyGuarantees: Array<PropertyGuaranteeTO>;
}

export interface LightPersonSpouseTO extends PersonTO {
  properties: Array<PropertyGuaranteeTO>;
  propertiesRural: Array<PropertyGuaranteeTO>;
  spouse: string;
}

export interface PersonTO {
  age: number;
  birthDate: string;
  cns: string;
  corporatesParticipation: Array<CorporateParticipationTO>;
  cpf: string;
  dead: boolean;
  deadConfirmation: boolean;
  deadDate: number;
  debitMte: DebitMteTO;
  debitPgfnDau: DebitPgfnDauTO;
  debitPgfnDauValue: string;
  deficiency: boolean;
  deficiencyType: string;
  disabilitiesBacens: Array<DisabilitiesBacenTO>;
  educationLevel: string;
  email: string;
  fatherName: string;
  historicalCriminal: HistoricalCriminalTO;
  historicalFunctional: Array<HistoricalFunctionalTO>;
  id: number;
  inscriptionCpfDate: string;
  irpf: Array<IrpfTO>;
  judicialProcess: JudicialProcessTO;
  mainAddress: AddressTO;
  marriageRegime: string;
  motherCpf: string;
  motherName: string;
  name: string;
  nis: string;
  originCountry: string;
  otherAddresses: Array<AddressTO>;
  phones: Array<string>;
  professionCbo: string;
  professionNeoway: string;
  publicAgent: boolean;
  quantityQsaUnique: number;
  registerSituation: string;
  relationships: Array<RelationshipTO>;
  sex: string;
  situation: string;
  situationCpf: string;
  socialInscription: string;
}

export interface CorporateParticipationTO {
  businessActivityCnae: string;
  cnpj: string;
  descriptionCnae: string;
  estimatedBilling: string;
  estimatedBillingGroup: string;
  id: number;
  levelPreparation: string;
  levelPreparationRF: string;
  municipality: string;
  openingDate: string;
  participation: number;
  participationRF: number;
  participationSocialCapital: number;
  participationSocialCapitalRF: number;
  qualification: string;
  qualificationRF: string;
  situation: string;
  socialCapital: string;
  socialReason: string;
  uf: string;
}

export interface DebitMteTO {
  certificateType: string;
  code: string;
  debitSituation: string;
  emissionDate: string;
  id: number;
  processes: Array<DebitMteProcessTO>;
}

export interface DebitMteProcessTO {
  id: number;
  infringementCapitulation: string;
  infringementCategory: string;
  number: string;
  situation: string;
}

export interface DebitPgfnDauTO {
  debitPgfns: Array<DebitPgfnTO>;
  id: number;
  totalDebits: number;
}

export interface DebitPgfnTO {
  debit: number;
  id: number;
  inscriptionNumber: string;
  nature: string;
}

export interface DisabilitiesBacenTO {
  duration: number;
  id: number;
  penalty: string;
  penaltyPeriodDate: string;
  publicationDate: string;
}

export interface HistoricalCriminalTO {
  consultationDate: string;
  id: number;
  protocol: string;
  situation: string;
  status: string;
}

export interface HistoricalFunctionalTO {
  admissionDate: string;
  cnpj: string;
  dismissedDate: string;
  id: number;
  months: number;
  socialReason: string;
}

export interface IrpfTO {
  agency: string;
  availabilityDate: string;
  bank: string;
  id: number;
  lot: string;
  statementStatus: string;
  yearExercise: number;
}

export interface JudicialProcessTO {
  id: number;
  judicialProcessQuantities: Array<JudicialProcessQuantityTO>;
  totalActiveValue: number;
  totalOthersValue: number;
  totalPassiveValue: number;
  totalValue: number;
}

export interface JudicialProcessQuantityTO {
  id: number;
  quantityActive: number;
  quantityActivePart: number;
  quantityOthers: number;
  quantityPassivePart: number;
  quantityTotal: number;
  type: string;
}

export interface RelationshipTO {
  cpf: string;
  description: string;
  id: number;
  name: string;
}

export interface PropertyGuaranteeTO extends PropertyBaseTO {
  document: DirectoryTO;
  ownerType: ownerTypePropertyGuarantee;
  referenceProperty: number;
  type: typePropertyGuarantee;
}

export interface PropertyBaseTO {
  buildingData: string;
  builtArea: number;
  complement: string;
  evaluationValue: number;
  groundArea: number;
  id: number;
  municipality: string;
  neighborhood: string;
  neighborhoodNumber: string;
  registryUf: string;
  registryNumber: string;
  street: string;
  uf: string;
  zip: string;
}

export interface HorizontalAnalysisThreeTO {
  invoiceBilling: Array<InvoiceIssuedTO>;
  invoiceEmployee: Array<EmployeeGrowthTO>;
  invoicePayment: Array<InvoiceIssuedTO>;
  invoiceTax: Array<InvoiceTaxTO>;
}

export interface InvoiceIssuedTO {
  month: string;
  total: number;
  year: number;
}

export interface InvoiceIssuedTO {
  month: string;
  total: number;
  year: number;
}

export interface InvoiceTaxTO {
  cofins: number;
  icms: number;
  ipi: number;
  month: string;
  pis: number;
  year: number;
}

export interface VerticalAnalysisThreeTO {
  invoiceBilling: Array<InvoiceVerticalTO>;
  invoicePayment: Array<InvoiceVerticalTO>;
}

export interface InvoiceVerticalTO {
  cnpj: string;
  name: string;
  total: number;
}

export interface AnalysisTO {
  date: string;
  financialAnalysis: FinancialAnalysisTO;
  verticalAnalysis: Array<VerticalAnalysisTO>;
}

export interface FinancialAnalysisTO {
  balance: BalanceTO;
  cashConversion: CashConversionTO;
  dupont: DupontTO;
  operationalMargin: OperationalMarginTO;
}

export interface BalanceTO {
  availabilities: number;
  cclFormula: string;
  cclResult: number;
  currentAssets: number;
  currentLiabilities: number;
  dlFormula: string;
  dlNoFormula: string;
  dlNoResult: number;
  dlResult: number;
  dlRoFormula: string;
  dlRoNoFormula: string;
  dlRoNoResult: string;
  dlRoResult: string;
  longTermDebt: number;
  operationValue: number;
  operationalResult: number;
  shortTermDebt: number;
}

export interface CashConversionTO {
  accountsPayable: number;
  billsToReceive: number;
  cccFormula: string;
  cccResult: string;
  cmv: number;
  grossReceipt: number;
  imeFormula: string;
  imeResult: string;
  pmpFormula: string;
  pmpResult: string;
  pmrFormula: string;
  pmrResult: string;
  purchaseFormula: string;
  purchases: number;
  stock: number;
}

export interface DupontTO {
  active: number;
  gaFormula: string;
  gaResult: string;
  leverageFormula: string;
  leverageResult: string;
  liquidEquity: number;
  liquidProfit: number;
  liquidReceipt: number;
  mlFormula: string;
  mlResult: string;
  roeFormula: string;
  roeResult: string;
}

export interface OperationalMarginTO {
  liquidReceipt: number;
  moFormula: string;
  moResult: string;
  operationalResult: number;
}

export interface DirectoryTO {
  ext: string;
  id: number;
  name: string;
  type: directoryType;
  url: string;
}

export interface CreditInformationMethodKTO {
  amountInstitutions: number;
  amountOperations: number;
  consultDate: string;
  expiredVolume: number;
  sumaries: Array<CreditInformationMethodKSummaryTO>;
}

export interface CreditInformationMethodKSummaryTO {
  productCode: string;
  productName: string;
  total: number;
  totalBetween181and360d: number;
  totalBetween361and720d: number;
  totalBetween91and180d: number;
  totalGreaterThan720d: number;
  totalLessThan90d: number;
  class: string;
}

export interface SCROwnerAuthorization {
  companyUsersIds: number[],
  cpf: string,
  email: string,
  name: string
}

export interface CageFlux {
  month: string;
  billing: number;
  taxes: number;
  year: number;
  payment: number;
}
