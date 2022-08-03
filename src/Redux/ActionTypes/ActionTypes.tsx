import { SettingsData, UserData } from "../../Services/Database/DataType";

export const STORING: string = "STORING";
export const SETTING: string = "SETTING";
export const MODAL: string = "MODAL";
export const SEARCHING: string = "SEARCHING";
export const LOADING: string = "LOADING";

export interface ActionStoreData {
  type: string;
  payload: UserData[];
}

export interface ActionSettings {
  type: string;
  payload: SettingsData;
}

export interface ActionModal {
  type: string;
  payload: number;
}

export interface ActionSearch {
  type: string;
  payload: UserData[];
}

export interface ActionLoad {
  type: string;
  payload: boolean;
}
