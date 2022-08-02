import { UserData } from "../../Services/Database/DataType";

export const STORING: string = "STORING";
export const SETTING: string = "SETTING";
export const MODAL: string = "MODAL";
export const SEARCHING: string = "SEARCHING";

export interface Action {
  type: string;
  payload: number | string | boolean | UserData | UserData[];
}
