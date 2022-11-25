import { CompanyOperationStatus, sectorCnaeTO } from "../enums";
import { UserSaasAuthenticated } from "./UserAuthenticated";

export interface CompanyInfoAnalysisTO {
  baseInfo:        CompanyTO;
  invoiceAnalysis: InvoiceAnalysisTO;
  spedAnalysis:    SpedAnalysisTO;
}

export interface CompanyTO {
  activityLevel:               string;
  address:                     AddressTO;
  affiliates:                  AffiliatedCompanyTO[];
  age:                         number;
  aircraft:                    AircraftTO[];
  anpFuelStation:              AnpFuelStationTO;
  anpSupplyPoints:             AnpSupplyPointTO[];
  antt:                        AnttTO;
  anvisa:                      AnvisaTO;
  bankOperations:              BankOperationTO[];
  beneficiaries:               CompanyBeneficiaryTO[];
  cadastur:                    CadasturTO;
  cafir:                       CafirTO;
  ceis:                        CeisTO[];
  cepims:                      CepimTO[];
  cfcs:                        CfcTO[];
  cnaes:                       CnaeTO[];
  cneps:                       CnepTO[];
  cnjCnias:                    CnjCniaTO[];
  cnpj:                        string;
  companiesRelated:            CompanyRelatedTO[];
  companyClosingPropensity:    string;
  companyEmecCourses:          CompanyEmecCourseTO[];
  companySize:                 string;
  covid19Individual:           string;
  covid19Segment:              string;
  created:                     string;
  creditsInformation:          CreditInformationTO[];
  creditsInformationMethodK:   CreditInformationMethodKTO[];
  crsfns:                      CrsfnTO[];
  cvm:                         CvmTO;
  cvmRegistrationData:         CvmParticipantTO[];
  dateRegistrationSituation:   string;
  dateSpecialSituation:        string;
  debitMte:                    DebitMteTO;
  debitPgfnDau:                DebitPgfnDauTO;
  deliveryPropensity:          string;
  documents:                   DocumentMetadataTO[];
  domains:                     DomainTO[];
  ecommercePropensity:         string;
  employeeAnalystCount:        number;
  employeeBaseCount:           number;
  employeeBuyerCount:          number;
  employeeDoctorCount:         number;
  employeeEngineerCount:       number;
  employeeGrowths:             EmployeeGrowthTO[];
  employeeLawyerCount:         number;
  employeeManagerCount:        number;
  employeeOtherCount:          number;
  employeePdvCount:            number;
  employeeSellerCount:         number;
  employeeSupervisorCount:     number;
  employeeTeacherCount:        number;
  employees:                   CompanyEmployeeTO[];
  environmentalLicenses:       EnvironmentalLicenseTO[];
  estimatedBilling:            string;
  estimatedBillingGroup:       string;
  exEmployees:                 CompanyEmployeeTO[];
  exports:                     CompanyExportTO[];
  fantasyName:                 string;
  financialActivity:           FinancialActivityTO;
  financialIndicators:         FinancialIndicatorTO[];
  foreignCommerce:             ForeignCommerceTO;
  franchiseName:               string;
  grossBilling:                number;
  groupMultinational:          boolean;
  hasAccountantContact:        boolean;
  hasDivergentQSA:             boolean;
  hasFranchiseIndicative:      boolean;
  healthEstablishments:        HealthEstablishmentTO[];
  heavyVehicleInfo:            HeavyVehicleInfoTO;
  ibamaCnd:                    IbamaCndTO;
  ibge:                        IbgeTO;
  id:                          string;
  imports:                     CompanyExportTO[];
  inpiBrands:                  InpiBrandTO[];
  inpiPatents:                 InpiPatentTO[];
  inpiSoftwares:               InpiSoftwareTO[];
  internationalLists:          InternationalListTO[];
  judicialProcess:             JudicialProcessTO;
  lastUpdate:                  string;
  legalNatureCode:             string;
  legalNatureDescription:      string;
  mainCnae:                    CnaeTO;
  managementContract:          ManagementContractTO;
  matrix:                      boolean;
  matrixInfo:                  AffiliatedCompanyTO;
  modified:                    string;
  multinational:               boolean;
  openCapital:                 OpenCapitalTO;
  openingDate:                 string;
  originCountry:               string;
  partners:                    CompanyPartnerTO[];
  passiveIISS:                 boolean;
  pat:                         PatTO;
  personPartners:              PersonTO[];
  phones:                      string[];
  procon:                      ProconTO;
  properties:                  PropertyBaseTO[];
  protestInformation:          ProtestInformationTO;
  quantityActiveBranches:      number;
  quantityEmployee:            number;
  quantityExEmployee:          number;
  registrationSituation:       string;
  registrationSituationReason: string;
  remoteWorkingCapacity:       string;
  rfEmail:                     string;
  schools:                     SchoolTO[];
  simpleNational:              SimpleNationalTO;
  sintegraInscriptions:        SintegraInscriptionTO[];
  socialCapital:               number;
  socialReason:                string;
  specialSituation:            string;
  suframa:                     SuframaTO;
  taxHealth:                   TaxHealthTO;
  workMtes:                    WorkMteTO[];
}

