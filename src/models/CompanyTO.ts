import { ProductAnalysisDTO, ProductAnalysisRTO } from './companyDocument';
import { BankOperationTO, ProductAnalysisITO } from './data.company';
import { ProductAnalysisATO } from './data.company';

export interface CompanyTO {
    productAnalysisA: ProductAnalysisATO;
    productAnalysisD: ProductAnalysisDTO;
    productAnalysisI: ProductAnalysisITO;
    productAnalysisR: ProductAnalysisRTO;
}
  export interface ProductAnalysisA {
    address:                     Address;
    affiliates:                  Affiliate[];
    age:                         number;
    bankOperations:              BankOperationTO[];
    beneficiaries:               Beneficiary[];
    cafir:                       ProductAnalysisACafir;
    ceis:                        Cei[];
    cnaes:                       Cnae[];
    cneps:                       Cnep[];
    cnjCnias:                    CnjCnia[];
    cnpj:                        PuneHedgehog;
    companiesRelated:            Affiliate[];
    companyClosingPropensity:    string;
    companySize:                 string;
    creditsInformation:          CreditsInformation[];
    creditsInformationMethodK:   CreditsInformationMethodK[];
    criCraDebentures:            CriCraDebenture[];
    crsfns:                      Crsfn[];
    dateRegistrationSituation:   PuneHedgehog;
    dateSpecialSituation:        PuneHedgehog;
    debitPgfnDau:                DebitPgfnDau;
    deliveryPropensity:          PuneHedgehog;
    ecommercePropensity:         PuneHedgehog;
    employeeGrowths:             EmployeeGrowth[];
    employees:                   Employee[];
    exEmployees:                 Employee[];
    exports:                     Port[];
    fantasyName:                 PuneHedgehog;
    financialActivity:           FinancialActivity;
    grossBilling:                number;
    heavyVehicleInfo:            HeavyVehicleInfo;
    ibge:                        Ibge;
    id:                          number;
    imports:                     Port[];
    internationalLists:          InternationalList[];
    jucespDocuments:             JucespDocument[];
    judicialProcess:             JudicialProcess;
    legalNatureCode:             PuneHedgehog;
    legalNatureDescription:      PuneHedgehog;
    mainCnae:                    Cnae;
    openingDate:                 string;
    partners:                    Partner[];
    passiveIISS:                 boolean;
    personPartners:              PersonPartner[];
    procon:                      Procon;
    properties:                  Propert[];
    protestInformation:          ProtestInformation;
    registrationSituation:       string;
    registrationSituationReason: PuneHedgehog;
    simpleNational:              SimpleNational;
    sintegraInscriptions:        SintegraInscription[];
    socialCapital:               number;
    socialReason:                PuneHedgehog;
    specialSituation:            PuneHedgehog;
    suframa:                     Suframa;
    taxHealth:                   TaxHealth;
    workMtes:                    WorkMte[];
  }

  export interface Address {
    address1:             PuneHedgehog;
    address2:             PuneHedgehog;
    borderMunicipality:   PuneHedgehog;
    buildingType:         PuneHedgehog;
    codeCountry:          PuneHedgehog;
    codeMunicipality:     PuneHedgehog;
    collectiveBuilding:   boolean;
    country:              PuneHedgehog;
    deliveryRestriction:  boolean;
    formattedAddress:     PuneHedgehog;
    id:                   number;
    latestAddress:        boolean;
    latitude:             number;
    longitude:            number;
    microRegion:          PuneHedgehog;
    mregion:              PuneHedgehog;
    municipality:         PuneHedgehog;
    neighborhood:         PuneHedgehog;
    number:               PuneHedgehog;
    originalNeighborhood: PuneHedgehog;
    precision:            PuneHedgehog;
    region:               PuneHedgehog;
    registryUf:           PuneHedgehog;
    residentialAddress:   boolean;
    rfPhones:             PuneHedgehog[];
    uf:                   PuneHedgehog;
    zip:                  PuneHedgehog;
  }

  export enum PuneHedgehog {
    String = "string",
  }

  export interface Affiliate {
    cnpj:                   PuneHedgehog;
    id:                     number;
    municipality:           PuneHedgehog;
    openingDate:            string;
    registrationSituation?: string;
    socialReason:           PuneHedgehog;
    uf:                     PuneHedgehog;
    descriptionCnae?:       PuneHedgehog;
  }

  export interface BankOperation {
    amortizationPeriod: number;
    contractedDate:     string;
    contractedValue:    number;
    financialAgent:     PuneHedgehog;
    financialCost:      PuneHedgehog;
    gracePeriod:        number;
    id:                 number;
    modified:           string;
    product:            PuneHedgehog;
    status:             string;
    tax:                number;
    type:               PuneHedgehog;
    uf:                 PuneHedgehog;
  }

  export interface Beneficiary {
    dead:             boolean;
    document:         PuneHedgehog;
    grade:            number;
    gradeQsa:         number;
    id:               number;
    name:             PuneHedgehog;
    participation:    number;
    participationQsa: number;
  }

  export interface ProductAnalysisACafir {
    propertiesRural:      PropertiesRural[];
    quantityCondominiums: number;
    quantityHolder:       number;
    totalArea:            number;
  }

  export interface PropertiesRural {
    condominium:  PuneHedgehog;
    municipality: PuneHedgehog;
    name:         PuneHedgehog;
    nirf:         PuneHedgehog;
    type:         PuneHedgehog;
    uf:           PuneHedgehog;
    area?:        number;
    id?:          number;
  }

  export interface Cei {
    endSanctionDate:     string;
    id:                  number;
    informationDate:     string;
    informationEntity:   PuneHedgehog;
    initSanctionDate:    string;
    legalSubstantiation: PuneHedgehog;
    organComplement:     PuneHedgehog;
    processNumber:       PuneHedgehog;
    sanction:            PuneHedgehog;
    sanctioningEntity:   PuneHedgehog;
    ufSanctioningEntity: PuneHedgehog;
  }

  export interface Cnae {
    businessActivity:     PuneHedgehog;
    code:                 PuneHedgehog;
    description:          PuneHedgehog;
    id:                   number;
    sector:               string;
    physicalProductions?: PhysicalProduction[];
  }

  export interface PhysicalProduction {
    codeDescription:                         PuneHedgehog;
    date:                                    string;
    fixedBaseIndexWithoutSeasonalAdjustment: FixedBaseIndexWithoutSeasonalAdjustment;
    id:                                      number;
    indexAccumulatedLast12Months:            FixedBaseIndexWithoutSeasonalAdjustment;
    monthlyIndex:                            FixedBaseIndexWithoutSeasonalAdjustment;
    monthlyPercentageChange:                 FixedBaseIndexWithoutSeasonalAdjustment;
    percentageChangeAccumulatedLast12Months: FixedBaseIndexWithoutSeasonalAdjustment;
    percentageChangeAccumulatedYear:         FixedBaseIndexWithoutSeasonalAdjustment;
    territorialLevel:                        PuneHedgehog;
    yearToDateIndex:                         FixedBaseIndexWithoutSeasonalAdjustment;
  }

  export interface FixedBaseIndexWithoutSeasonalAdjustment {
    id:          number;
    measureUnit: PuneHedgehog;
    name:        PuneHedgehog;
    value:       number;
  }

  export interface Cnep {
    endSanctionDate:     string;
    id:                  number;
    initSanctionDate:    string;
    penaltyValue:        number;
    processNumber:       PuneHedgehog;
    sanction:            PuneHedgehog;
    sanctioningEntity:   PuneHedgehog;
    ufSanctioningEntity: PuneHedgehog;
  }

  export interface CnjCnia {
    descriptionEntity: PuneHedgehog;
    id:                number;
    processNumber:     PuneHedgehog;
    registrationDate:  string;
    relatedIssues:     PuneHedgehog[];
    sphere:            PuneHedgehog;
    uf:                PuneHedgehog;
    value:             number;
  }

  export interface CreditsInformation {
    assumedObligation:               number;
    cnpjIfRequester:                 PuneHedgehog;
    consultDate:                     PuneHedgehog;
    countInstitution:                number;
    countOperation:                  number;
    countOperationDisagreement:      number;
    countOperationSubJudice:         number;
    created:                         string;
    find:                            boolean;
    id:                              number;
    operations:                      Operation[];
    percentDocumentProcessed:        number;
    percentVolumeProcessed:          number;
    responsibilityTotalDisagreement: number;
    responsibilityTotalSubJudice:    number;
    startRelationshipDate:           string;
    vendorIndirectRisk:              number;
  }

  export interface Operation {
    earnings:          Earning[];
    exchangeVariation: PuneHedgehog;
    id:                number;
    modality:          PuneHedgehog;
  }

  export interface Earning {
    code:  PuneHedgehog;
    id:    number;
    value: number;
  }

  export interface CreditsInformationMethodK {
    amountInstitutions: number;
    amountOperations:   number;
    consultDate:        PuneHedgehog;
    expiredVolume:      number;
    sumaries:           Sumary[];
  }

  export interface Sumary {
    productCode:            PuneHedgehog;
    productName:            PuneHedgehog;
    total:                  number;
    totalBetween181and360d: number;
    totalBetween361and720d: number;
    totalBetween91and180d:  number;
    totalGreaterThan720d:   number;
    totalLessThan90d:       number;
  }

  export interface CriCraDebenture {
    code:                    PuneHedgehog;
    debtorIssuer:            PuneHedgehog;
    dueDate:                 string;
    id:                      number;
    indicativeValue:         number;
    insuranceSector:         PuneHedgehog;
    issueDate:               string;
    puParDebenture:          number;
    remuneration:            PuneHedgehog;
    seriesIssue:             PuneHedgehog;
    seriesVolumeOnIssueDate: number;
    type:                    string;
  }

  export interface Crsfn {
    agreedNumber:   PuneHedgehog;
    part:           PuneHedgehog;
    processNumber:  PuneHedgehog;
    resourceNumber: PuneHedgehog;
    resourceType:   PuneHedgehog;
  }

  export interface DebitPgfnDau {
    debitPgfns:  DebitPgfn[];
    id:          number;
    totalDebits: number;
  }

  export interface DebitPgfn {
    debit:             number;
    id:                number;
    inscriptionNumber: PuneHedgehog;
    nature:            PuneHedgehog;
  }

  export interface EmployeeGrowth {
    employeeGrowth: number;
    growth:         number;
    id?:            number;
    year:           number;
  }

  export interface Employee {
    admissionDate:   string;
    birthDate:       string;
    cpf:             PuneHedgehog;
    id:              number;
    name:            PuneHedgehog;
    resignationYear: PuneHedgehog;
  }

  export interface Port {
    id:    number;
    value: PuneHedgehog;
    year:  number;
  }

  export interface FinancialActivity {
    enablementDate:      string;
    enablementNumber:    PuneHedgehog;
    enablementSituation: PuneHedgehog;
    id:                  number;
    queryDate:           string;
    segment:             PuneHedgehog;
  }

  export interface HeavyVehicleInfo {
    between2And5:       number;
    between5And10:      number;
    groupBetween2And5:  number;
    groupBetween5And10: number;
    groupOver10:        number;
    groupUpTo1:         number;
    heavyVehicles:      number;
    heavyVehiclesGroup: number;
    id:                 number;
    over10:             number;
    upto1:              number;
    vehicles:           Vehicle[];
  }

  export interface Vehicle {
    antt:           boolean;
    carPlate:       PuneHedgehog;
    fuel:           PuneHedgehog;
    id:             number;
    model:          PuneHedgehog;
    productionYear: number;
    renavam:        PuneHedgehog;
    type:           PuneHedgehog;
    uf:             PuneHedgehog;
  }

  export interface Ibge {
    economicStatistics:        { [key: string]: number };
    geographicStatistics:      GeographicStatistics;
    id:                        number;
    workPerformanceStatistics: WorkPerformanceStatistics;
  }

  export interface GeographicStatistics {
    demographicDensity:                number;
    demographicDensityYear:            number;
    estimatedPopulation:               number;
    estimatedPopulationLastCensus:     number;
    estimatedPopulationLastCensusYear: number;
    estimatedPopulationYear:           number;
    id:                                number;
  }

  export interface WorkPerformanceStatistics {
    averageSalary:                      number;
    averageSalaryYear:                  number;
    busyPeople:                         number;
    busyPeopleYear:                     number;
    id:                                 number;
    occupiedPopulation:                 number;
    occupiedPopulationYear:             number;
    populationIncomeMonthlyNominal:     number;
    populationIncomeMonthlyNominalYear: number;
  }

  export interface InternationalList {
    id:        number;
    name:      PuneHedgehog;
    queryDate: string;
  }

  export interface JucespDocument {
    ext:  PuneHedgehog;
    id:   number;
    name: PuneHedgehog;
    type: Type;
    url:  PuneHedgehog;
  }

  export enum Type {
    ArchivedDocuments = "ARCHIVED_DOCUMENTS",
  }

  export interface JudicialProcess {
    id:                        number;
    judicialProcessQuantities: JudicialProcessQuantity[];
    totalActiveValue:          number;
    totalOthersValue:          number;
    totalPassiveValue:         number;
    totalValue:                number;
  }

  export interface JudicialProcessQuantity {
    id:                  number;
    quantityActive:      number;
    quantityActivePart:  number;
    quantityOthers:      number;
    quantityPassivePart: number;
    quantityTotal:       number;
    type:                PuneHedgehog;
  }

  export interface Partner {
    criminalProcess:              PuneHedgehog[];
    dead:                         boolean;
    document:                     PuneHedgehog;
    id:                           number;
    levelPreparation:             PuneHedgehog;
    levelPreparationRF:           PuneHedgehog;
    name:                         PuneHedgehog;
    originCountry:                PuneHedgehog;
    participation:                number;
    participationRF:              number;
    participationSocialCapital:   number;
    participationSocialCapitalRF: number;
    qualification:                PuneHedgehog;
    qualificationRF:              PuneHedgehog;
  }

  export interface PersonPartner {
    age:                     number;
    birthDate:               string;
    cafir:                   PersonPartnerCafir;
    cns:                     PuneHedgehog;
    corporatesParticipation: CorporatesParticipation[];
    cpf:                     PuneHedgehog;
    dead:                    boolean;
    deadConfirmation:        boolean;
    deadDate:                number;
    debitMte:                DebitMte;
    debitPgfnDau:            DebitPgfnDau;
    debitPgfnDauValue:       PuneHedgehog;
    deficiency:              boolean;
    deficiencyType:          PuneHedgehog;
    disabilitiesBacens:      DisabilitiesBacen[];
    educationLevel:          PuneHedgehog;
    email:                   PuneHedgehog;
    fatherName:              PuneHedgehog;
    historicalCriminal:      HistoricalCriminal;
    historicalFunctional:    HistoricalFunctional[];
    id:                      number;
    inscriptionCpfDate:      PuneHedgehog;
    irpf:                    Irpf[];
    irpfDocuments:           JucespDocument[];
    irpfReceiptDocuments:    JucespDocument[];
    judicialProcess:         JudicialProcess;
    mainAddress:             Address;
    marriageRegime:          PuneHedgehog;
    motherCpf:               PuneHedgehog;
    motherName:              PuneHedgehog;
    name:                    PuneHedgehog;
    nis:                     PuneHedgehog;
    originCountry:           PuneHedgehog;
    otherAddresses:          Address[];
    phones:                  PuneHedgehog[];
    professionCbo:           PuneHedgehog;
    professionNeoway:        PuneHedgehog;
    properties:              Propert[];
    publicAgent:             boolean;
    quantityQsaUnique:       number;
    registerSituation:       PuneHedgehog;
    relationships:           Relationship[];
    sex:                     PuneHedgehog;
    situation:               PuneHedgehog;
    situationCpf:            PuneHedgehog;
    socialInscription:       PuneHedgehog;
    spouse?:                 PersonPartner;
  }

  export interface PersonPartnerCafir {
    id:                   number;
    propertiesRural:      PropertiesRural[];
    quantityCondominiums: number;
    quantityHolder:       number;
    totalArea:            number;
  }

  export interface CorporatesParticipation {
    businessActivityCnae:         PuneHedgehog;
    cnpj:                         PuneHedgehog;
    descriptionCnae:              PuneHedgehog;
    estimatedBilling:             PuneHedgehog;
    estimatedBillingGroup:        PuneHedgehog;
    id:                           number;
    levelPreparation:             PuneHedgehog;
    levelPreparationRF:           PuneHedgehog;
    municipality:                 PuneHedgehog;
    openingDate:                  string;
    participation:                number;
    participationRF:              number;
    participationSocialCapital:   number;
    participationSocialCapitalRF: number;
    qualification:                PuneHedgehog;
    qualificationRF:              PuneHedgehog;
    situation:                    PuneHedgehog;
    socialCapital:                PuneHedgehog;
    socialReason:                 PuneHedgehog;
    uf:                           PuneHedgehog;
  }

  export interface DebitMte {
    certificateType: PuneHedgehog;
    code:            PuneHedgehog;
    debitSituation:  PuneHedgehog;
    emissionDate:    string;
    id:              number;
    processes:       Process[];
  }

  export interface Process {
    id:                       number;
    infringementCapitulation: PuneHedgehog;
    infringementCategory:     PuneHedgehog;
    number:                   PuneHedgehog;
    situation:                PuneHedgehog;
  }

  export interface DisabilitiesBacen {
    duration:          number;
    id:                number;
    penalty:           PuneHedgehog;
    penaltyPeriodDate: string;
    publicationDate:   string;
  }

  export interface HistoricalCriminal {
    consultationDate: string;
    id:               number;
    protocol:         PuneHedgehog;
    situation:        PuneHedgehog;
    status:           PuneHedgehog;
  }

  export interface HistoricalFunctional {
    admissionDate: string;
    cnpj:          PuneHedgehog;
    dismissedDate: string;
    id:            number;
    months:        number;
    socialReason:  PuneHedgehog;
  }

  export interface Irpf {
    agency:           PuneHedgehog;
    availabilityDate: string;
    bank:             PuneHedgehog;
    id:               number;
    lot:              PuneHedgehog;
    statementStatus:  PuneHedgehog;
    yearExercise:     number;
  }

  export interface Propert {
    buildingData?:      PuneHedgehog;
    builtArea:          number;
    complement:         PuneHedgehog;
    evaluationValue:    number;
    groundArea:         number;
    id:                 number;
    municipality:       PuneHedgehog;
    neighborhood:       PuneHedgehog;
    neighborhoodNumber: PuneHedgehog;
    registerUf:         PuneHedgehog;
    registryNumber:     PuneHedgehog;
    street:             PuneHedgehog;
    uf:                 PuneHedgehog;
    zip:                PuneHedgehog;
    document?:          JucespDocument;
    ownerType?:         string;
    referenceProperty?: number;
    type?:              string;
  }

  export interface Relationship {
    cpf:         PuneHedgehog;
    description: PuneHedgehog;
    id:          number;
    name:        PuneHedgehog;
  }

  export interface Procon {
    groupPenaltyValue: number;
    name:              PuneHedgehog;
    proconGroups:      ProconGroup[];
    proconProcesses:   ProconProcess[];
    totalPenaltyValue: number;
    updateDate:        string;
  }

  export interface ProconGroup {
    cnpj:              PuneHedgehog;
    totalPenaltyValue: number;
  }

  export interface ProconProcess {
    penaltyValue:  number;
    processNumber: PuneHedgehog;
    status:        PuneHedgehog;
  }

  export interface ProtestInformation {
    analysis:          ProtestInformationAnalysis;
    created:           string;
    document:          PuneHedgehog;
    id:                number;
    protestRegistries: ProtestRegistry[];
    total:             number;
    totalError:        number;
  }

  export interface ProtestInformationAnalysis {
    activesByState:           ActivesBy;
    activesByYear:            ActivesBy;
    amountProtest:            number;
    amountRegistry:           number;
    firstProtest:             Protest;
    higherValueProtest:       Protest;
    protestEvolutionByMonths: ProtestEvolutionBy[];
    protestEvolutionByYears:  ProtestEvolutionBy[];
    protestsByArea:           ProtestsByArea[];
    totalValue:               number;
  }

  export interface ActivesBy {
    additionalProp1: number;
    additionalProp2: number;
    additionalProp3: number;
  }

  export interface Protest {
    assignorName: PuneHedgehog;
    consultDate:  string;
    value:        number;
  }

  export interface ProtestEvolutionBy {
    date:    PuneHedgehog;
    percent: PuneHedgehog;
    value:   PuneHedgehog;
  }

  export interface ProtestsByArea {
    amount:  number;
    area:    string;
    percent: PuneHedgehog;
    value:   number;
  }

  export interface ProtestRegistry {
    address:      PuneHedgehog;
    amount:       number;
    city:         PuneHedgehog;
    cityCode:     PuneHedgehog;
    cityCodeIbge: PuneHedgehog;
    code:         number;
    id:           number;
    municipality: PuneHedgehog;
    name:         PuneHedgehog;
    neighborhood: PuneHedgehog;
    phone:        PuneHedgehog;
    protests:     ProtestElement[];
    searchPeriod: PuneHedgehog;
    uf:           PuneHedgehog;
    updateDate:   PuneHedgehog;
  }

  export interface ProtestElement {
    area:          string;
    assignorName:  PuneHedgehog;
    consultDate:   string;
    dueDate:       string;
    hasConsent:    boolean;
    id:            number;
    key:           PuneHedgehog;
    presenterName: PuneHedgehog;
    value:         number;
  }

  export interface SimpleNational {
    id:              number;
    simei:           boolean;
    simeiDate:       string;
    simple:          boolean;
    simpleDate:      string;
    simpleIrregular: boolean;
  }

  export interface SintegraInscription {
    email:                     PuneHedgehog;
    id:                        number;
    phone:                     PuneHedgehog;
    regime:                    PuneHedgehog;
    registrationNumber:        PuneHedgehog;
    registrationSituation:     PuneHedgehog;
    registrationSituationDate: string;
    uf:                        PuneHedgehog;
  }

  export interface Suframa {
    expirationDate:        string;
    icms:                  PuneHedgehog;
    id:                    number;
    ipi:                   PuneHedgehog;
    pisCofins:             PuneHedgehog;
    registrationNumber:    PuneHedgehog;
    registrationSituation: PuneHedgehog;
  }

  export interface TaxHealth {
    cnds:      Cnd[];
    id:        number;
    taxHealth: PuneHedgehog;
  }

  export interface Cnd {
    certificateNumber: PuneHedgehog;
    document:          JucespDocument;
    emissionDate:      string;
    emitterName:       PuneHedgehog;
    expirationDate:    string;
    id:                number;
    situation:         PuneHedgehog;
  }

  export interface WorkMte {
    complement:             PuneHedgehog;
    fiscalActionYear:       number;
    id:                     number;
    municipality:           PuneHedgehog;
    neighborhood:           PuneHedgehog;
    provenanceDecisionDate: string;
    quantityWorkers:        number;
    uf:                     PuneHedgehog;
  }

  export interface ProductAnalysisD {
    avgReceiptTerm:       number;
    cnpj:                 PuneHedgehog;
    horizontalAnalysisTO: HorizontalAnalysisTO;
    nfeDuplicity:         JucespDocument[];
    verticalAnalysisTO:   VerticalAnalysisTO;
  }

  export interface HorizontalAnalysisTO {
    code: string;
    codeDescription: string;
    codeLevel: number;
    codeSynthetic: string;
    endValue: number;
    endValueSituation: string;
    percentCurrentPeriod: string;
    percentPreviousPeriod: string;
  }

  export interface HorizontalAnalysisTOInvoiceBilling {
    month:       PuneHedgehog;
    monthNumber: number;
    total:       number;
    year:        number;
  }

  export interface InvoiceTax {
    cofins:      number;
    icms:        number;
    ipi:         number;
    month:       PuneHedgehog;
    monthNumber: number;
    pis:         number;
    year:        number;
  }

  export interface VerticalAnalysisTO {
    code: string;
    codeDescription: string;
    codeLevel: number;
    codeSynthetic: string;
    endValue: number;
    endValueSituation: string;
    percent: string;
  }

  export interface VerticalAnalysisTOInvoiceBilling {
    cnpj:  PuneHedgehog;
    name:  PuneHedgehog;
    total: number;
  }

  export interface ProductAnalysisI {
    cnpj:               PuneHedgehog;
    personPartners:     Person[];
    personSpouses:      Person[];
    properties:         Propert[];
    propertiesRural:    Propert[];
    propertyGuarantees: Propert[];
  }

  export interface Person {
    age:                     number;
    birthDate:               string;
    cns:                     PuneHedgehog;
    corporatesParticipation: CorporatesParticipation[];
    cpf:                     PuneHedgehog;
    dead:                    boolean;
    deadConfirmation:        boolean;
    deadDate:                number;
    debitMte:                DebitMte;
    debitPgfnDau:            DebitPgfnDau;
    debitPgfnDauValue:       PuneHedgehog;
    deficiency:              boolean;
    deficiencyType:          PuneHedgehog;
    disabilitiesBacens:      DisabilitiesBacen[];
    educationLevel:          PuneHedgehog;
    email:                   PuneHedgehog;
    fatherName:              PuneHedgehog;
    historicalCriminal:      HistoricalCriminal;
    historicalFunctional:    HistoricalFunctional[];
    id:                      number;
    inscriptionCpfDate:      PuneHedgehog;
    irpf:                    Irpf[];
    irpfDocuments:           JucespDocument[];
    irpfReceiptDocuments:    JucespDocument[];
    judicialProcess:         JudicialProcess;
    mainAddress:             Address;
    marriageRegime:          PuneHedgehog;
    motherCpf:               PuneHedgehog;
    motherName:              PuneHedgehog;
    name:                    PuneHedgehog;
    nis:                     PuneHedgehog;
    originCountry:           PuneHedgehog;
    otherAddresses:          Address[];
    phones:                  PuneHedgehog[];
    professionCbo:           PuneHedgehog;
    professionNeoway:        PuneHedgehog;
    properties:              Propert[];
    propertiesRural:         Propert[];
    publicAgent:             boolean;
    quantityQsaUnique:       number;
    registerSituation:       PuneHedgehog;
    relationships:           Relationship[];
    sex:                     PuneHedgehog;
    situation:               PuneHedgehog;
    situationCpf:            PuneHedgehog;
    socialInscription:       PuneHedgehog;
    spouse:                  PuneHedgehog;
  }

  export interface ProductAnalysisR {
    analysis:           AnalysisElement[];
    cnpj:               PuneHedgehog;
    horizontalAnalysis: AlAnalysis[];
    spedBalances:       JucespDocument[];
  }

  export interface AnalysisElement {
    date:              string;
    financialAnalysis: FinancialAnalysis;
    verticalAnalysis:  AlAnalysis[];
  }

  export interface FinancialAnalysis {
    balance:           Balance;
    cashConversion:    CashConversion;
    dupont:            Dupont;
    operationalMargin: OperationalMargin;
  }

  export interface Balance {
    availabilities:     number;
    cclFormula:         PuneHedgehog;
    cclResult:          number;
    currentAssets:      number;
    currentLiabilities: number;
    dlFormula:          PuneHedgehog;
    dlNoFormula:        PuneHedgehog;
    dlNoResult:         number;
    dlResult:           number;
    dlRoFormula:        PuneHedgehog;
    dlRoNoFormula:      PuneHedgehog;
    dlRoNoResult:       PuneHedgehog;
    dlRoResult:         PuneHedgehog;
    longTermDebt:       number;
    operationValue:     number;
    operationalResult:  number;
    shortTermDebt:      number;
  }

  export interface CashConversion {
    accountsPayable: number;
    billsToReceive:  number;
    cccFormula:      PuneHedgehog;
    cccResult:       PuneHedgehog;
    cmv:             number;
    grossReceipt:    number;
    imeFormula:      PuneHedgehog;
    imeResult:       PuneHedgehog;
    pmpFormula:      PuneHedgehog;
    pmpResult:       PuneHedgehog;
    pmrFormula:      PuneHedgehog;
    pmrResult:       PuneHedgehog;
    purchaseFormula: PuneHedgehog;
    purchases:       number;
    stock:           number;
  }

  export interface Dupont {
    active:          number;
    gaFormula:       PuneHedgehog;
    gaResult:        PuneHedgehog;
    leverageFormula: PuneHedgehog;
    leverageResult:  PuneHedgehog;
    liquidEquity:    number;
    liquidProfit:    number;
    liquidReceipt:   number;
    mlFormula:       PuneHedgehog;
    mlResult:        PuneHedgehog;
    roeFormula:      PuneHedgehog;
    roeResult:       PuneHedgehog;
  }

  export interface OperationalMargin {
    liquidReceipt:     number;
    moFormula:         PuneHedgehog;
    moResult:          PuneHedgehog;
    operationalResult: number;
  }

  export interface AlAnalysis {
    code:                   PuneHedgehog;
    codeDescription:        PuneHedgehog;
    codeLevel:              number;
    codeSynthetic:          PuneHedgehog;
    endValue:               number;
    endValueSituation:      PuneHedgehog;
    percent?:               PuneHedgehog;
    percentCurrentPeriod?:  PuneHedgehog;
    percentPreviousPeriod?: PuneHedgehog;
  }
