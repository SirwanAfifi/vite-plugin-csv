declare module "*.csv" {
  export default <{[key: string]: any}>[];
}
declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const Component: ComponentOptions;
  export default Component;
}
