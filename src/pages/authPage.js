/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import axios from "axios";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const headers = {
    "Content-Type": "text/plain",
  };
  return (
    <div className={"bg-0 min-h-screen"}>
      <Head>
        <title>SmallPR</title>
        <meta name="description" content="Next generation Git GUI with first class stacked pull requests support" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smallpr.dev/" />
        <meta property="og:title" content="SmallPR" />
        <meta property="og:image" content="/preview.png" />
        <meta
          property="og:description"
          content="Next generation Git GUI with first class stacked pull requests support"
        />
      </Head>

      <main className="text-center pt-20 px-4">
        <button
          className="btn btn-1-on-1 btn-xs"
          onClick={async () => {
            const a = await axios
              .get(
                "https://github.com/login/oauth/authorize",
                {
                  params: {
                    client_id: "ad4d37b10ba5730e01fb",
                  },
                  withCredentials: false,
                  headers,
                }
                // { headers }
              )
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          Auth
        </button>
      </main>
      <footer className="h-96"></footer>
    </div>
  );
}
