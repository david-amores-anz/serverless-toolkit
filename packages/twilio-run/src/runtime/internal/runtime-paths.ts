import {
  fsHelpers,
  ServerlessResourceConfigWithFilePath,
} from '@anzx/serverless-api';
import { SearchConfig } from '@anzx/serverless-api/dist/utils';

export type RouteInfo = {
  functions: ServerlessResourceConfigWithFilePath[];
  assets: ServerlessResourceConfigWithFilePath[];
};

export async function getFunctionsAndAssets(
  baseDir: string,
  config?: SearchConfig
): Promise<RouteInfo> {
  let { functions, assets } = await fsHelpers.getListOfFunctionsAndAssets(
    baseDir,
    config
  );
  return { functions, assets };
}
