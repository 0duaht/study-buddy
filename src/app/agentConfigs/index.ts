import { AllAgentConfigsType } from "@/app/types";
import frontDeskAuthentication from "./frontDeskAuthentication";
import customerServiceRetail from "./customerServiceRetail";
import simpleExample from "./simpleExample";
import studyBuddy from "./studyBuddy";

export const allAgentSets: AllAgentConfigsType = {
  studyBuddy,
};

export const defaultAgentSetKey = "studyBuddy";
