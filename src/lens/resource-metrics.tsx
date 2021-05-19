import "./resource-metrics.scss";

import React, { createContext, useEffect, useRef, useState } from "react";
import { Component, K8sApi, Util } from "@k8slens/extensions";

interface Props extends React.HTMLProps<any> {
  tabs: React.ReactNode[];
  object?: K8sApi.KubeObject;
  loader?: () => void;
  interval?: number;
  className?: string;
  params?: {
    [key: string]: any;
  };
}

export type IResourceMetricsValue<T extends K8sApi.KubeObject = any, P = any> =
  {
    object: T;
    tabId: number;
    params?: P;
  };

export const ResourceMetricsContext =
  createContext<IResourceMetricsValue>(null);

const defaultProps: Partial<Props> = {
  interval: 60, // 1 min
};

ResourceMetrics.defaultProps = defaultProps;
function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay]);
}
export function ResourceMetrics({
  object,
  loader,
  interval,
  tabs,
  children,
  className,
  params,
}: Props) {
  const [tabId, setTabId] = useState<number>(0);

  useEffect(() => {
    if (loader) loader();
  }, [object]);

  useInterval(() => {
    if (loader) loader();
  }, interval * 1000);

  const renderContents = () => {
    return (
      <>
        <div className="switchers">
          <Component.RadioGroup
            asButtons
            className="flex box grow gaps"
            value={tabs[tabId]}
            onChange={(value) =>
              setTabId(tabs.findIndex((tab) => tab == value))
            }
          >
            {tabs.map((tab, index) => (
              <Component.Radio key={index} className="box grow" label={tab} value={tab} />
            ))}
          </Component.RadioGroup>
        </div>
        <ResourceMetricsContext.Provider value={{ object, tabId, params }}>
          <div className="graph">{children}</div>
        </ResourceMetricsContext.Provider>
        <div className="loader">
          <Component.Spinner />
        </div>
      </>
    );
  };

  return (
    <div className={Util.cssNames("ResourceMetrics flex column", className)}>
      {renderContents()}
    </div>
  );
}
