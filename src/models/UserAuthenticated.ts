import { creditApplicationFlowUserGuideTO, domainEnum, identificationStateEnum, operationAreaRole, operationAreaRoleSaas,
  permissionAuthorityTO, UserIntensity } from "../enums";

export interface FormAuth {
  username: string;
  password: string;
}

export interface FormRegister {
  cpf: string;
  email: string;
  name: string;
  password: string;
  phone: string;
}

export interface FormRegisterOrganization {
  organizationName: string;
  organizationCnpj: string;
  organizationEmail: string;
  organizationPhone: string;
  userName: string;
  userCpf: string;
  password: string;
}

export interface RegisterForm {
  codeCountryPhone: string;
  cpf: string;
  email: string;
  intensity: UserIntensity;
  name: string;
  password: string;
  phone: string;
}

export interface FormConfirmCode {
  username: string;
  confirmationCode: string;
}

export interface FormResendCode {
  username: string;
}

export interface RefreshToken {
  email: string;
  refreshToken: string;
}

export interface UserAuthenticated {
  address?: AddressTO;
  bankAccounts?: BankAccountsTO[];
  codeCountryPhone: string;
  cpf: string;
  email: string;
  hasRating: boolean;
  id: number;
  identificationState: identificationStateEnum;
  intensity: UserIntensity;
  image: string;
  name: string;
  phone: string;
  refreshToken: string;
  role: Role;
  token: string;
  totalCommissionReceivable: number;
  userGuide: UserGuideTO;
  enabled: boolean;
  created: string;
  confirmedEmail: boolean;
  confirmedPhone: boolean;
  completedQuestionnaire: boolean;
}

export interface UserSaasAuthenticated {
  apiKey: string;
  cpf: string;
  email: string;
  email_verified: boolean;
  id: number;
  organization_id: number;
  image: string;
  sub: string;
  name: string;
  phone_number: string;
  phone_number_verified: boolean;
  refreshToken: string;
  role: Role;
  token: string;
  //created: string;
}

export interface AddressTO {
  id: number;
  address1?: string;
  address2?: string;
  borderMunicipality?: string;
  buildingType?: string;
  codeCountry?: string;
  codeMunicipality?: string;
  collectiveBuilding?: boolean;
  country?: string;
  deliveryRestriction?: boolean;
  formattedAddress?: string;
  latestAddress?: boolean;
  latitude?: number;
  longitude?: number;
  microRegion?: string;
  mregion?: string;
  municipality?: string;
  neighborhood?: string;
  number?: string;
  originalNeighborhood?: string;
  precision?: string;
  region?: string;
  registryUf?: string;
  residentialAddress?: boolean;
  rfPhones: Array<string>;
  uf?: string;
  zip?: string;
}

export interface BankAccountsTO {
  bankingAgency: string;
  bankingCc: string;
  bankingInstitution: string;
  enable: boolean;
}

export interface Role {
  id: number;
  authorities: Array<AuthorityTO>;
  code: string;
  description: string;
  name: string;
  operationArea: operationAreaRole;
  stringAuthorities: Array<string>;
}

export interface RoleSaas {
  id: number;
  description: string;
  name: string;
  operationArea: operationAreaRoleSaas;
}

export interface AuthorityTO {
  permission: permissionAuthorityTO;
  id: number;
  domainDetail: DomainDetailTO;
}

export interface DomainDetailTO {
  id: number;
  description: string;
  domain: domainEnum;
}

export interface UserGuideTO {
  addCompanyAudio: boolean;
  avalAudio: boolean;
  completed: boolean;
  creditApplicationFlow: creditApplicationFlowUserGuideTO;
  discountAudio: boolean;
  generalCompany: boolean;
  id: number;
  imAudio: boolean;
  reAudio: boolean;
}

export interface ResetPasswordType {
  email: string;
  password: string;
}

export interface UserTO {
  address:                   AddressTO;
  bankAccounts:              BankAccountsTO[];
  cpf:                       string;
  created:                   string;
  email:                     string;
  enabled:                   boolean;
  hasRating:                 boolean;
  id:                        number;
  identificationState:       string;
  image:                     string;
  name:                      string;
  phone:                     string;
  role:                      Role;
  totalCommissionReceivable: number;
}
