export default interface IRoute {
  path: string;
  name: string;
  component: any;
  layout: any;
  props?: any;
}