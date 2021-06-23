import React from "react";
import { Renderer } from "@k8slens/extensions";
import { IstioVsDetails } from "./details";

export default class ModulesStylingExtension extends Renderer.LensExtension {
  kubeObjectDetailItems = [
    {
      kind: "VirtualService",
      apiVersions: ["networking.istio.io/v1alpha3"],
      priority: 2,
      components: {
        Details: (
          props: Renderer.Component.KubeObjectDetailsProps<Renderer.K8sApi.Namespace>
        ) => <IstioVsDetails {...props} />,
      },
    },
  ];

  async onActivate() {}
}
