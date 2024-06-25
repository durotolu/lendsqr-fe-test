interface MetaData {
  code: string;
  tier: string;
  accountNumber: string;
  accountBalance: string;
  bank: string;
  dateJoined: string;
  status: string;
  loans: boolean;
  savings: boolean;
  organization: string;
}

interface PersonalInformation {
  fullName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  gender: string;
  maritalStatus: string;
  childCount: string;
  residenceType: string;
}

interface EducationAndEmployment {
  educationLevel: string;
  employmentStatus: string;
  employmentSector: string;
  employmentDuration: string;
  officeEmail: string;
  monthlyIncome: string;
  loanRepayment: string;
}

interface Socials {
  twitter: string;
  facebook: string;
  instagram: string;
}

interface Guarantor {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  relationship: string;
}

export default interface UserItem {
  id: string;
  metaData: MetaData;
  personalInformation: PersonalInformation;
  educationAndEmployment: EducationAndEmployment;
  socials: Socials;
  guarantor: Guarantor[];
}
