/* eslint-disable @typescript-eslint/no-explicit-any */
import { FEEDBACK } from "./constant";

export const showError = (hasErrors: any, feedBack: any) =>
  hasErrors && (feedBack === FEEDBACK.ALL || feedBack === FEEDBACK.ERROR);
export const showSuccess = (isValid: any, feedBack: any) =>
  isValid && (feedBack === FEEDBACK.ALL || feedBack === FEEDBACK.SUCCESS);
