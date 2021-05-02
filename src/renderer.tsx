import React from "react";
import { Component, LensRendererExtension } from '@k8slens/extensions';
import * as registries from '@k8slens/extensions/dist/src/extensions/registries';
import { FramePage } from "./page";
import { OpticalPreferenceHint, OpticalPreferenceInput } from "./optical-preferences";
import { opticalPreferencesStore } from "./pref-store";

export const Icon: React.FC<Component.IconProps> = props =>
  <Component.Icon {...props} material='camera' tooltip='Optical'/>;

export default class ModulesStylingExtension extends LensRendererExtension {
  clusterPages = [
    {
      title: "Optical",
      components: {
        Page: () => <FramePage extension={this}/>,
      }
    }
  ]

  clusterPageMenus: registries.ClusterPageMenuRegistration[] = [
    {
      title: "Optical",
      components: { Icon }
    }
  ];

  async onActivate() {
    await opticalPreferencesStore.loadExtension(this);
  }

  appPreferences = [
    {
      title: "Optical",
      components: {
        Input: () => <OpticalPreferenceInput preference={opticalPreferencesStore}/>,
        Hint: () => <OpticalPreferenceHint/>
      }
    }
  ];
}
