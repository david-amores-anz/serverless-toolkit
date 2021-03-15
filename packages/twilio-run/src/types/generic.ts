import { EnvironmentVariables } from '@anzx/serverless-api';

export type EnvironmentVariablesWithAuth = EnvironmentVariables & {
  ACCOUNT_SID?: string;
  AUTH_TOKEN?: string;
};
