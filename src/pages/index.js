import DownloadButton from "component/DownloadButton";
/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import LandingPageFooter from "component/LandingPageFooter";
// import styles from "../styles/Home.module.css";
import LandingPageHeader from "component/LandingPageHeader";
// import amplitude from "amplitude-js";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   amplitude.getInstance().init("c6bfad15264e45776f3a93fab4d5df3d", null, {
  //     includeReferrer: true,
  //     includeGclid: true,
  //     includeFbclid: true,
  //     logAttributionCapturedEvent: true,
  //   });
  //   amplitude.getInstance().logEvent("landing_page_loaded");
  // }, []);
  return (
    <div className={"bg-0 min-h-screen dark"}>
      <Head>
        <title>Superlog</title>
        <meta name="description" content="Git GUI for Stacked Pull Requests Workflow" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://superlog.dev/" />
        <meta property="og:title" content="Superlog" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:description" content="Git GUI for Stacked Pull Requests Workflow" />
      </Head>

      <LandingPageHeader />

      <main className="px-4 pt-32 text-center bg-0">
        <h1 className={"font-bold text-gray-95 text-4xl lg:text-5xl tracking-tight pb-4"}>
          {/* Stay unblocked and <span className="text-blue-55">ship faster</span> */}
          {/* Build better software faster */}
          Stay unblocked and ship faster
          {/* Clean git history */}
          {/* Code review workflow that wont drive you crazy */}
          {/* Tired of reviewing BIG pull request? */}
        </h1>

        <p className="pb-20 text-xl text-gray-65 lg:text-2xl">
          Git GUI for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55 whitespace-nowrap">
            Stacked Pull Requests Workflow
          </span>
        </p>

        <div className="pb-20">
          <DownloadButton />
          {/* <a
            className="px-8 py-4 btn btn-hero"
            href="https://forms.gle/yVQoYt11bmYRj9Eu8"
            target={"_blank"}
            rel="noreferrer"
          >
            Download Superlog for Mac
          </a> */}
        </div>

        <p className="pb-10 text-2xl text-gray-65 lg:text-3xl">
          Drag and drop rebasing,{" "}
          {/* <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}> */}
          {/* <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}> */}
          {/* <span className={"text-gray-85 font-medium underline decoration-slate-600"}>visualized beautifully</span> */}
          <span className="text-gray-80 font-medium bg-gradient-to-r from-orangeRed-55 to-blue-55 bg-no-repeat [background-position:0_98%] [background-size:100%_0.1em] whitespace-nowrap">
            visualized beautifully
          </span>
        </p>
        <div className="max-w-5xl pb-32 mx-auto">
          <video autoPlay playsInline loop muted className="rounded-md shadow-xl">
            <source src={"/rebaseTree.mp4"} type="video/mp4" />
          </video>
        </div>

        {/* <p className="pb-20 text-3xl text-gray-65">
          For people who want to work with{" "}
          <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}>
            small, reviewable pull request
          </span>
        </p> */}

        <p className="pb-10 text-2xl text-gray-65 lg:text-3xl">
          Push and create pull request{" "}
          {/* <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}> */}
          <span className="text-gray-80 font-medium bg-gradient-to-r from-orangeRed-55 to-blue-55 bg-no-repeat [background-position:0_98%] [background-size:100%_0.1em] whitespace-nowrap">
            with 1-click
          </span>
        </p>

        <div className="max-w-5xl pb-32 mx-auto">
          <video autoPlay playsInline loop muted className="rounded-md shadow-xl">
            <source src={"/createPRs.mp4"} type="video/mp4" />
          </video>
        </div>

        <p className="pb-10 text-2xl text-gray-65 lg:text-3xl">
          Amend, rebase, then update pull request?{" "}
          {/* <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}> */}
          <span className="text-gray-80 font-medium bg-gradient-to-r from-orangeRed-55 to-blue-55 bg-no-repeat [background-position:0_98%] [background-size:100%_0.1em] whitespace-nowrap">
            Effortlessly
          </span>
        </p>

        <div className="max-w-5xl pb-32 mx-auto">
          <video autoPlay playsInline loop muted className="rounded-md shadow-xl">
            <source src={"/updatePRs.mp4"} type="video/mp4" />
          </video>
        </div>
        <LandingPageFooter />
      </main>
    </div>
  );
}
