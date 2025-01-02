declare module "*.json";
declare module "*.svg";

// window objects from rv & sonic
declare global {
  interface Window {
    newrelic: any;
  }
  function encodeURIComponent(uriComponent: unknown): string;
}
interface Sizes {
  [key: string]: {
    icon: string;
    number: string;
    gap: string;
  };
}

export default Sizes;
