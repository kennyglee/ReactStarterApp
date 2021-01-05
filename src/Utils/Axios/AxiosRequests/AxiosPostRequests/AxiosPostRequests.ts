import { AxiosResponse } from "axios";
import { ISession } from "@Stores";
import { CREATE_USER_API } from "@Constants";
import { AxiosInstance } from "@Utils";

export async function authenticate(
  username: string,
  password: string,
): Promise<AxiosResponse<ISession>> {
  return await AxiosInstance.post(CREATE_USER_API, { username, password });
}
