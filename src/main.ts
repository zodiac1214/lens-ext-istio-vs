import { LensMainExtension } from "@k8slens/extensions";
import { opticalPreferencesStore } from "./pref-store";

export default class OpticalMainExtension extends LensMainExtension {
  async onActivate() {
    await opticalPreferencesStore.loadExtension(this);
    console.log('Optical activated');
  }
  async onDeactivate() {
    console.log('Optical deactivated');
  }
}
