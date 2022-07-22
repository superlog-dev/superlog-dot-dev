import "../styles/globals.css";

import { RecoilRoot, useSetRecoilState } from "recoil";

import amplitude from "amplitude-js";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    amplitude.getInstance().init("c6bfad15264e45776f3a93fab4d5df3d", null, {
      includeReferrer: true,
      includeGclid: true,
      includeFbclid: true,
      logAttributionCapturedEvent: true,
    });
    amplitude.getInstance().logEvent("page_loaded_" + (window?.location?.pathname ?? ""));
  }, []);
  return <Component {...pageProps} />;
}

const withRecoil = (WappedComponent) => {
  const Component = (props) => {
    return (
      <RecoilRoot>
        <WappedComponent {...props} />
      </RecoilRoot>
    );
  };
  Component.displayName = "withRecoil";
  return Component;
};

export default withRecoil(MyApp);
