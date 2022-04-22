import { ORDER_DATE } from "../config/app.config";

//set Date with given hours and minutes
export const setTime = (hour: number, min: number) => {
  return new Date(new Date(ORDER_DATE).setHours(hour, min, 0));
};

export const setJWTExpiryTime = (expireIn: number) => {
  return Math.floor(Date.now() / 1000) + expireIn;
};
