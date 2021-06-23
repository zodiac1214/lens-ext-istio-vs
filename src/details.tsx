import { Renderer, Common } from "@k8slens/extensions";
import React from "react";

export class IstioVsDetails extends React.Component<
  Renderer.Component.KubeObjectDetailsProps<any>
> {
  render() {
    let components;
    return (
      <div>
        <Renderer.Component.DrawerItem name="Name">
          {this.props?.object?.metadata?.name || "-"}
        </Renderer.Component.DrawerItem>
        <Renderer.Component.DrawerItem name="Namespace">
          {this.props?.object?.metadata?.namespace || "-"}
        </Renderer.Component.DrawerItem>
        <Renderer.Component.DrawerItemLabels
          name="Labels"
          labels={this.props.object.getLabels()}
        />

        <Renderer.Component.DrawerItem name="Hosts">
          {this.props.object.spec.hosts.map((host: string) => {
            if (!host.includes("*")) {
              return (
                <div className={Common.Util.cssNames("PodContainerPort")}>
                  <span
                    title="Open in a browser"
                    onClick={() => Common.Util.openExternal(`https://${host}`)}
                  >
                    {host}
                  </span>
                </div>
              );
            }
          })}
        </Renderer.Component.DrawerItem>

        <Renderer.Component.DrawerItem name="Gateway">
          {this.props.object.spec.gateways}
        </Renderer.Component.DrawerItem>
      </div>
    );
  }
}
