import { LensRendererExtension, Component } from "@k8slens/extensions";
import styles from "./styles.module.scss";
import React from "react";
import path from "path";
import { appPreferenceRegistry } from "@k8slens/extensions/dist/src/extensions/registries";
import { opticalPreferencesStore } from "./pref-store";


export class FramePage extends React.Component<{ extension: LensRendererExtension }> {
  render() {
    return (
      <div className={styles.optical}>
        <iframe className={styles.iffy} title="optical-title" src={opticalPreferencesStore.url} frameBorder="0"></iframe>
      </div>
    );
  }
}
