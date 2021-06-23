import { Renderer } from "@k8slens/extensions";

export default class OpticalMainExtension extends Renderer.LensExtension {
  async onActivate() {
    console.log("Istio VS extention activated");
  }
  async onDeactivate() {
    console.log("Istio VS extention deactivated");
  }
}
