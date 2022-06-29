/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import LandingPageHeader from "component/LandingPageHeader";

export default function Home() {
  return (
    <div className={"bg-0 min-h-screen"}>
      <Head>
        <title>Superlog</title>
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

      <LandingPageHeader />

      <main className="text-center pt-20 px-4">
        <h1 className={"font-bold text-gray-95 text-4xl lg:text-5xl tracking-tight pb-4"}>
          {/* Stay unblocked and <span className="text-blue-55">ship faster</span> */}
          {/* Build better software faster */}
          Stay unblocked and ship faster
          {/* Clean git history */}
          {/* Code review workflow that wont drive you crazy */}
          {/* Tired of reviewing BIG pull request? */}
        </h1>

        {/* <p className="text-gray-65 pb-20 text-xl lg:text-2xl">
          Ask the auther to split it up with SmallPR.{" "}
          <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}>
            It only takes a few clicks!
          </span>
        </p> */}
        <p className="text-gray-65 pb-20 text-xl lg:text-2xl">
          Next generation Git GUI with first class{" "}
          <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}>
            stacked pull requests support
          </span>
        </p>

        {/* <p className="text-gray-65 pb-20 text-xl lg:text-2xl">
          Git UI for{" "}
          <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}>
            stacked pull requests workflow
          </span>
        </p> */}

        <div className="pb-20">
          <a
            className="btn btn-hero px-8 py-4"
            href="https://forms.gle/yVQoYt11bmYRj9Eu8"
            target={"_blank"}
            rel="noreferrer"
          >
            Download Superlog for Mac
          </a>
        </div>

        <p className="text-gray-65 pb-10 text-2xl lg:text-3xl">
          Drag and drop rebasing,{" "}
          {/* <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}> */}
          {/* <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}> */}
          {/* <span className={"text-gray-85 font-medium underline decoration-slate-600"}>visualized beautifully</span> */}
          <span className="text-gray-80 font-medium bg-gradient-to-r from-orangeRed-55 to-blue-55 bg-no-repeat [background-position:0_98%] [background-size:100%_0.1em]">
            visualized beautifully
          </span>
        </p>
        <div className="max-w-5xl mx-auto pb-32">
          <video autoPlay playsInline loop muted className="rounded-md shadow-xl">
            <source src={"/rebaseTree.mp4"} type="video/mp4" />
          </video>
        </div>

        {/* <p className="text-gray-65 pb-20 text-3xl">
          For people who want to work with{" "}
          <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}>
            small, reviewable pull request
          </span>
        </p> */}

        <p className="text-gray-65 pb-10 text-2xl lg:text-3xl">
          Push and create pull request{" "}
          {/* <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}> */}
          <span className="text-gray-80 font-medium bg-gradient-to-r from-orangeRed-55 to-blue-55 bg-no-repeat [background-position:0_98%] [background-size:100%_0.1em]">
            with 1-click
          </span>
        </p>

        <div className="max-w-5xl mx-auto pb-32">
          <video autoPlay playsInline loop muted className="rounded-md shadow-xl">
            <source src={"/createPRs.mp4"} type="video/mp4" />
          </video>
        </div>

        <p className="text-gray-65 pb-10 text-2xl lg:text-3xl">
          Amend, rebase, then update pull request?{" "}
          {/* <span className={"text-transparent bg-clip-text bg-gradient-to-r from-orangeRed-55 to-blue-55"}> */}
          <span className="text-gray-80 font-medium bg-gradient-to-r from-orangeRed-55 to-blue-55 bg-no-repeat [background-position:0_98%] [background-size:100%_0.1em]">
            Effortlessly
          </span>
        </p>

        <div className="max-w-5xl mx-auto pb-32">
          <video autoPlay playsInline loop muted className="rounded-md shadow-xl">
            <source src={"/updatePRs.mp4"} type="video/mp4" />
          </video>
        </div>
      </main>
      <footer className="h-96 text-white"> 123</footer>
    </div>
  );
}