export interface CreditInformationMethodKTO {
  amountInstitutions: number;
  amountOperations: number;
  consultDate: string;
  expiredVolume: number;
  sumaries: CreditInformationMethodKSummaryTO[];
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

export interface AddressTO {
  address1:             string;
  address2:             string;
  borderMunicipality:   string;
  buildingType:         string;
  codeCountry:          string;
  codeMunicipality:     string;
  collectiveBuilding:   boolean;
  country:              string;
  deliveryRestriction:  boolean;
  formattedAddress:     string;
  latestAddress:        boolean;
  latitude:             number;
  longitude:            number;
  microRegion:          string;
  mregion:              string;
  municipality:         string;
  neighborhood:         string;
  number:               string;
  originalNeighborhood: string;
  precision:            string;
  region:               string;
  registryUf:           string;
  residentialAddress:   boolean;
  rfPhones:             string[];
  uf:                   string;
  zip:                  string;
}

export interface AffiliatedCompanyTO {
  cnpj:                   string;
  municipality:           string;
  openingDate:            string;
  registrationSituation: string;
  socialReason:           string;
  uf:                     string;
}

export interface AircraftTO {
  maker:          string;
  model:          string;
  operatorName:   string;
  ownerName:      string;
  productionYear: number;
  registration:   string;
  situation:      string;
  statusRAB:      string;
}

export interface AnpFuelStationTO {
  currentFlag:          string;
  equipments:           AnpFuelStationEquipmentTO[];
  flags:                AnpFuelStationFlagTO[];
  postType:             string;
  stationAuthorization: string;
  totalSpikes:          number;
  totalTank:            number;
}

export interface AnpFuelStationEquipmentTO {
  beaks:   number;
  fuel:    string;
  tanking: number;
}

export interface AnpFuelStationFlagTO {
  flag:          string;
  startFlagDate: string;
}

export interface AnpSupplyPointTO {
  municipality:       string;
  totalCapacityTanks: number;
  totalNumberTanks:   number;
  uf:                 string;
}

export interface AnttTO {
  category:       string;
  emissionDate:   string;
  expirationDate: string;
  municipality:   string;
  rntrcNumber:    string;
  situation:      string;
  uf:             string;
}

export interface AnvisaTO {
  legalRepresentatives:     string[];
  processes:                AnvisaProcessTO[];
  technicalRepresentatives: string[];
}

export interface AnvisaProcessTO {
  authorizationDate:    string;
  authorizationProcess: string;
  description:          string;
  processNumber:        string;
}

export interface BankOperationTO {
  amortizationPeriod: number;
  contractedDate:     string;
  contractedValue:    number;
  financialAgent:     string;
  financialCost:      string;
  gracePeriod:        number;
  modified:           string;
  product:            string;
  status:             string;
  tax:                number;
  type:               string;
  uf:                 string;
}

export interface CompanyBeneficiaryTO {
  dead:             boolean;
  document:         string;
  grade:            number;
  gradeQsa:         number;
  name:             string;
  participation:    number;
  participationQsa: number;
}

export interface CadasturTO {
  certificateNumber: string;
  idioms:            string[];
  numberOfVehicles:  number;
  registered:        boolean;
  segments:          string[];
  services:          string[];
  site:              string;
  situation:         string;
  uf:                string;
}

export interface CafirTO {
  propertiesRural:      PropertiesRuralTO[];
  quantityCondominiums: number;
  quantityHolder:       number;
  totalArea:            number;
}

export interface PropertiesRuralTO {
  area:         number;
  condominium:  string;
  municipality: string;
  name:         string;
  nirf:         string;
  type:         string;
  uf:           string;
}

export interface CeisTO {
  endSanctionDate:     string;
  informationDate:     string;
  informationEntity:   string;
  initSanctionDate:    string;
  legalSubstantiation: string;
  organComplement:     string;
  processNumber:       string;
  sanction:            string;
  sanctioningEntity:   string;
  ufSanctioningEntity: string;
}

export interface CepimTO {
  contract:        string;
  endContractDate: string;
  grantorEntity:   string;
  impediment:      string;
  valueReleased:   number;
}

export interface CfcTO {
  crc:       string;
  record:    string;
  situation: string;
  type:      string;
}

export interface CnaeTO {
  businessActivity:    string;
  code:                string;
  description:         string;
  id:                  string;
  physicalProductions: PhysicalProductionTO[];
  sector:              sectorCnaeTO;
}

export interface PhysicalProductionTO {
  codeDescription:                         string;
  date:                                    string;
  fixedBaseIndexWithoutSeasonalAdjustment: 	PhysicalProductionVariableTO;
  indexAccumulatedLast12Months:            	PhysicalProductionVariableTO;
  monthlyIndex:                            	PhysicalProductionVariableTO;
  monthlyPercentageChange:                 	PhysicalProductionVariableTO;
  percentageChangeAccumulatedLast12Months: 	PhysicalProductionVariableTO;
  percentageChangeAccumulatedYear:         	PhysicalProductionVariableTO;
  territorialLevel:                        string;
  yearToDateIndex:                         	PhysicalProductionVariableTO;
}

export interface 	PhysicalProductionVariableTO {
  measureUnit: string;
  name:        string;
  value:       number;
}

export interface CnepTO {
  endSanctionDate:     string;
  initSanctionDate:    string;
  penaltyValue:        number;
  processNumber:       string;
  sanction:            string;
  sanctioningEntity:   string;
  ufSanctioningEntity: string;
}

export interface CnjCniaTO {
  descriptionEntity: string;
  processNumber:     string;
  registrationDate:  string;
  relatedIssues:     string[];
  sphere:            string;
  uf:                string;
  value:             number;
}

export interface CompanyRelatedTO {
  cnpj: string;
  descriptionCnae: string;
  municipality: string;
  openingDate: string;
  socialReason: string;
  uf: string;
}

export interface CompanyEmecCourseTO {
  academicOrganization:   string;
  administrativeCategory: string;
  codeLes:                string;
  descriptionLes:         string;
  municipality:           string;
  situation:              string;
  uf:                     string;
}

export interface CreditInformationTO {
  assumedObligation:               number;
  cnpjIfRequester:                 string;
  consultDate:                     string;
  countInstitution:                number;
  countOperation:                  number;
  countOperationDisagreement:      number;
  countOperationSubJudice:         number;
  created:                         string;
  find:                            boolean;
  operations:                      ResumeOperationTO[];
  percentDocumentProcessed:        number;
  percentVolumeProcessed:          number;
  responsibilityTotalDisagreement: number;
  responsibilityTotalSubJudice:    number;
  startRelationshipDate:           string;
  vendorIndirectRisk:              number;
}

export interface ResumeOperationTO {
  earnings:          EarningTO[];
  exchangeVariation: string;
  modality:          string;
}

export interface EarningTO {
  code:  string;
  value: number;
}

export interface CrsfnTO {
  agreedNumber:   string;
  part:           string;
  processNumber:  string;
  resourceNumber: string;
  resourceType:   string;
}

export interface CvmTO {
  balanceYear:   number;
  grossProfit:   number;
  grossRevenue:  number;
  liquidAssets:  number;
  liquidBilling: number;
  liquidProfit:  number;
  totalActive:   number;
}

export interface CvmParticipantTO {
  activitySector:   string;
  code:             string;
  liquidAssets:     number;
  registrationDate: string;
  registrationType: string;
  responsibleName:  string;
  responsibleType:  string;
  situationDate:    string;
  situationRecord:  string;
}

export interface DebitMteTO {
  certificateType: string;
  code:            string;
  debitSituation:  string;
  emissionDate:    string;
  processes:       DebitMteProcessTO[];
}

export interface DebitMteProcessTO {
  infringementCapitulation: string;
  infringementCategory:     string;
  number:                   string;
  situation:                string;
}

export interface DebitPgfnDauTO {
  debitPgfns:  DebitPgfnTO[];
  totalDebits: number;
}

export interface DebitPgfnTO {
  debit:             number;
  inscriptionNumber: string;
  nature:            string;
}

export interface DocumentMetadataTO {
  created: string;
  ext:     string;
  name:    string;
  type:    string;
  url:     string;
}

export interface DomainTO {
  createdDate:      string;
  expirationDate:   string;
  modificationDate: string;
  name:             string;
  responsible:      string;
}

export interface EmployeeGrowthTO {
  employeeGrowth: number;
  growth:         number;
  year:           number;
}

export interface CompanyEmployeeTO {
  admissionDate:   string;
  birthDate:       string;
  cpf:             string;
  name:            string;
  resignationYear: string;
}

export interface EnvironmentalLicenseTO {
  descriptionTypology: string;
  emitData:            string;
  municipality:        string;
  processNumber:       string;
  situation:           string;
  type:                string;
  typologyNumber:      string;
  uf:                  string;
  updateData:          string;
}

export interface CompanyExportTO {
  value: string;
  year:  number;
}

export interface FinancialActivityTO {
  enablementDate:      string;
  enablementNumber:    string;
  enablementSituation: string;
  queryDate:           string;
  segment:             string;
}

export interface FinancialIndicatorTO {
  increase: number;
  margin:   number;
}

export interface ForeignCommerceTO {
  authorizedOperations: string;
  enabled:              boolean;
  enabledSituation:     string;
  modality:             string;
  situationDate:        string;
  submodality:          string;
}

export interface HealthEstablishmentTO {
  lastUpdate:            string;
  quantityBeds:          number;
  quantityProfessionals: number;
  unitType:              string;
}

export interface HeavyVehicleInfoTO {
  between2And5:       number;
  between5And10:      number;
  groupBetween2And5:  number;
  groupBetween5And10: number;
  groupOver10:        number;
  groupUpTo1:         number;
  heavyVehicles:      number;
  heavyVehiclesGroup: number;
  over10:             number;
  upto1:              number;
  vehicles:           HeavyVehicleTO[];
}

export interface HeavyVehicleTO {
  antt:           boolean;
  carPlate:       string;
  fuel:           string;
  model:          string;
  productionYear: number;
  renavam:        string;
  type:           string;
  uf:             string;
}

export interface IbamaCndTO {
  certificateNumber: string;
  emitDate:          string;
  situation:         string;
  validDate:         string;
}

export interface IbgeTO {
  economicStatistics:        EconomicStatisticsTO;
  geographicStatistics:      GeographicStatisticsTO;
  workPerformanceStatistics: WorkPerformanceStatisticsTO;
}

export interface EconomicStatisticsTO {
  idhm: number;
  idhmYear:	number;
  percentageRevenueSources: number;
  percentageRevenueSourcesYear:	number;
  pib:	number;
  pibYear:	number;
  totalExpenses: number;
  totalExpensesYear:	number;
  totalRevenue:	number;
  totalRevenueYear:	number;
}

export interface GeographicStatisticsTO {
  demographicDensity:                number;
  demographicDensityYear:            number;
  estimatedPopulation:               number;
  estimatedPopulationLastCensus:     number;
  estimatedPopulationLastCensusYear: number;
  estimatedPopulationYear:           number;
}

export interface WorkPerformanceStatisticsTO {
  averageSalary:                      number;
  averageSalaryYear:                  number;
  busyPeople:                         number;
  busyPeopleYear:                     number;
  occupiedPopulation:                 number;
  occupiedPopulationYear:             number;
  populationIncomeMonthlyNominal:     number;
  populationIncomeMonthlyNominalYear: number;
}

export interface InpiBrandTO {
  brand:         string;
  classBrand:    string;
  depositDate:   string;
  processNumber: string;
  situation:     string;
}

export interface InpiPatentTO {
  concessionDate:  string;
  depositDate:     string;
  depositor:       string;
  inventors:       string[];
  processNumber:   string;
  procurator:      string;
  publicationDate: string;
  title:           string;
}

export interface InpiSoftwareTO {
  authors:       string[];
  depositDate:   string;
  processNumber: string;
  procurator:    string;
  title:         string;
}

export interface InternationalListTO {
  name:      string;
  queryDate: string;
}

export interface JudicialProcessTO {
  judicialProcessQuantities: JudicialProcessQuantityTO[];
  totalActiveValue:          number;
  totalOthersValue:          number;
  totalPassiveValue:         number;
  totalValue:                number;
}

export interface JudicialProcessQuantityTO {
  quantityActive:      number;
  quantityActivePart:  number;
  quantityOthers:      number;
  quantityPassivePart: number;
  quantityTotal:       number;
  type:                string;
}

export interface ManagementContractTO {
  contracts:         ContractTO[];
  modalityContracts: ModalityContractTO[];
  quantity:          number;
  totalValue:        number;
}

export interface ContractTO {
  contractNumber: string;
  endDate:        string;
  finalValue:     number;
  initDate:       string;
  monthsValidity: number;
  organ:          string;
  sphere:         string;
  uf:             string;
}

export interface ModalityContractTO {
  quantity: number;
  type:     string;
}

export interface OpenCapitalTO {
  complementLogradouroInvestmentDirector: string;
  emailInvestmentDirector:                string;
  logradouroInvestmentDirector:           string;
  mainActivity:                           string;
  municipalityInvestmentDirector:         string;
  nameInvestmentDirector:                 string;
  negotiationCode:                        string;
  numberInvestmentDirector:               string;
  openCapitalActionPositions:             OpenCapitalActionPositionTO[];
  openCapitalPatrimonialBalances:         OpenCapitalPatrimonialBalanceTO[];
  openCapitalPenalties:                   OpenCapitalPenaltyTO[];
  openCapitalResultDemonstrations:        OpenCapitalResultDemonstrationTO[];
  phoneInvestmentDirector:                string;
  sectorialClassification:                string;
  site:                                   string;
  tradingFloorCode:                       string;
  ufInvestmentDirector:                   string;
  zipInvestmentDirector:                  string;
}

export interface OpenCapitalActionPositionTO {
  document:                 string;
  orderActionsValue:        number;
  preferentialActionsValue: number;
  totalValue:               number;
}

export interface OpenCapitalPatrimonialBalanceTO {
  activeTotal:               number;
  activeValue:               number;
  liquidPatrimony:           number;
  liquidPatrimonyController: number;
  year:                      number;
}

export interface OpenCapitalPenaltyTO {
  crated: string;
  reason: string;
}

export interface OpenCapitalResultDemonstrationTO {
  benefitPeriod:                number;
  benefitPeriodController:      number;
  recipeSale:                   number;
  resultBrute:                  number;
  resultFinancial:              number;
  resultLiquidOperations:       number;
  resultPatrimonialEquivalence: number;
  year:                         number;
}

export interface CompanyPartnerTO {
  criminalProcess:              string[];
  dead:                         boolean;
  document:                     string;
  levelPreparation:             string;
  levelPreparationRF:           string;
  name:                         string;
  originCountry:                string;
  participation:                number;
  participationRF:              number;
  participationSocialCapital:   number;
  participationSocialCapitalRF: number;
  qualification:                string;
  qualificationRF:              string;
}

export interface PatTO {
  benefitedEmployees:    number;
  exerciseDate:          string;
  inscription:           string;
  mealProvides:          PatMealProvidedTO[];
  modalities:            PatModalityTO[];
  registrationSituation: string;
  responsibleCpf:        string;
  responsibleEmail:      string;
  responsibleName:       string;
}

export interface PatMealProvidedTO{
  quantity:             number;
  type:                 string;
}

export interface PatModalityTO {
  benefitedEmployees:   number;
  mode:                 string;
  over5Sm:              number;
  providerCnpj:         string;
  providerSocialReason: string;
  to5Sm:                number;
}

export interface PersonTO {
  age:                     number;
  birthDate:               string;
  cafir:                   CafirTO;
  cns:                     string;
  corporatesParticipation: CorporatesParticipationTO[];
  cpf:                     string;
  dead:                    boolean;
  deadConfirmation:        boolean;
  deadDate:                number;
  debitMte:                DebitMteTO;
  debitPgfnDau:            DebitPgfnDauTO;
  debitPgfnDauValue:       string;
  deficiency:              boolean;
  deficiencyType:          string;
  disabilitiesBacens:      DisabilitiesBacenTO[];
  educationLevel:          string;
  email:                   string;
  fatherName:              string;
  historicalCriminal:      HistoricalCriminalTO;
  historicalFunctional:    HistoricalFunctionalTO[];
  id:                      string;
  inscriptionCpfDate:      string;
  irpf:                    IrpfTO[];
  judicialProcess:         JudicialProcessTO;
  mainAddress:             AddressTO;
  motherCpf:               string;
  motherName:              string;
  name:                    string;
  nis:                     string;
  originCountry:           string;
  otherAddresses:          AddressTO[];
  phones:                  string[];
  professionCbo:           string;
  professionNeoway:        string;
  properties:              PropertyBaseTO[];
  publicAgent:             boolean;
  quantityQsaUnique:       number;
  registerSituation:       string;
  relationships:           RelationshipTO[];
  sex:                     string;
  situation:               string;
  situationCpf:            string;
  socialInscription:       string;
}

export interface CorporatesParticipationTO {
  businessActivityCnae:         string;
  cnpj:                         string;
  descriptionCnae:              string;
  estimatedBilling:             string;
  estimatedBillingGroup:        string;
  levelPreparation:             string;
  levelPreparationRF:           string;
  municipality:                 string;
  openingDate:                  string;
  participation:                number;
  participationRF:              number;
  participationSocialCapital:   number;
  participationSocialCapitalRF: number;
  qualification:                string;
  qualificationRF:              string;
  situation:                    string;
  socialCapital:                string;
  socialReason:                 string;
  uf:                           string;
}

export interface DisabilitiesBacenTO {
  duration:          number;
  penalty:           string;
  penaltyPeriodDate: string;
  publicationDate:   string;
}

export interface HistoricalCriminalTO {
  consultationDate: string;
  protocol:         string;
  situation:        string;
  status:           string;
}

export interface HistoricalFunctionalTO {
  admissionDate: string;
  cnpj:          string;
  dismissedDate: string;
  months:        number;
  socialReason:  string;
}

export interface IrpfTO {
  agency:           string;
  availabilityDate: string;
  bank:             string;
  lot:              string;
  statementStatus:  string;
  yearExercise:     number;
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

export interface RelationshipTO {
  cpf:         string;
  description: string;
  name:        string;
}

export interface ProconTO {
  groupPenaltyValue: number;
  name:              string;
  proconGroups:      ProconGroupTO[];
  proconProcesses:   ProconProcessTO[];
  totalPenaltyValue: number;
  updateDate:        string;
}

export interface ProconGroupTO {
  cnpj:              string;
  totalPenaltyValue: number;
}

export interface ProconProcessTO {
  penaltyValue:  number;
  processNumber: string;
  status:        string;
}

export interface ProtestInformationTO {
  analysis:          ProtestAnalysisTO;
  created:           string;
  document:          string;
  protestRegistries: ProtestRegistryTO[];
  total:             number;
  totalError:        number;
}

export interface ProtestAnalysisTO {
  activesByState:           ActivesBy;
  activesByYear:            ActivesBy;
  amountProtest:            number;
  amountRegistry:           number;
  firstProtest:             ProtestLigthTO;
  higherValueProtest:       ProtestLigthTO;
  protestEvolutionByMonths: ProtestEvolutionTO[];
  protestEvolutionByYears:  ProtestEvolutionTO[];
  protestsByArea:           ProtestsAreaTO[];
  totalValue:               number;
}

export interface ActivesBy {
  additionalProp1: number;
  additionalProp2: number;
  additionalProp3: number;
}

export interface ProtestLigthTO {
  assignorName: string;
  consultDate:  string;
  value:        number;
}

export interface ProtestEvolutionTO {
  date:    string;
  percent: string;
  value:   string;
}

export interface ProtestsAreaTO {
  amount:  number;
  area:    string;
  percent: string;
  value:   number;
}

export interface ProtestRegistryTO {
  address:      string;
  amount:       number;
  city:         string;
  cityCode:     string;
  cityCodeIbge: string;
  code:         number;
  municipality: string;
  name:         string;
  neighborhood: string;
  phone:        string;
  protests:     ProtestTO[];
  searchPeriod: string;
  uf:           string;
  updateDate:   string;
}

export interface ProtestTO {
  area:          string;
  assignorName:  string;
  consultDate:   string;
  dueDate:       string;
  hasConsent:    boolean;
  key:           string;
  presenterName: string;
  value:         number;
}

export interface SchoolTO {
  category:        string;
  functioning:     string;
  link:            string;
  name:            string;
  totalEnrollment: number;
}

export interface SimpleNationalTO {
  simei:           boolean;
  simeiDate:       string;
  simple:          boolean;
  simpleDate:      string;
  simpleIrregular: boolean;
}

export interface SintegraInscriptionTO {
  email:                     string;
  phone:                     string;
  regime:                    string;
  registrationNumber:        string;
  registrationSituation:     string;
  registrationSituationDate: string;
  uf:                        string;
}

export interface SuframaTO {
  expirationDate:        string;
  icms:                  string;
  ipi:                   string;
  pisCofins:             string;
  registrationNumber:    string;
  registrationSituation: string;
}

export interface TaxHealthTO {
  cnds:      CndsTO[];
  taxHealth: string;
}

export interface CndsTO {
  certificateNumber: string;
  document:          DocumentMetadataTO;
  emissionDate:      string;
  emitterName:       string;
  expirationDate:    string;
  situation:         string;
}

export interface WorkMteTO {
  complement:             string;
  fiscalActionYear:       number;
  municipality:           string;
  neighborhood:           string;
  provenanceDecisionDate: string;
  quantityWorkers:        number;
  uf:                     string;
}

export interface InvoiceAnalysisTO {
  cnpj:                 string;
  horizontalAnalysisTO: HorizontalAnalysisThreeTO;
  verticalAnalysisTO:   VerticalAnalysisThreeTO;
}

export interface HorizontalAnalysisThreeTO {
  invoiceBilling:  InvoiceIssuedTO[];
  invoiceEmployee: InvoiceEmployeeTO[];
  invoicePayment:  InvoiceIssuedTO[];
  invoiceTax:      InvoiceTaxTO[];
}

export interface InvoiceIssuedTO {
  month: string;
  total: number;
  year:  number;
}

export interface InvoiceEmployeeTO {
  employeeGrowth: number;
  growth:         number;
  year:           number;
}

export interface InvoiceTaxTO {
  cofins: number;
  icms:   number;
  ipi:    number;
  month:  string;
  pis:    number;
  year:   number;
}

export interface VerticalAnalysisThreeTO {
  invoiceBilling: InvoiceVerticalTO[];
  invoicePayment: InvoiceVerticalTO[];
}

export interface InvoiceVerticalTO {
  cnpj:  string;
  name:  string;
  total: number;
}

export interface SpedAnalysisTO {
  analysis:           AnalysisTO[];
  cnpj:               string;
  horizontalAnalysis: HorizontalAnalysisFourTO[];
}

export interface AnalysisTO {
  date:              string;
  financialAnalysis: FinancialAnalysisTO;
  verticalAnalysis:  VerticalAnalysisFourTO[];
}

export interface FinancialAnalysisTO {
  balance:           BalanceTO;
  cashConversion:    CashConversionTO;
  dupont:            DupontTO;
  operationalMargin: OperationalMarginTO;
}

export interface BalanceTO {
  availabilities:     number;
  cclFormula:         string;
  cclResult:          number;
  currentAssets:      number;
  currentLiabilities: number;
  dlFormula:          string;
  dlNoFormula:        string;
  dlNoResult:         number;
  dlResult:           number;
  dlRoFormula:        string;
  dlRoNoFormula:      string;
  dlRoNoResult:       string;
  dlRoResult:         string;
  longTermDebt:       number;
  operationValue:     number;
  operationalResult:  number;
  shortTermDebt:      number;
}

export interface CashConversionTO {
  accountsPayable: number;
  billsToReceive:  number;
  cccFormula:      string;
  cccResult:       string;
  cmv:             number;
  grossReceipt:    number;
  imeFormula:      string;
  imeResult:       string;
  pmpFormula:      string;
  pmpResult:       string;
  pmrFormula:      string;
  pmrResult:       string;
  purchaseFormula: string;
  purchases:       number;
  stock:           number;
}

export interface DupontTO {
  active:          number;
  gaFormula:       string;
  gaResult:        string;
  leverageFormula: string;
  leverageResult:  string;
  liquidEquity:    number;
  liquidProfit:    number;
  liquidReceipt:   number;
  mlFormula:       string;
  mlResult:        string;
  roeFormula:      string;
  roeResult:       string;
}

export interface OperationalMarginTO {
  liquidReceipt:     number;
  moFormula:         string;
  moResult:          string;
  operationalResult: number;
}

export interface VerticalAnalysisFourTO {
  code:                   string;
  codeDescription:        string;
  codeLevel:              number;
  codeSynthetic:          string;
  endValue:               number;
  endValueSituation:      string;
  percent:               string;
}

export interface HorizontalAnalysisFourTO {
  code: string;
  codeDescription: string;
  codeLevel: number;
  codeSynthetic: string;
  endValue: number;
  endValueSituation: string;
  percentCurrentPeriod: string;
  percentPreviousPeriod: string;
}

export interface OperationsTO {
  id: number;
  operation: CompanyOperationStatus;
  operationDate: Date;
  user: UserSaasAuthenticated;
}
