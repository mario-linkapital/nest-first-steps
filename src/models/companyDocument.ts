import { directoryType } from "../enums";
import { AlAnalysis, FinancialAnalysis, HorizontalAnalysisTO, VerticalAnalysisTO } from "./CompanyTO";
import { AnalysisTO, HorizontalAnalysisThreeTO, VerticalAnalysisThreeTO } from "./data.company";

export interface DocumentCompanyTO {
    documentNf:     SpecialDocument;
    documentSpeds:  SpecialDocument[];
    documents:      CompanyDocumentNomenclatureTO[];
    otherDocuments: MetadataDocument[];
}

export interface SpecialDocument {
    created: string;
    exists:  boolean;
    year:    number;
}

export interface CompanyDocumentNomenclatureTO {
    descriptionState:     string;
    documentNomenclature: DocumentCompanyTODocumentNomenclature;
    documents:            DocumentDocument[];
    id:                   number;
    state:                string;
}

export interface DocumentCompanyTODocumentNomenclature {
    cnpjsRequired: string[];
    description:   string;
    extensions:    string[];
    id:            number;
    stage:         string;
    type:          DocumentCompanyTOTypes;
    urgency:       DocumentUrgencyEnum;
}

export enum DocumentStageEnum {
    ANALYSIS = 'ANALYSIS',
    FORMALIZATION = 'FORMALIZATION',
}

export enum DocumentUrgencyEnum {
    OPTIONAL = 'OPTIONAL',
    REQUIRED = 'REQUIRED',
}

export type DocumentCompanyTOTypes = 'COMPANY_BILLING_STATEMENT' | 'IRPF' | 'OTHERS' | 'SPED_BALANCE' | 'SPED_BALANCETE';

export enum DocumentCompanyTOTypesEnum {
    COMPANY_BILLING_STATEMENT = 'COMPANY_BILLING_STATEMENT',
    IRPF = 'IRPF',
    OTHERS = 'OTHERS',
    SPED = 'SPED',
    SPED_BALANCE = 'SPED_BALANCE',
    SPED_BALANCETE = 'SPED_BALANCETE',
    GENERIC_FILE = 'GENERIC_FILE',
}


export interface DocumentDocument {
    descriptionState: string;
    documentMetadata: MetadataDocument;
    id:               number;
    state:            string;
}

export interface MetadataDocument {
    created: string;
    ext:     string;
    id:      number;
    name:    string;
    url:     string;
}

export type DocumentTypes = 'ARCHIVED_DOCUMENTS' | 'BANK' | 'CASH_U_CERTIFICATE' | 'CND' | 'COMMENT' | 'COMPANY_BILLING_STATEMENT' | 'CREDIT_INFORMATION' | 'GENERIC' | 'GUARANTEE_PROPERTY' | 'IRPF' | 'NOTE_FISCAL'| 'PAYMENT_TICKET' | 'REGISTRATION_FORM' | 'SIGNED_CONTRACT' | 'SIMPLIFIED_CERTIFICATION' | 'SPED_BALANCE' | 'SPED_BALANCETE' | 'USER_IMAGE';

export enum DocumentTypesEnum {
    ARCHIVED_DOCUMENTS = 'ARCHIVED_DOCUMENTS',
    BANK = 'BANK',
    CASH_U_CERTIFICATE = 'CASH_U_CERTIFICATE',
    CND = 'CND',
    COMMENT = 'COMMENT',
    COMPANY_BILLING_STATEMENT = 'COMPANY_BILLING_STATEMENT',
    CREDIT_INFORMATION = 'CREDIT_INFORMATION',
    GENERIC = 'GENERIC',
    GUARANTEE_PROPERTY = 'GUARANTEE_PROPERTY',
    IRPF = 'IRPF',
    NOTE_FISCAL = 'NOTE_FISCAL',
    PAYMENT_TICKET = 'PAYMENT_TICKET',
    REGISTRATION_FORM = 'REGISTRATION_FORM',
    SIGNED_CONTRACT = 'SIGNED_CONTRACT',
    SIMPLIFIED_CERTIFICATION = 'SIMPLIFIED_CERTIFICATION',
    SPED_BALANCE = 'SPED_BALANCE',
    SPED_BALANCETE= 'SPED_BALANCETE',
    USER_IMAGE = 'USER_IMAGE',
}

export interface ProductAnalysisDTO {
    avgReceiptTerm: number;
    cnpj: string;
    horizontalAnalysisTO: HorizontalAnalysisThreeTO;
    nfeDuplicity: Array<DocumentMetadataTO>;
    verticalAnalysisTO: VerticalAnalysisThreeTO;
  }

export interface ProductAnalysisRTO {
    analysis: Array<AnalysisTO>;
    cnpj: string;
    horizontalAnalysis: Array<HorizontalAnalysisTO>;
    spedBalances: Array<DocumentMetadataTO>;
  }

  export interface DocumentMetadataTO {
    created: string;
    ext: string;
    id: number;
    name: string;
    type: directoryType;
    url: string;
  }

export interface Analysis {
    date:              string;
    financialAnalysis: FinancialAnalysis;
    verticalAnalysis:  AlAnalysis[];
}
