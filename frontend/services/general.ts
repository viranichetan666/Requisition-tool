import { apiRoutes } from ".";
import axiosClient from "./config/axiosClient";

const getTest = ({ queryKey }: any): Promise<any> => {
  const [, params = {}] = queryKey;
  return axiosClient.get(apiRoutes.test, {
    params,
  });
};

export { getTest };
