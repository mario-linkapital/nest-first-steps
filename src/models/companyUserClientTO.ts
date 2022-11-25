import { DocumentStateEnum } from "../enums";
import {DocumentMetadataTO} from "./companyDocument";

export interface EconomicGroupUserTO {
  companies: CompanyUserClientTO[];
  created: string,
  economicRiskGroups: EconomicRiskGroupTO;
  id: number,
  name: string;
}

export interface EconomicRiskGroupTO {
  approved:             boolean;
  created:              string;
  description:          string;
  document:             string;
  documents:            DocumentMetadataTO[];
  id:                   number;
  inEconomicGroup:      boolean;
  manuallyAddedToGroup: boolean;
  owner:                boolean;
  parentDocument:       string;
  socialReason:         string;
}

export interface CompanyUserClientTO {
  authorizations: Authorizations[];
  avatarColor?: string;
  fullName?: string;
  economicGroupId?: number;
  billingLastThreeYearsState: DocumentStateEnum;
  cnpj: string;
  companyBillingStatementState: DocumentStateEnum;
  completedQuestionnaire: boolean;
  created: string;
  creditRequested: number | null;
  estimatedBilling: string;
  fantasyName: string;
  hasAccompanimentNF: boolean;
  hasInvoices: boolean;
  hasOffer: boolean;
  id: number;
  irpfState: DocumentStateEnum;
  latitude: number;
  longitude: number;
  resourceDestination: string;
  socialReason: string;
  spedBalanceState: DocumentStateEnum;
  spedBalanceteState: DocumentStateEnum;
  economicGroup: EconomicRiskGroupTO;
}

export interface OrganizationSaasCompanyTO {
  fantasyName?: string;
  socialReason: string;
  cnpj: string;
  openingDate: string;
  registrationSituationDate: string;
  registrationSituation: string;
  grossBilling: number;
  socialCapital: number;
  companySize: string;
  email: string;
  phones: string;
  id?: number;
  userId: number;
}

export interface OrganizationSaasUserTO {
  email: string;
  id: number;
  username: string;
  tenant: number;
}

export interface OrganizationSaasRolTO {
  id: number;
  name: string;
}

export interface OperationSaasTO {
  operation: string;
  operationDate: string;
  companyCnpj: string;
  id?: number;
  organizationId: number;
  userId: number;
}

export interface SubMenuItem {
  menuTitle: string;
  pageTitle: string;
  routerLink: string;
  icon: string;
}

export interface DocumentNomenclature {
  description: string;
  stage: 'ANALYSIS' | 'FORMALIZATION';
  extensions: Array<string>;
  id?: number;
  descriptionState: any;
  state: CompanyBankNomenclatureState;
  directories: Array<Directories>;
  nomenclatureUrgencies: Array<Urgency>;
  hasDocument?: boolean;
  partnersBank?: Array<PartnerBank>;
}

export interface PartnerBank {
  id?: number;
  days: number;
  name: string;
  areas: Array<number>;
  //bankNomenclatures?: Array<DocumentNomenclature>;
}

export interface Urgency {
  area: number;
  id?: number;
  urgency: 'RED' | 'YELLOW';
}

export interface Directories {
  id: number;
  name: string;
  ext: string;
  url: string;
  type: string;
}

export interface Authorizations {
  cpf: string;
  email: string;
  id?: number;
  name: string;
  state: AuthorizationState;
  type: AutorizationType;
}

export type AuthorizationState =
  | 'ACCEPTED'
  | 'CANCELLED'
  | 'PROGRESS'
  | 'REJECTED';

export type AutorizationType = 'OWNER' | 'NFE_CERTIFICATE';

export type CompanyBankNomenclatureState =
  | 'PENDING'
  | 'ANALYSIS'
  | 'APPROVED'
  | 'REJECTED';
