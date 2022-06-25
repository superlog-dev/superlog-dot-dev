/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
// import styles from "../styles/Home.module.css";

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

      <div className="z-20 sticky w-screen bg-0 top-0 backdrop-blur bg-opacity-80 border-bg-1 border-b">
        <nav className="flex mx-auto items-center h-16 max-w-5xl px-4">
          <div className="w-full flex items-center">
            <a href="/">
              <span className="text-gray-85 font-bold text-xl">Superlog</span>
            </a>
          </div>
          <div className="flex space-x-6">
            <a href="https://medium.com/smallpr" className="text-2-on-1 hover:text-gray-80">
              Blog
            </a>
            <a
              className="text-gray-85 group flex items-center space-x-2 transition-all duration-300"
              href="https://join.slack.com/t/smallpr/shared_invite/zt-17hdr0wlv-PJ16YUw6Tz_o6ZYLcrIv~A"
              target="_blank"
              rel="noreferrer"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 60 60"
                preserveAspectRatio="xMidYMid meet"
                alt="Slack"
              >
                <title>Slack</title>
                <path
                  d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                  className={`fill-gray-70 group-hover:fill-[#36C5F0]`}
                />
                <path
                  d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                  className={`fill-gray-70 group-hover:fill-[#2EB67D]`}
                  fill="#2EB67D"
                />
                <path
                  d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12"
                  className={`fill-gray-70 group-hover:fill-[#ECB22E]`}
                  fill="#ECB22E"
                />
                <path
                  d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z"
                  className={`fill-gray-70 group-hover:fill-[#E01E5A]`}
                  fill="#E01E5A"
                />
              </svg> */}
              <span className="text-2-on-1 whitespace-nowrap group-hover:text-gray-80">Community</span>
            </a>
            <a href="https://medium.com/smallpr" className="text-2-on-1 hover:text-gray-80 whitespace-nowrap">
              About Us
            </a>
          </div>
        </nav>
      </div>

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
            Get Early Access
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
      <footer className="h-96"></footer>
    </div>
  );
}
