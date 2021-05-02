import { Component, K8sApi, Store } from "@k8slens/extensions";
import React from "react";
import { observable, toJS } from "mobx";

export type OpticalPreferencesModel = {
    url: string;
  };
  
export class OpticalPreferencesStore extends Store.ExtensionStore<OpticalPreferencesModel> {

    @observable url = '';

    private constructor() {
        super({
            configName: "optical-preferences-store",
            defaults: {
                url: 'https://miernicki.com/iframe'
            }
        });
    }

    protected fromStore({ url }: OpticalPreferencesModel): void {
        this.url = url;
    }

    toJSON(): OpticalPreferencesModel {
        return toJS({
            url: this.url
        }, {
            recurseEverything: true
        });
    }
}

export const opticalPreferencesStore = OpticalPreferencesStore.getInstance<OpticalPreferencesStore>();
