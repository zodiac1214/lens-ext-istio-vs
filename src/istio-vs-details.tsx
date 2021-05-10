import { Component, Util } from "@k8slens/extensions";
import React from "react";

export class IstioVsDetails extends React.Component<Component.KubeObjectDetailsProps<any>> {
  render() {
    console.log(this.props.object)
    let components;
    return (
      <div>
        <Component.DrawerItem name="Name" >
          { this.props?.object?.metadata?.name || "-"  }
        </Component.DrawerItem>
        <Component.DrawerItem name="Namespace" >
          { this.props?.object?.metadata?.namespace || "-"  }
        </Component.DrawerItem>
        <Component.DrawerItemLabels
          name="Labels"
          labels={this.props.object.getLabels()}
        />

        <Component.DrawerItem name="Hosts">
          {
            this.props.object.spec.hosts.map((host: string) => {
              if (! host.includes("*")) {
                return(
                  <div className={Util.cssNames("PodContainerPort")}>
                    <span title="Open in a browser" onClick={() => Util.openExternal(`https://${host}`) }>
                      {host}
                    </span>
                  </div>
                );
              }
            })
          }
        </Component.DrawerItem>

        <Component.DrawerTitle title="Gateway"/>
        <Component.Badge>{this.props.object.spec.gateways}</Component.Badge>
      </div>
    )
  }
}
