import { gql } from "@apollo/client";

export const GET_LOAN_PRODUCTS = gql`
  query GetLoanProducts {
    loanProducts {
      id
      name
      interestRate
      maximumAmount
    }
  }
`;

export const GET_LOAN_APPLICATIONS = gql`
  query GetLoanApplications {
    loanApplications {
      id
      fullName
      email
      loanAmount
      loanPurpose
    }
  }
`;
