import { AxiosResponse } from "axios";
import { AxiosInstance } from "@Utils";
import { UPDATE_USER_API } from "@Constants";

//example
export async function updateUser(): Promise<AxiosResponse<any>> {
  return await AxiosInstance.put(UPDATE_USER_API);
}
