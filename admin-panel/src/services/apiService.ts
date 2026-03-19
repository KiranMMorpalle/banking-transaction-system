import { AxiosInstanceService } from "@kiranmmorpalle/common-types";
import constant from "../constant";

export const apiService = new AxiosInstanceService(constant.backendAPIUrl);
