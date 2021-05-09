import React from "react";
import { Component, K8sApi, LensRendererExtension } from '@k8slens/extensions';
import { IstioVsDetails } from "./istio-vs-details";

export default class ModulesStylingExtension extends LensRendererExtension {
  kubeObjectDetailItems = [
    {
      kind: "VirtualService",
      apiVersions: ["networking.istio.io/v1alpha3"],
      priority: 2,
      components: {
        Details: (props: Component.KubeObjectDetailsProps<K8sApi.Namespace>) => <IstioVsDetails {...props} />
      }
    }
  ]

  async onActivate() {
  }

}
