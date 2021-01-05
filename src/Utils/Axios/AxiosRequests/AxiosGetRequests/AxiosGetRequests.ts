import { AxiosResponse } from "axios";
import { AxiosInstance } from "@Utils";
import { FETCH_USER_API } from "@Constants";

//example
export async function getfeed(): Promise<AxiosResponse<any>> {
  return await AxiosInstance.get(FETCH_USER_API);
}
