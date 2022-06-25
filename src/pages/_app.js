import "../styles/globals.css";

import { RecoilRoot, useSetRecoilState } from "recoil";

function MyApp({ Component, pageProps }) {
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
