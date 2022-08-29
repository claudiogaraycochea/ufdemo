import ICustomer from "./Customer";

export default interface IRootState {
  items: ICustomer[];
  notifications: any;
}