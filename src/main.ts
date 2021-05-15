import { LensMainExtension } from "@k8slens/extensions";

export default class OpticalMainExtension extends LensMainExtension {
  async onActivate() {
    console.log("Istio VS extention activated");
  }
  async onDeactivate() {
    console.log("Istio VS extention deactivated");
  }
}
