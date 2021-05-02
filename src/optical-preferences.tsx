import { Component } from "@k8slens/extensions";
import { observer } from "mobx-react";
import React from "react";
import { ChangeEvent } from 'react';
import { OpticalPreferencesStore } from "./pref-store";
import styles from "./styles.module.scss";

export class OpticalPreferenceProps {
  preference: OpticalPreferencesStore;
}

@observer
export class OpticalPreferenceInput extends React.Component<OpticalPreferenceProps> {

  render() {
    const { preference } = this.props;
    return (
    <input 
        className={styles.url}
        type = "text"
        value = {preference.url}
        onChange = {(e: ChangeEvent<HTMLInputElement>) => { preference.url = e.target.value; }}
    />
    );
  }
}

export class OpticalPreferenceHint extends React.Component {
  render() {
    return (
      <span>URL of the page to load in the Optical iFrame. Examples: https://miernicki.com/iframe-grid or https://miernicki.com/iframe</span>
    );
  }
}
