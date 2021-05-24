import "react-table";

declare module "react-table" {
  // take this file as-is, or comment out the sections that don't apply to your plugin configuration
  export interface TableOptions extends Record<string, any> {}
}
